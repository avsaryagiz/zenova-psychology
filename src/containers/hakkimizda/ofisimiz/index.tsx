import { FacilitiesSection, LocationSection } from "./sections";
import HeroSection from "@/components/shared/hero-section";
import FAQSection from "@/components/shared/faq-section";
import { OFFICE_FAQ_ITEMS } from "@/config/constants/faq-dummy-data";

export default function OfficeContainer() {
  return (
    <main className="flex flex-col">
      <HeroSection
        id="zenova-psikoloji-ofisi"
        title="Zenova Psikoloji Ofisi"
        description="Zenova Psikoloji'nin modern ve rahatlatıcı ofis ortamını keşfedin.
            Konforlu ve güvenli bir atmosferde profesyonel psikolojik destek
            hizmetlerimizden yararlanın."
      />
      {/* @todo make the section below mobile responsive */}
      {/* <OfficeGallerySection /> */}
      <LocationSection />
      <FacilitiesSection />
      <FAQSection
        id="ofisimiz-sikca-sorulan-sorular"
        titleSection={{
          description:
            "Ofisimiz hakkında merak edilen soruların cevaplarını burada bulabilirsiniz.",
        }}
        ITEMS={OFFICE_FAQ_ITEMS}
      />
    </main>
  );
}
