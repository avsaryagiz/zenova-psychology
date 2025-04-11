import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";
import type { IVideoItem } from "@/types/shared-types";

interface IVideoModalProps {
  selectedVideo: IVideoItem;
  setSelectedVideo: (video: IVideoItem | null) => void;
}

export default function VideoModal({
  selectedVideo,
  setSelectedVideo,
}: IVideoModalProps & { selectedVideo: IVideoItem | null }) {
  return (
    <Dialog
      open={!!selectedVideo}
      onOpenChange={(open: boolean) => !open && setSelectedVideo(null)}
    >
      <DialogContent className="max-w-4xl pt-12 md:p-8 md:pt-12">
        <div className="relative">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              src={(selectedVideo as IVideoItem).videoUrl}
              title={(selectedVideo as IVideoItem).title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
        <DialogHeader className="px-4 pb-2 md:px-0 md:pb-0">
          <DialogTitle className="text-xl md:text-2xl leading-snug">
            {(selectedVideo as IVideoItem).title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground mt-2 text-sm md:text-base">
            {(selectedVideo as IVideoItem).description}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
