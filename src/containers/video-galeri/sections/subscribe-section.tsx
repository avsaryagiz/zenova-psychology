import Image from "next/image";
import { buttonVariants } from "@/components/ui";
import TitleSection from "@/components/shared/title-section";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/config/routes";

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
              href={ROUTES.SOCIAL.YOUTUBE}
              title="YouTube Kanalımıza Abone Olun"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "w-fit")}
              role="button"
              aria-label="YouTube Kanalımıza Abone Olun"
            >
              Abone Ol
            </a>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl border">
            <a
              href={ROUTES.SOCIAL.YOUTUBE}
              title="YouTube Kanalımıza Abone Olun"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Image
                src="/images/zenova-youtube-subscribe.webp"
                alt="YouTube Kanalı"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
