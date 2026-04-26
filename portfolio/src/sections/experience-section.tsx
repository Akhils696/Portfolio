import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experienceItems, researchItems } from "@/data/portfolio-data";
import type { TimelineItem } from "@/data/portfolio-data";

type TimelineColumnProps = {
  eyebrow: string;
  items: TimelineItem[];
};

function TimelineColumn({ eyebrow, items }: TimelineColumnProps) {
  return (
    <div className="glass-panel rounded-[1.5rem] p-6 md:p-8">
      <p className="eyebrow text-xs text-sky-300/80">{eyebrow}</p>
      <div className="mt-6 space-y-5">
        {items.map((item) => (
          <article key={item.title} className="rounded-2xl border border-white/8 bg-slate-950/28 p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-sky-100">{item.organization}</p>
              </div>
              <span className="rounded-full border border-emerald-300/20 bg-emerald-400/8 px-3 py-1 font-mono text-xs text-emerald-100">
                {item.period}
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text-soft)]">{item.summary}</p>
            <div className="mt-5 space-y-2">
              {item.highlights.map((highlight) => (
                <p key={highlight} className="text-sm text-slate-300">
                  <span className="mr-2 text-emerald-300">+</span>
                  {highlight}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Experience & Research"
            title="Internship experience backed by applied research presentation work."
            description="A compact timeline from the resume, highlighting professional Python development exposure and research presented at ICSRF 2025."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.08}>
            <TimelineColumn eyebrow="Experience" items={experienceItems} />
          </Reveal>
          <Reveal delay={0.14}>
            <TimelineColumn eyebrow="Research & Publications" items={researchItems} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
