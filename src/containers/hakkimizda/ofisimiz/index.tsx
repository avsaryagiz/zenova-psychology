import {
  FacilitiesSection,
  LocationSection,
  OfficeGallerySection,
} from "./sections";
import HeroSection from "@/components/shared/hero-section";
import FAQSection from "@/components/shared/faq-section";
import { OFFICE_FAQ_ITEMS } from "@/config/constants/faq-dummy-data";
import CTASection from "@/components/shared/cta-section";

export default function OfficeContainer() {
  return (
    <main className="flex flex-col">
      <HeroSection
        title="Zenova Psikoloji Ofisi"
        description="Zenova Psikoloji'nin modern ve rahatlatıcı ofis ortamını keşfedin.
            Konforlu ve güvenli bir atmosferde profesyonel psikolojik destek
            hizmetlerimizden yararlanın."
      />
      <OfficeGallerySection />
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
      <CTASection
        title="Ofisimizi Ziyaret Edin"
        description="Zenova Psikoloji'nin rahatlatıcı ve güvenli ortamında profesyonel
          destek almak için hemen randevu alın."
      />
    </main>
  );
}
