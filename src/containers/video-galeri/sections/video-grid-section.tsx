import { PlayIcon, SearchIcon } from "@/components/icons";
import {
  Badge,
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import type { IVideoItem } from "@/types/shared-types";
import Image from "next/image";

interface IVideoGridSectionProps {
  videos: IVideoItem[];
  searchQuery: string;
  setSelectedVideo: (video: IVideoItem) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
}

export default function VideoGridSection({
  videos,
  setSelectedVideo,
  setSelectedCategory,
  setSearchQuery,
}: IVideoGridSectionProps) {
  return (
    <section className="pb-16 md:pb-24">
      <div className="container">
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
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="bg-muted mb-4 rounded-full p-3">
              <SearchIcon className="text-muted-foreground size-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Video Bulunamadı</h3>
            <p className="text-muted-foreground mb-6">
              Arama kriterlerinize uygun video bulunamadı. Lütfen farklı bir
              arama terimi deneyin veya filtreleri sıfırlayın.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory("tum");
                setSearchQuery("");
              }}
            >
              Filtreleri Sıfırla
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

function VideoCard({
  video,
  onPlay,
}: {
  video: IVideoItem;
  onPlay: () => void;
}) {
  return (
    <Card className="h-full gap-0 overflow-hidden border py-0">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={video.thumbnail || "/images/home/hero/profesyonel-destek.jpg"}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity hover:opacity-100">
          <Button
            variant="secondary"
            size="icon"
            className="h-12 w-12 rounded-full"
            onClick={onPlay}
          >
            <PlayIcon className="size-6" />
          </Button>
        </div>
        <div className="absolute right-2 bottom-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
          {video.duration}
        </div>
      </div>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-2 text-base">{video.title}</CardTitle>
        <CardDescription className="mt-1 line-clamp-2 text-xs">
          {video.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div className="text-muted-foreground text-xs">
          {video.date} • {video.views} görüntülenme
        </div>
        <Badge>
          {video.category === "egitim"
            ? "Eğitim"
            : video.category === "tanitim"
              ? "Tanıtım"
              : "Deneyim"}
        </Badge>
      </CardFooter>
    </Card>
  );
}
