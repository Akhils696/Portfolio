import { ParticleNetwork } from "@/components/particle-network";
import { Reveal } from "@/components/reveal";
import { TerminalCard } from "@/components/terminal-card";
import { heroContent, quickStats } from "@/data/portfolio-data";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen">
      <ParticleNetwork />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.18),rgba(3,7,18,0.82)_58%,rgba(2,6,23,0.98))]" />
      <div className="section-shell relative z-10 flex min-h-screen flex-col justify-center py-20 lg:py-24">
        <div className="mb-10 flex items-center justify-between gap-6 rounded-full border border-sky-300/15 bg-slate-950/45 px-5 py-3 text-sm shadow-[0_18px_50px_rgba(2,8,23,0.34)] backdrop-blur md:px-7">
          <span className="eyebrow shrink-0 text-sky-200">Akhil Senthil // AI Engineer</span>
          <nav className="hidden items-center gap-6 text-[var(--color-text-soft)] lg:flex xl:gap-7">
            <a href="#about" className="nav-link hover:text-white">
              About
            </a>
            <a href="#experience" className="nav-link hover:text-white">
              Experience
            </a>
            <a href="#projects" className="nav-link hover:text-white">
              Projects
            </a>
            <a href="#profiles" className="nav-link hover:text-white">
              Profiles
            </a>
            <a href="#contact" className="nav-link hover:text-white">
              Contact
            </a>
          </nav>
        </div>
        <div className="mb-8 flex flex-wrap gap-3 md:hidden">
          {["About", "Experience", "Projects", "Profiles", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="chip-link border border-white/10 bg-white/5 px-4 py-2 text-xs text-[var(--color-text-soft)] hover:border-cyan-300/30 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] lg:gap-12 xl:gap-16">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow mb-6 text-xs text-sky-300/80">Applied AI systems engineer</p>
            </Reveal>
            <Reveal delay={0.04}>
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-emerald-300/25 bg-emerald-400/10 px-4 py-2 text-xs text-emerald-100 shadow-[0_0_24px_rgba(52,211,153,0.14)] backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.9)]" />
                Available for AI/ML, full-stack, and SDE internships
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
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="button-primary min-w-[12.5rem] bg-[linear-gradient(90deg,#7dd3fc_0%,#34d399_48%,#f5c451_100%)] px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_26px_rgba(125,211,252,0.28)] hover:-translate-y-0.5"
                >
                  Explore Projects
                </a>
                <a
                  href={heroContent.resumeHref}
                  download
                  className="button-secondary min-w-[12.5rem] border border-sky-300/25 bg-slate-950/45 px-6 py-3 text-sm font-medium text-white hover:border-sky-300/45 hover:bg-sky-400/10"
                >
                  Download Resume
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {quickStats.map((stat) => (
                  <div key={stat.label} className="signal-panel h-full rounded-2xl p-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-sky-200/80">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.18} className="w-full">
            <TerminalCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
