"use client";

import Image from "next/image";
import Link from "next/link";
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
import { useEffect, useState } from "react";

const heroSlides = [
  {
    id: 1,
    image: "/images/hero/profesyonel-destek.jpg",
    title: "Profesyonel Psikolojik Destek",
    subtitle: "Uzman kadromuzla yanınızdayız",
    description:
      "Zenova Psikoloji olarak, ruh sağlığınız için profesyonel ve güvenilir hizmet sunuyoruz.",
  },
  {
    id: 2,
    image: "/images/hero/cocuk-ergen-terapisi.jpg",
    title: "Çocuk ve Ergen Terapisi",
    subtitle: "Çocuğunuzun gelişimi için",
    description:
      "Çocukların ve ergenlerin sağlıklı gelişimi için özel terapi programları sunuyoruz.",
  },
  {
    id: 3,
    image: "/images/hero/aile-terapisi.jpg",
    title: "Çift ve Aile Terapisi",
    subtitle: "İlişkilerinizi güçlendirin",
    description:
      "İlişkilerinizde yaşadığınız sorunları çözmek için profesyonel destek alın.",
  },
];

export default function HomeHeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    api.on("reInit", handleSelect);

    return () => {
      api.off("select", handleSelect);
      api.off("reInit", handleSelect);
    };
  }, [api]);

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="hero-section" className="relative w-full overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full"
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
                    <div className="max-w-xl space-y-4 text-white">
                      <p className="text-primary-foreground/80 text-sm font-medium md:text-base">
                        {slide.subtitle}
                      </p>
                      <h1 className="text-3xl leading-tight font-bold md:text-5xl">
                        {slide.title}
                      </h1>
                      <p className="text-primary-foreground/90 text-base md:text-lg">
                        {slide.description}
                      </p>
                      <div className="flex flex-wrap gap-4 pt-2">
                        <Link
                          href={ROUTES.INTERNAL.APPOINTMENT}
                          className={buttonVariants({
                            size: "lg",
                          })}
                          role="button"
                        >
                          Randevu Al
                        </Link>
                        <Link
                          href={ROUTES.INTERNAL.SERVICES.ROOT}
                          className={buttonVariants({
                            variant: "outline",
                            size: "lg",
                          })}
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
              variant="ghost"
              size="icon"
              className={`h-2 w-10 rounded-full p-0 ${index === current ? "bg-primary" : "bg-primary-foreground/30"}`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>

        <CarouselPrevious className="bg-background/80 hover:bg-background absolute top-1/2 left-4 -translate-y-1/2" />
        <CarouselNext className="bg-background/80 hover:bg-background absolute top-1/2 right-4 -translate-y-1/2" />
      </Carousel>
    </section>
  );
}
