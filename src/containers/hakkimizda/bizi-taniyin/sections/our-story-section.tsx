import Image from "next/image";
import TitleSection from "@/components/shared/title-section";

export default function OurStorySection() {
  return (
    <section id="hikayemiz" className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <TitleSection
              title="Hikayemiz"
              titleClassName="items-start"
              description={
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Zenova Psikoloji, 2010 yılında Dr. Elif Yılmaz tarafından,
                    ruh sağlığı hizmetlerini daha erişilebilir ve stigmasız hale
                    getirme vizyonuyla kuruldu. Başlangıçta küçük bir ofiste
                    hizmet veren merkezimiz, zamanla büyüyerek İstanbul&apos;un
                    önde gelen psikoloji merkezlerinden biri haline geldi.
                  </p>
                  <p>
                    Adımız &quot;Zenova&quot;, yenilenme ve dönüşüm anlamına
                    gelen &quot;Zen&quot; ile yeni başlangıç anlamındaki &quot;Nova&quot;
                    kelimelerinin birleşiminden geliyor. Bu isim,
                    danışanlarımızın hayatlarında yaratmak istediğimiz pozitif
                    değişimi ve yeni başlangıçları temsil ediyor.
                  </p>
                  <p>
                    Bugün, alanında uzman psikologlardan oluşan geniş bir
                    ekiple, bireysel terapiden çift terapisine, aile
                    danışmanlığından travma tedavisine kadar geniş bir yelpazede
                    hizmet sunuyoruz. Her danışanımızın benzersiz olduğuna
                    inanıyor ve kişiye özel terapi yaklaşımları geliştiriyoruz.
                  </p>
                </div>
              }
            />
          </div>
          <div className="relative order-1 h-[400px] overflow-hidden rounded-lg md:order-2">
            <Image
              src="/images/home/hero/profesyonel-destek.jpg"
              alt="Zenova Psikoloji Merkezi"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
