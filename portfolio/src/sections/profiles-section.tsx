import { GitHubActivityCard } from "@/components/github-activity-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { codingProfiles } from "@/data/portfolio-data";

export function ProfilesSection() {
  return (
    <section id="profiles" className="py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Coding Profiles"
            title="Public signals across development, problem solving, and community presence."
            description="Links are grouped in a clean control-panel layout so recruiters can move directly from the portfolio into Akhil's coding profiles and activity trail."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              {codingProfiles.map((profile, index) => {
                const Icon = profile.icon;

                return (
                  <a
                    key={profile.label}
                    href={profile.href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-panel rounded-[1.5rem] p-5 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <Icon className="text-2xl text-sky-300" />
                      <span className="font-mono text-xs text-[var(--color-text-muted)]">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-white">{profile.label}</h3>
                    <p className="mt-2 text-sm text-[var(--color-text-soft)]">{profile.handle}</p>
                  </a>
                );
              })}
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <GitHubActivityCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
