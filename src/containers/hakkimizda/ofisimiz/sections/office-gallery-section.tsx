import Image from "next/image";
import {
  Card,
  CardContent,
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  Carousel,
} from "@/components/ui";
import TitleSection from "@/components/shared/title-section";

// Office images
const officeImages = [
  {
    src: "/images/home/hero/profesyonel-destek.jpg",
    alt: "Zenova Psikoloji Bekleme Salonu",
  },
  {
    src: "/images/home/hero/profesyonel-destek.jpg",
    alt: "Zenova Psikoloji Terapi Odası 1",
  },
  {
    src: "/images/home/hero/profesyonel-destek.jpg",
    alt: "Zenova Psikoloji Terapi Odası 2",
  },
  {
    src: "/images/home/hero/profesyonel-destek.jpg",
    alt: "Zenova Psikoloji Çocuk Terapi Odası",
  },
  {
    src: "/images/home/hero/profesyonel-destek.jpg",
    alt: "Zenova Psikoloji Grup Terapi Odası",
  },
  {
    src: "/images/home/hero/profesyonel-destek.jpg",
    alt: "Zenova Psikoloji Dış Görünüm",
  },
];

export default function OfficeGallerySection() {
  return (
    <section className="container py-16 md:py-24">
      <TitleSection
        title="Ofis Galerimiz"
        description="Zenova Psikoloji'nin ferah ve rahatlatıcı ortamını keşfedin. Modern
            tasarımlı ofisimiz, terapileriniz için güvenli ve konforlu bir alan
            sunar."
      />

      <Carousel className="mt-12 w-full max-sm:mx-auto max-sm:max-w-xs">
        <CarouselContent>
          {officeImages.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden border py-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={
                        image.src || "/images/home/hero/profesyonel-destek.jpg"
                      }
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-center text-sm">{image.alt}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2" />
      </Carousel>
    </section>
  );
}
