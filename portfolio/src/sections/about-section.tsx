import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SkillsChart } from "@/components/skills-chart";
import { focusBadges, interestAreas, skillChart, skillGroups } from "@/data/portfolio-data";

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Building at the intersection of machine intelligence and software systems."
            description="Akhil is a 2nd Year Computer Science and Engineering student focused on creating practical AI/ML workflows, dependable backend systems, and clean developer experiences."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <Reveal delay={0.06} className="glass-panel rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <p className="eyebrow text-xs text-cyan-300/80">Status</p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  2nd Year Computer Science and Engineering Student
                </p>
                <div className="mt-8">
                  <p className="eyebrow text-xs text-cyan-300/80">Interests</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {interestAreas.map((interest) => (
                      <span
                        key={interest}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {skillGroups.map((group) => {
                  const Icon = group.icon;

                  return (
                    <div key={group.title} className="rounded-3xl border border-white/8 bg-white/5 p-5">
                      <div className="flex items-center gap-3">
                        <Icon className="text-lg text-cyan-300" />
                        <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-slate-950/60 px-3 py-1 text-xs text-slate-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {focusBadges.map((badge) => {
                const Icon = badge.icon;

                return (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 rounded-full border border-cyan-300/16 px-4 py-2 text-sm text-cyan-50"
                  >
                    <Icon className="text-cyan-300" />
                    {badge.label}
                  </div>
                );
              })}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <SkillsChart items={skillChart} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
