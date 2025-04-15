import Image from "next/image";
import AppointmentButton from "./appointment-button";
import { cn, slugify } from "@/lib/utils";
import Link from "next/link";
import { ROUTES } from "@/config/routes";
import { buttonVariants } from "../ui";

interface IHeroSectionProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
}

export default function HeroSection({
  title,
  description,
  imageUrl = "/images/home/hero/profesyonel-destek.jpg",
  imageAlt = "Zenova Psikoloji",
}: IHeroSectionProps) {
  return (
    <section
      id={slugify(title)}
      className="relative h-[50vh] overflow-hidden md:h-[40vh]"
    >
      <div className="relative h-full w-full py-16 md:py-24">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          fill
          priority
          className="object-cover blur-xs brightness-[0.9]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-[280px] space-y-4 text-white max-sm:mx-auto sm:max-w-xl">
              <h1>{title}</h1>
              <p className="text-primary-foreground/90 text-sm sm:text-base md:text-lg">
                {description}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <AppointmentButton />
                <Link
                  href={ROUTES.INTERNAL.SERVICES.ROOT}
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "lg",
                    }),
                    "max-sm:h-8 max-sm:gap-1.5 max-sm:px-3 max-sm:has-[>svg]:px-2.5",
                  )}
                  role="button"
                >
                  Hizmetlerimiz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
