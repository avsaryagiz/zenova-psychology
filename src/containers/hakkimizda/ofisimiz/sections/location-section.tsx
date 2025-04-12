import { BusIcon, CarIcon, TrainIcon } from "@/components/icons";
import TitleSection from "@/components/shared/title-section";
import OfficeInfo from "@/components/shared/office-info";
import { GOOGLE_MAPS_IFRAME_URL } from "@/config";

export default function LocationSection() {
  return (
    <section className="bg-card py-16 shadow-inner md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <TitleSection
              title="Konum ve İletişim"
              titleClassName="items-start mb-6"
            />
            <OfficeInfo />

            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold">Ulaşım</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <TrainIcon className="text-primary h-5 w-5" />
                  <span className="text-muted-foreground">
                    Metro: Kadıköy istasyonuna 5 dakika yürüme mesafesinde
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <BusIcon className="text-primary h-5 w-5" />
                  <span className="text-muted-foreground">
                    Otobüs: 14, 16, 20, 22 hatları ile Moda Caddesi durağında
                    inin
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CarIcon className="text-primary h-5 w-5" />
                  <span className="text-muted-foreground">
                    Araç: Bina altında ücretli otopark mevcuttur
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[450px] overflow-hidden rounded-lg border">
            <iframe
              src={GOOGLE_MAPS_IFRAME_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zenova Psikoloji Konum"
              className="h-full w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
