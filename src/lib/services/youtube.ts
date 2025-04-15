import { VideoPreview } from "@/types/strapi-types";
import { google, youtube_v3 } from "googleapis";

const youtube = google.youtube({
  version: "v3",
  auth: process.env.GOOGLE_API_KEY,
});

export async function getUploadedVideos(
  channelIds: string[],
): Promise<VideoPreview[]> {
  try {
    const channelResponse = await youtube.channels.list({
      part: ["contentDetails"],
      id: channelIds,
    });

    const uploadsPlaylistId =
      channelResponse.data.items?.[0]?.contentDetails?.relatedPlaylists
        ?.uploads;

    if (!uploadsPlaylistId) throw new Error("Uploads playlist ID not found");

    const videoResponse = await youtube.playlistItems.list({
      part: ["snippet", "contentDetails"],
      playlistId: uploadsPlaylistId,
      maxResults: 50, // Maximum number of videos to fetch
    });

    // Now fetch video details (including duration) for each video
    const videos = videoResponse.data.items
      ? await Promise.all(
          videoResponse.data.items.map(async (item) => {
            const videoId = item.snippet?.resourceId?.videoId;

            if (!videoId) return null;

            const videoDetails = await getYoutubeVideoById(videoId);

            return videoDetails
              ? {
                  ...videoDetails,
                  id: videoId,
                  title: item.snippet?.title || "",
                  description: item.snippet?.description || "",
                  thumbnailURL: item.snippet?.thumbnails?.standard?.url || "",
                  publishedAt: item.snippet?.publishedAt
                    ? new Date(item.snippet.publishedAt).toLocaleDateString(
                        "tr-TR",
                      )
                    : "",
                }
              : null;
          }),
        )
      : [];

    // Filter out null results
    return videos.filter((video) => video !== null) as VideoPreview[];
  } catch (err) {
    console.error("Error fetching videos:", err);
    return [];
  }
}

export async function getYoutubeVideoById(
  id: string,
): Promise<VideoPreview | null> {
  try {
    const response = await youtube.videos.list({
      part: ["snippet", "statistics", "contentDetails"], // Include contentDetails for duration
      id: [id],
    });

    const video = response.data.items?.[0];
    if (!video) return null;

    const duration = video.contentDetails?.duration || "unknown"; // Extract video duration

    return {
      id: video.id,
      title: video.snippet?.title || "",
      description: video.snippet?.description || "",
      thumbnailURL: video.snippet?.thumbnails?.high?.url || "",
      publishedAt: video.snippet?.publishedAt
        ? new Date(video.snippet.publishedAt).toLocaleDateString("tr-TR")
        : "unknown",
      views: video.statistics?.viewCount,
      duration, // Add the duration to the result
    };
  } catch (err) {
    console.error("Error fetching video details:", err);
    return null;
  }
}
export async function getVideoCaptions(
  videoId: string,
): Promise<youtube_v3.Schema$Caption[]> {
  const response = await youtube.captions.list({
    part: ["snippet"],
    videoId,
  });

  const captions = response.data.items?.map((item) => ({
    id: item.id,
    name: item.snippet?.name,

    // Get the caption file
    file: item.id
      ? youtube.captions.download({
          id: item.id,
          tfmt: "srt",
        })
      : null,
  }));

  return captions || [];
}

export async function getYoutubeVideoDetails(
  id: string,
): Promise<{ thumbnailURL: string; publishedAt: string } | null> {
  try {
    const response = await youtube.videos.list({
      part: ["snippet", "statistics"],
      id: [id],
    });

    const video = response.data.items?.[0];
    if (!video) return null;

    const thumbnailURL = video.snippet?.thumbnails?.standard?.url || "";

    return {
      thumbnailURL,
      publishedAt: video.snippet?.publishedAt
        ? new Date(video.snippet.publishedAt).toLocaleDateString("tr-TR")
        : "unknown",
    };
  } catch (err) {
    console.error("YouTube API error:", err);
    return null;
  }
}
