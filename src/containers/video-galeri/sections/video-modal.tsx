import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";
import { getYouTubeEmbedUrl } from "@/lib/utils";
import { UnifiedVideo } from "@/types/strapi-types";

interface IVideoModalProps {
  selectedVideo: UnifiedVideo;
  setSelectedVideo: (video: UnifiedVideo | null) => void;
}

export default function VideoModal({
  selectedVideo,
  setSelectedVideo,
}: IVideoModalProps & { selectedVideo: UnifiedVideo | null }) {
  const embedVideoURL = getYouTubeEmbedUrl(selectedVideo?.url || "");
  return (
    <Dialog
      open={!!selectedVideo}
      onOpenChange={(open: boolean) => !open && setSelectedVideo(null)}
    >
      <DialogContent className="pt-12 md:p-8 md:pt-10">
        <div className="relative">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              src={embedVideoURL}
              title={selectedVideo?.title}
              width="640"
              height="360"
              allowFullScreen
              className="aspect-video h-full w-full"
            />
          </div>
        </div>
        <DialogHeader className="px-4 pb-2 md:px-0 md:pb-0">
          <DialogTitle className="text-xl leading-tight">
            {selectedVideo?.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground mt-2 text-sm leading-tight">
            {selectedVideo?.description}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
