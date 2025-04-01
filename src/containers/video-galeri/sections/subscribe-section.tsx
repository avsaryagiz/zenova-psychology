import Image from "next/image";
import { buttonVariants } from "@/components/ui";
import { PlayIcon } from "@/components/icons";
import TitleSection from "@/components/shared/title-section";
import { cn } from "@/lib/utils";

export default function SubscribeSection() {
  return (
    <section className="bg-card py-16 shadow-inner md:py-24">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="flex flex-col gap-4">
            <TitleSection
              title="YouTube Kanalımıza Abone Olun"
              description="Ruh sağlığı, psikoloji ve kişisel gelişim konularında düzenli olarak yayınladığımız bilgilendirici videolardan haberdar olmak için YouTube kanalımıza abone olun."
              titleClassName="items-start"
              descriptionClassName="text-start m-0"
            />

            <a
              href="https://www.youtube.com/channel/UCxxx"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "w-fit")}
              role="button"
              aria-label="YouTube Kanalına Abone Ol"
            >
              Abone Ol
            </a>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="/images/home/hero/profesyonel-destek.jpg"
              alt="YouTube Kanalı"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="bg-primary text-primary-foreground flex h-16 w-16 items-center justify-center rounded-full">
                <PlayIcon className="size-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
