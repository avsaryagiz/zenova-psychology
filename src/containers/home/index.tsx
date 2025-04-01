import {
  HomeCTASection,
  HomeFAQSection,
  HomeHeroSection,
  HomeServicesSection,
  HomeTeamSection,
  HomeTestimonialsSection,
} from "./sections";

export default function HomeContainer() {
  return (
    <main>
      <HomeHeroSection />
      <HomeServicesSection />
      <HomeCTASection />
      <HomeTestimonialsSection />
      <HomeTeamSection />
      <HomeFAQSection />
    </main>
  );
}
