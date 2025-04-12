import HeroSection from "@/components/shared/hero-section";
import {
  OurValuesSection,
  ApproachSection,
  OurStorySection,
  StatsSection,
} from "./sections";
import CTASection from "@/components/shared/cta-section";

export default function MeetUsContainer() {
  return (
    <main className="flex flex-col">
      <HeroSection
        title="Zenova Psikoloji'yi Tanıyın"
        description="Ruh sağlığı yolculuğunuzda yanınızda olmak için buradayız.
            Profesyonel ve empatik yaklaşımımızla, hayatınızda pozitif
            değişimler yaratmanıza yardımcı oluyoruz."
      />
      <OurStorySection />
      <OurValuesSection />
      <StatsSection />
      <ApproachSection />
      <CTASection
        title="Profesyonel Destek İçin Yanınızdayız"
        description="Ruh sağlığınız için ilk adımı atmaya hazır mısınız? Zenova Psikoloji olarak, size yardımcı olmak için buradayız."
      />
    </main>
  );
}
