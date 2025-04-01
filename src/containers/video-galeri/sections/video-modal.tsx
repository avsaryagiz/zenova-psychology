import { CloseIcon } from "@/components/icons";
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
      <DialogContent className="max-w-4xl p-0 md:p-6">
        <div className="relative">
          <button
            onClick={() => setSelectedVideo(null)}
            className="bg-background text-foreground absolute -top-2 -right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full shadow-md md:top-2 md:right-2"
          >
            <CloseIcon className="size-4" />
          </button>
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              src={(selectedVideo as IVideoItem).videoUrl}
              title={(selectedVideo as IVideoItem).title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            ></iframe>
          </div>
        </div>
        <DialogHeader className="px-4 pt-4 pb-2 md:px-0 md:pt-2 md:pb-0">
          <DialogTitle className="text-xl md:text-2xl">
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
