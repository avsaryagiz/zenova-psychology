import TitleSection from "@/components/shared/title-section";
import Image from "next/image";

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <TitleSection
          title="Terapi Süreci"
          description="Zenova Psikoloji'de terapi süreciniz nasıl ilerler? Adım adım terapi yolculuğunuzu keşfedin."
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="bg-primary/20 absolute top-0 left-4 h-full w-0.5 md:left-1/2 md:-ml-0.5"></div>

            {/* Steps */}
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative md:flex md:items-center">
                <div className="mb-6 flex md:mb-0 md:w-1/2 md:justify-end md:pr-8">
                  <div className="md:text-right">
                    <h3 className="text-xl font-semibold">İlk Görüşme</h3>
                    <p className="text-muted-foreground mt-2">
                      İlk görüşmede, sizi tanımak, sorunlarınızı anlamak ve
                      beklentilerinizi öğrenmek için zaman ayırırız. Bu görüşme,
                      uygun terapi planını oluşturmamıza yardımcı olur.
                    </p>
                  </div>
                </div>
                <div className="bg-primary text-primary-foreground absolute top-0 left-0 flex h-8 w-8 items-center justify-center rounded-full md:left-1/2 md:-ml-4">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="h-[150px] overflow-hidden rounded-lg">
                    <Image
                      src="/images/home/hero/profesyonel-destek.jpg"
                      alt="İlk Görüşme"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative md:flex md:items-center">
                <div className="mb-6 flex md:order-2 md:mb-0 md:w-1/2 md:justify-start md:pl-8">
                  <div>
                    <h3 className="text-xl font-semibold">Değerlendirme</h3>
                    <p className="text-muted-foreground mt-2">
                      İlk görüşmeden sonra, sorunlarınızı daha derinlemesine
                      anlamak için kapsamlı bir değerlendirme yaparız. Bu,
                      gerekirse psikolojik testleri de içerebilir.
                    </p>
                  </div>
                </div>
                <div className="bg-primary text-primary-foreground absolute top-0 left-0 flex h-8 w-8 items-center justify-center rounded-full md:left-1/2 md:-ml-4">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div className="md:order-1 md:w-1/2 md:pr-8">
                  <div className="h-[150px] overflow-hidden rounded-lg md:ml-auto">
                    <Image
                      src="/images/home/hero/profesyonel-destek.jpg"
                      alt="Değerlendirme"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative md:flex md:items-center">
                <div className="mb-6 flex md:mb-0 md:w-1/2 md:justify-end md:pr-8">
                  <div className="md:text-right">
                    <h3 className="text-xl font-semibold">Tedavi Planı</h3>
                    <p className="text-muted-foreground mt-2">
                      Değerlendirme sonuçlarına dayanarak, ihtiyaçlarınıza özel
                      bir tedavi planı oluştururuz. Bu plan, kullanılacak terapi
                      yaklaşımlarını, hedefleri ve tahmini süreyi içerir.
                    </p>
                  </div>
                </div>
                <div className="bg-primary text-primary-foreground absolute top-0 left-0 flex h-8 w-8 items-center justify-center rounded-full md:left-1/2 md:-ml-4">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="h-[150px] overflow-hidden rounded-lg">
                    <Image
                      src="/images/home/hero/profesyonel-destek.jpg"
                      alt="Tedavi Planı"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative md:flex md:items-center">
                <div className="mb-6 flex md:order-2 md:mb-0 md:w-1/2 md:justify-start md:pl-8">
                  <div>
                    <h3 className="text-xl font-semibold">Terapi Seansları</h3>
                    <p className="text-muted-foreground mt-2">
                      Düzenli terapi seanslarında, belirlenen hedeflere ulaşmak
                      için çalışırız. Her seans, önceki seansların üzerine inşa
                      edilir ve ilerlemenizi destekler.
                    </p>
                  </div>
                </div>
                <div className="bg-primary text-primary-foreground absolute top-0 left-0 flex h-8 w-8 items-center justify-center rounded-full md:left-1/2 md:-ml-4">
                  <span className="text-sm font-bold">4</span>
                </div>
                <div className="md:order-1 md:w-1/2 md:pr-8">
                  <div className="h-[150px] overflow-hidden rounded-lg md:ml-auto">
                    <Image
                      src="/images/home/hero/profesyonel-destek.jpg"
                      alt="Terapi Seansları"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative md:flex md:items-center">
                <div className="mb-6 flex md:mb-0 md:w-1/2 md:justify-end md:pr-8">
                  <div className="md:text-right">
                    <h3 className="text-xl font-semibold">
                      İlerleme Değerlendirmesi
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      Terapi sürecinde düzenli olarak ilerlemenizi değerlendirir
                      ve gerekirse tedavi planında ayarlamalar yaparız. Bu,
                      hedeflerinize ulaşmanızı sağlar.
                    </p>
                  </div>
                </div>
                <div className="bg-primary text-primary-foreground absolute top-0 left-0 flex h-8 w-8 items-center justify-center rounded-full md:left-1/2 md:-ml-4">
                  <span className="text-sm font-bold">5</span>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="h-[150px] overflow-hidden rounded-lg">
                    <Image
                      src="/images/home/hero/profesyonel-destek.jpg"
                      alt="İlerleme Değerlendirmesi"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="relative md:flex md:items-center">
                <div className="mb-6 flex md:order-2 md:mb-0 md:w-1/2 md:justify-start md:pl-8">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Sonlandırma ve Takip
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      Hedeflerinize ulaştığınızda, terapi sürecini
                      sonlandırırız. Ancak ihtiyaç duyduğunuzda tekrar
                      başvurabileceğiniz bir kapı her zaman açık kalır ve
                      düzenli takip seansları öneririz.
                    </p>
                  </div>
                </div>
                <div className="bg-primary text-primary-foreground absolute top-0 left-0 flex h-8 w-8 items-center justify-center rounded-full md:left-1/2 md:-ml-4">
                  <span className="text-sm font-bold">6</span>
                </div>
                <div className="md:order-1 md:w-1/2 md:pr-8">
                  <div className="h-[150px] overflow-hidden rounded-lg md:ml-auto">
                    <Image
                      src="/images/home/hero/profesyonel-destek.jpg"
                      alt="Sonlandırma ve Takip"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
