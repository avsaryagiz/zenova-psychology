import CTASection from "@/components/shared/cta-section";
import {
  HeroSection,
  ServicesSection,
  TeamSection,
  TestimonialsSection,
} from "./sections";
import FAQSection from "@/components/shared/faq-section";
import { HOME_FAQ_ITEMS } from "@/config/constants/faq-dummy-data";

export default function HomeContainer() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <CTASection
        title="Hayatınızı Değiştirmeye Bugün Başlayın"
        description="Profesyonel destek almak için ilk adımı atın. Zenova Psikoloji
            olarak, ruh sağlığınız için yanınızdayız. Size yardımcı olmak için
            buradayız."
        backgroundImage="/images/home/hero/aile-terapisi.jpg"
      />
      <TestimonialsSection />
      <TeamSection />
      <FAQSection
        id="sikca-sorulan-sorular"
        titleSection={{
          description:
            " Psikolojik danışmanlık hizmetlerimiz hakkında merak edilenler.",
        }}
        ITEMS={HOME_FAQ_ITEMS}
      />
    </main>
  );
}
