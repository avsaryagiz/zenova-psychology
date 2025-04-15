import { notFound } from "next/navigation";
import { TitleSection } from "@/components/shared";
import VideoCard from "./components/video-card";
import type { UnifiedVideo } from "@/types/strapi-types";

interface IVideoGridSectionProps {
  videos: UnifiedVideo[];
  setSelectedVideo: (video: UnifiedVideo) => void;
}

export default function VideoGridSection({
  videos,
  setSelectedVideo,
}: IVideoGridSectionProps) {
  return (
    <section className="py-16 md:py-24" suppressHydrationWarning>
      <TitleSection title="Youtube Videolarımız" />
      <div className="container mt-12">
        {videos.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onPlay={() => setSelectedVideo(video)}
              />
            ))}
          </div>
        ) : (
          notFound()
        )}
      </div>
    </section>
  );
}
