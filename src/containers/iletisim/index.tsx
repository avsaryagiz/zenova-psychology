import { ContactInformationAndFormSection, LocationSection } from "./sections";
import HeroSection from "@/components/shared/hero-section";
import FAQSection from "@/components/shared/faq-section";
import CTASection from "@/components/shared/cta-section";
import { CONTACT_FAQ_ITEMS } from "@/config/constants/faq-dummy-data";

export default function ContactContainer() {
  return (
    <main className="flex flex-col">
      <HeroSection
        id="iletisim"
        title="Bize Ulaşın"
        description="Zenova Psikoloji ile iletişime geçin. Sorularınız, randevu talepleriniz veya geri bildirimleriniz için bize ulaşabilirsiniz."
      />
      <ContactInformationAndFormSection />
      <LocationSection />
      <FAQSection
        id="iletisim-sikca-sorulan-sorular"
        titleSection={{
          description:
            "İletişim ve randevu süreçleri hakkında sık sorulan soruların cevaplarını burada bulabilirsiniz.",
        }}
        ITEMS={CONTACT_FAQ_ITEMS}
      />
      <CTASection
        title="Profesyonel Destek İçin İlk Adımı Atın"
        description="Ruh sağlığınız için profesyonel destek almak istiyorsanız, uzman ekibimiz size yardımcı olmak için hazır."
      />
    </main>
  );
}
