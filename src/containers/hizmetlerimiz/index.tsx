import HeroSection from "@/components/shared/hero-section";
import CTASection from "@/components/shared/cta-section";
import {
  DetailedServicesSection,
  ProcessSection,
  ServicesSection,
} from "./sections";

export default function ServicesContainer() {
  return (
    <main className="flex flex-col">
      <HeroSection
        id="hizmetlerimiz"
        title="Zenova Psikoloji Hizmetleri"
        description="Zenova Psikoloji olarak, bireylerin ve ailelerin ruh sağlığı ihtiyaçlarına yönelik kapsamlı ve profesyonel hizmetler sunuyoruz. Her danışanımızın benzersiz ihtiyaçlarına uygun, kanıta dayalı terapi yaklaşımları kullanıyoruz."
      />
      <ServicesSection />
      <DetailedServicesSection />
      <ProcessSection />
      <CTASection
        title="Profesyonel Destek İçin İlk Adımı Atın"
        description="Zenova Psikoloji olarak, ruh sağlığınız için yanınızdayız. Uzman
            ekibimizle size en uygun terapi hizmetini sunmak için hazırız."
      />
    </main>
  );
}
