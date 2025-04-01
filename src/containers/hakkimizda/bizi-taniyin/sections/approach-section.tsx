import Image from "next/image";
import Link from "next/link";
import TitleSection from "@/components/shared/title-section";
import { buttonVariants } from "@/components/ui";
import { ROUTES } from "@/config/routes";

export default function ApproachSection() {
  return (
    <section id="yaklasimimiz" className="py-16 shadow-inner md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="/images/home/hero/profesyonel-destek.jpg"
              alt="Zenova Psikoloji Terapi Seansı"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <TitleSection
              title="Yaklaşımımız"
              titleClassName="items-start"
              description={
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Zenova Psikoloji&apos;de, her bireyin benzersiz olduğuna ve
                    kişiye özel bir terapi yaklaşımı gerektirdiğine inanıyoruz.
                    Bu nedenle, farklı terapi yöntemlerini bütünleştirerek,
                    danışanlarımızın ihtiyaçlarına en uygun tedavi planını
                    oluşturuyoruz.
                  </p>
                  <p>
                    Bilişsel Davranışçı Terapi (BDT), Şema Terapi, EMDR,
                    Psikodinamik Terapi ve Mindfulness gibi kanıta dayalı
                    yaklaşımları kullanarak, danışanlarımızın sorunlarının
                    kökenine inmeyi ve kalıcı çözümler sunmayı hedefliyoruz.
                  </p>
                  <p>
                    Terapide güvenli ve yargısız bir ortam yaratmak,
                    danışanlarımızın kendilerini rahatça ifade edebilmeleri için
                    çok önemlidir. Bu nedenle, ilk seanstan itibaren güvene
                    dayalı bir terapötik ilişki kurmaya özen gösteriyoruz.
                  </p>
                </div>
              }
            />

            <div className="mt-8">
              <Link
                href={ROUTES.INTERNAL.SERVICES.ROOT}
                className={buttonVariants({ size: "lg" })}
              >
                Hizmetlerimizi Keşfedin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
