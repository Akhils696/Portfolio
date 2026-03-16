import { AboutSection } from "@/sections/about-section";
import { HeroSection } from "@/sections/hero-section";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
