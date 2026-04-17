import { ParticleNetwork } from "@/components/particle-network";
import { Reveal } from "@/components/reveal";
import { TerminalCard } from "@/components/terminal-card";
import { heroContent, quickStats } from "@/data/portfolio-data";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen">
      <ParticleNetwork />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,5,13,0.25),rgba(4,5,13,0.9))]" />
      <div className="section-shell relative z-10 flex min-h-screen flex-col justify-center py-24">
        <div className="mb-10 flex items-center justify-between gap-4 rounded-full border border-white/8 bg-white/5 px-5 py-3 text-sm backdrop-blur md:px-7">
          <span className="eyebrow text-cyan-200">Akhil Senthil // Portfolio</span>
          <nav className="hidden gap-6 text-[var(--color-text-soft)] md:flex">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#profiles" className="hover:text-white">
              Profiles
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </div>
        <div className="mb-8 flex flex-wrap gap-3 md:hidden">
          {["About", "Projects", "Profiles", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-[var(--color-text-soft)] hover:border-cyan-300/30 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <p className="eyebrow mb-6 text-xs text-cyan-300/80">Future-ready developer</p>
            </Reveal>
            <Reveal delay={0.04}>
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-emerald-300/20 bg-emerald-400/8 px-4 py-2 text-xs text-emerald-100 backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.9)]" />
                Available for internships and AI/ML roles
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="max-w-4xl font-[var(--font-heading)] text-5xl font-semibold uppercase tracking-[0.08em] text-white sm:text-6xl lg:text-7xl">
                {heroContent.name}
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-cyan-50/90 md:text-xl">
                {heroContent.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--color-text-soft)] md:text-lg">
                {heroContent.intro}
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-[linear-gradient(90deg,#5ee7ff_0%,#00ffa3_52%,#7c4dff_100%)] px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_22px_rgba(94,231,255,0.35)] hover:-translate-y-0.5"
                >
                  Explore Projects
                </a>
                <a
                  href={heroContent.resumeHref}
                  download
                  className="rounded-full border border-cyan-300/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:border-cyan-300/40 hover:bg-cyan-400/10"
                >
                  Download Resume
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {quickStats.map((stat) => (
                  <div key={stat.label} className="glass-panel rounded-2xl p-4">
                    <p className="text-sm text-[var(--color-text-soft)]">{stat.label}</p>
                    <p className="mt-2 text-sm font-semibold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.18}>
            <TerminalCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
