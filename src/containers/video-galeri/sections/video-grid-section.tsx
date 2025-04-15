import { notFound } from "next/navigation";
import { TitleSection } from "@/components/shared";
import VideoCard from "./components/video-card";
import type { UnifiedVideo } from "@/types/strapi-types";
import { Button } from "@/components/ui";
import { useEffect, useState } from "react";
import { DEFAULT_VARIABLES } from "@/config/constants";

interface IVideoGridSectionProps {
  videos: UnifiedVideo[];
  setSelectedVideo: (video: UnifiedVideo) => void;
}

export default function VideoGridSection({
  videos,
  setSelectedVideo,
}: IVideoGridSectionProps) {
  const [visibleVideos, setVisibleVideos] = useState<UnifiedVideo[]>([]);

  useEffect(() => {
    setVisibleVideos(videos.slice(0, DEFAULT_VARIABLES.ITEMS_PER_PAGE));
  }, [videos]);

  const loadMoreVideos = () => {
    const nextVideos = videos.slice(
      visibleVideos.length,
      visibleVideos.length + DEFAULT_VARIABLES.ITEMS_PER_PAGE,
    );
    setVisibleVideos([...visibleVideos, ...nextVideos]);
  };
  return (
    <section className="py-16 md:py-24" suppressHydrationWarning>
      <TitleSection title="Youtube Videolarımız" />
      <div className="container mt-12">
        {videos.length > 0 ? (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visibleVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onPlay={() => setSelectedVideo(video)}
                />
              ))}
            </div>
            {/* Load More Button */}
            {visibleVideos.length < videos.length && (
              <div className="mt-16 flex justify-center">
                <Button onClick={loadMoreVideos} className="cursor-pointer">
                  Daha Fazla Yükle
                </Button>
              </div>
            )}
          </>
        ) : (
          notFound()
        )}
      </div>
    </section>
  );
}
