import { JoinOurTeamSection, TeamMembersSection } from "./sections";
import HeroSection from "@/components/shared/hero-section";
import CTASection from "@/components/shared/cta-section";

export default function TeamContainer() {
  return (
    <main className="flex flex-col">
      <HeroSection
        title="Uzman Ekibimiz"
        description="Zenova Psikoloji'de, alanında uzman ve deneyimli psikologlardan
            oluşan profesyonel bir ekip ile hizmet veriyoruz. Her biri kendi
            alanında uzmanlaşmış terapistlerimizle tanışın."
      />
      <TeamMembersSection />
      <JoinOurTeamSection />
      <CTASection
        title="Uzmanlarımızla Tanışmaya Hazır mısınız?"
        description="Ruh sağlığınız için profesyonel destek almak istiyorsanız, uzman ekibimiz size yardımcı olmak için hazır."
      />
    </main>
  );
}
