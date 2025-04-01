"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui";
import { ROUTES } from "@/config/routes";
import { cn } from "@/lib/utils";
import { AppointmentButton } from "@/components/shared/appointment-button";

const heroSlides = [
  {
    id: 1,
    image: "/images/home/hero/profesyonel-destek.jpg",
    title: "Profesyonel Psikolojik Destek",
    subtitle: "Uzman kadromuzla yanınızdayız",
    description:
      "Zenova Psikoloji olarak, ruh sağlığınız için profesyonel ve güvenilir hizmet sunuyoruz.",
  },
  {
    id: 2,
    image: "/images/home/hero/cocuk-ergen-terapisi.jpg",
    title: "Çocuk ve Ergen Terapisi",
    subtitle: "Çocuğunuzun gelişimi için",
    description:
      "Çocukların ve ergenlerin sağlıklı gelişimi için özel terapi programları sunuyoruz.",
  },
  {
    id: 3,
    image: "/images/home/hero/aile-terapisi.jpg",
    title: "Çift ve Aile Terapisi",
    subtitle: "İlişkilerinizi güçlendirin",
    description:
      "İlişkilerinizde yaşadığınız sorunları çözmek için profesyonel destek alın.",
  },
];

export default function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="hero" className="relative w-full overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-[500px] md:h-[600px]">
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id} className="relative w-full">
              <div className="relative h-full w-full">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
                <div className="absolute inset-0 flex items-center">
                  <div className="container">
                    <div className="max-w-[280px] space-y-4 text-white max-sm:mx-auto sm:max-w-xl">
                      <p className="text-primary-foreground/80 text-sm font-medium md:text-base">
                        {slide.subtitle}
                      </p>
                      <h1>{slide.title}</h1>
                      <p className="text-primary-foreground/90 text-sm sm:text-base md:text-lg">
                        {slide.description}
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
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute right-0 bottom-4 left-0 flex justify-center gap-2">
          {heroSlides.map((_, index) => (
            <Button
              key={index}
              variant="muted"
              size="indicator"
              className={`${index === current ? "bg-primary" : ""}`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <CarouselPrevious className="bg-background/80 hover:bg-background absolute top-1/2 left-4 -translate-y-1/2" />
        <CarouselNext className="bg-background/80 hover:bg-background absolute top-1/2 right-4 -translate-y-1/2" />
      </Carousel>
    </section>
  );
}
