import { BusIcon, CarIcon, TrainIcon } from "@/components/icons";
import TitleSection from "@/components/shared/title-section";
import OfficeInfo from "@/components/shared/office-info";

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

          <div className="h-[400px] overflow-hidden rounded-lg border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.1233310971!2d29.026516776083867!3d40.99050197135312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zS2FkxLFrw7Z5LCBNb2RhIENkLiwgMzQ3MTAgS2FkxLFrw7Z5L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1711918400000!5m2!1str!2str"
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
