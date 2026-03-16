import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { HeroSection } from "@/sections/hero-section";
import { ProfilesSection } from "@/sections/profiles-section";
import { ProjectsSection } from "@/sections/projects-section";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ProfilesSection />
      <ContactSection />
    </main>
  );
}
