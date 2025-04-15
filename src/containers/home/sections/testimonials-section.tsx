"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { CommentsIcon, StarIcon } from "@/components/icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import TitleSection from "@/components/shared/title-section";

const testimonials = [
  {
    id: 1,
    name: "Ayşe Y.",
    title: "Bireysel Terapi Danışanı",
    image: "/images/logo/zenova-logo-mark.png",
    quote:
      "Zenova Psikoloji'de aldığım terapi seansları hayatımı değiştirdi. Artık kendimi daha iyi anlıyor ve sorunlarımla başa çıkabiliyorum. Dr. Elif Hanım'ın profesyonel yaklaşımı ve içten desteği sayesinde uzun süredir yaşadığım kaygı sorunlarımın üstesinden geldim.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mehmet K.",
    title: "Çift Terapisi Danışanı",
    image: "/images/logo/zenova-logo-mark.png",
    quote:
      "Eşimle yaşadığımız iletişim sorunları için aldığımız çift terapisi sayesinde ilişkimiz çok daha güçlendi. Terapistimiz Ahmet Bey, her iki tarafı da anlayarak sorunlarımızı çözmemize yardımcı oldu. Artık birbirimizi daha iyi anlıyor ve sorunlarımızı yapıcı bir şekilde çözebiliyoruz.",
    rating: 5,
  },
  {
    id: 3,
    name: "Zeynep A.",
    title: "Aile Terapisi Danışanı",
    image: "/images/logo/zenova-logo-mark.png",
    quote:
      "Oğlumun davranış sorunları için aldığımız destek sayesinde aile içi huzurumuzu yeniden kazandık. Selin Hanım'ın sabırlı ve anlayışlı yaklaşımı, hem oğlumuzun hem de bizim ebeveynler olarak gelişmemize büyük katkı sağladı. Artık daha sağlıklı bir aile dinamiğine sahibiz.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ali R.",
    title: "Travma Terapisi Danışanı",
    image: "/images/logo/zenova-logo-mark.png",
    quote:
      "Yaşadığım trafik kazası sonrası gelişen travma belirtileri için Zenova Psikoloji'ye başvurdum. Burak Bey'in EMDR terapisi yaklaşımı sayesinde, kaza anılarının beni etkileme şiddetini azalttık ve normal hayatıma dönmeyi başardım. Profesyonel ve güven verici yaklaşımları için çok teşekkür ederim.",
    rating: 5,
  },
  {
    id: 5,
    name: "Deniz T.",
    title: "Bireysel Terapi Danışanı",
    image: "/images/logo/zenova-logo-mark.png",
    quote:
      "İş hayatındaki stres ve tükenmişlik hissiyle başa çıkmakta zorlanıyordum. Zenova Psikoloji'deki terapistim, hem iş-yaşam dengemi kurmama hem de kendime daha fazla değer vermeme yardımcı oldu. Artık sınırlarımı koruyabiliyor ve hayattan daha fazla keyif alabiliyorum.",
    rating: 4,
  },
];

export default function TestimonialsSection() {
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
    <section id="danisan-yorumlari" className="py-10 md:py-16 lg:py-24">
      <div className="container mb-12 flex flex-col gap-12 px-4 sm:px-6">
        <TitleSection
          title="Danışan Yorumları"
          description=" Danışanlarımızın deneyimleri ve başarı hikayeleri. Sizin de
            hayatınızı değiştirebiliriz."
        />

        <Carousel
          setApi={setApi}
          className="w-full max-sm:mx-auto max-sm:max-w-xs"
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map(({ id, image, name, quote, rating, title }) => (
              <CarouselItem
                key={id}
                className="sm:basis-1/2 sm:pl-4 lg:basis-1/3"
              >
                <Card className="h-full">
                  <CardHeader className="flex items-start justify-between">
                    <CommentsIcon className="text-primary mb-3 h-6 w-6 md:h-8 md:w-8" />
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon
                          key={i}
                          className={cn(
                            "h-3 w-3 md:h-4 md:w-4",
                            i < rating
                              ? "text-primary fill-primary"
                              : "text-muted-foreground",
                          )}
                        />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed italic md:text-base">
                      &quot;{quote}&quot;
                    </p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Avatar className="relative mr-3 size-10 overflow-hidden rounded-full border md:mr-4 md:size-12">
                      <AvatarImage
                        src={image}
                        alt="Zenova Psikoloji Danışanı"
                        className="object-contain"
                      />
                      <AvatarFallback className="bg-transparent">
                        <Image
                          src="/images/logo/zenova-logo-mark.png"
                          alt="Zenova Psikoloji Danışanı"
                          fill
                          className="object-contain"
                        />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-semibold md:text-base">
                        {name}
                      </h4>
                      <p className="text-muted-foreground text-xs md:text-sm">
                        {title}
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-0 hidden h-8 w-8 -translate-y-1/2 sm:flex md:h-10 md:w-10" />
          <CarouselNext className="absolute top-1/2 right-0 hidden h-8 w-8 -translate-y-1/2 sm:flex md:h-10 md:w-10" />
        </Carousel>

        <div className="mt-6 flex justify-center gap-1 md:mt-8 md:gap-2">
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant="muted"
              size="indicator"
              className={`${index === current ? "bg-primary" : ""}`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
