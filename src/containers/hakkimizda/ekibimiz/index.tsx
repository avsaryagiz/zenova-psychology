import { JoinOurTeamSection, TeamMembersSection } from "./sections";
import HeroSection from "@/components/shared/hero-section";
import CTASection from "@/components/shared/cta-section";
import { getCachedBranches, getCachedExperts } from "@/lib/services";

export default async function TeamContainer() {
  const branchList = await getCachedBranches();
  const teamMembers = await getCachedExperts();

  return (
    <main className="flex flex-col">
      <HeroSection
        title="Uzman Ekibimiz"
        description="Zenova Psikoloji'de, alanında uzman ve deneyimli psikologlardan
            oluşan profesyonel bir ekip ile hizmet veriyoruz. Her biri kendi
            alanında uzmanlaşmış terapistlerimizle tanışın."
      />
      <TeamMembersSection branchList={branchList} teamMembers={teamMembers} />
      <JoinOurTeamSection />
      <CTASection
        title="Uzmanlarımızla Tanışmaya Hazır mısınız?"
        description="Ruh sağlığınız için profesyonel destek almak istiyorsanız, uzman ekibimiz size yardımcı olmak için hazır."
      />
    </main>
  );
}
