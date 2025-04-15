import VideoGalleryContainer from "@/containers/video-galeri";
import { getCachedVideos } from "@/lib/services";

export default async function VideoGalleryPage() {
  const videos = await getCachedVideos();
  return <VideoGalleryContainer videos={videos} />;
}
