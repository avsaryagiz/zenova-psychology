import Image from "next/image";
import TitleSection from "@/components/shared/title-section";
import { Card, CardContent } from "@/components/ui";

// Office facilities
const facilities = [
  {
    title: "Konforlu Bekleme Alanı",
    description:
      "Rahat koltuklar, taze içecekler ve sakinleştirici bir atmosfer ile donatılmış ferah bekleme alanımız.",
    image: "/images/home/hero/profesyonel-destek.jpg",
  },
  {
    title: "Özel Terapi Odaları",
    description:
      "Ses yalıtımlı, konforlu ve güvenli bir ortam sağlayan özel tasarlanmış terapi odalarımız.",
    image: "/images/home/hero/profesyonel-destek.jpg",
  },
  {
    title: "Çocuk Terapi Odası",
    description:
      "Çocukların kendilerini rahat hissedecekleri, oyuncaklar ve sanat malzemeleriyle donatılmış özel çocuk terapi odamız.",
    image: "/images/home/hero/profesyonel-destek.jpg",
  },
  {
    title: "Grup Terapi Salonu",
    description:
      "Grup terapileri ve workshoplar için tasarlanmış, rahat ve işlevsel grup terapi salonumuz.",
    image: "/images/home/hero/profesyonel-destek.jpg",
  },
];

export default function FacilitiesSection() {
  return (
    <section className="py-16 shadow-inner md:py-24">
      <div className="container">
        <TitleSection
          title="Ofis Olanaklarımız"
          description="Zenova Psikoloji'de, danışanlarımızın kendilerini rahat ve güvende hissetmeleri için özenle tasarlanmış alanlar sunuyoruz."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {facilities.map((facility, index) => (
            <Card key={index} className="overflow-hidden border py-0">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{facility.title}</h3>
                <p className="text-muted-foreground">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
