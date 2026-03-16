import { ContactForm } from "@/components/contact-form";
import { CopyEmailButton } from "@/components/copy-email-button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { codingProfiles, contactInfo } from "@/data/portfolio-data";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 pb-28">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title={contactInfo.heading}
            description={contactInfo.description}
          />
        </Reveal>
        <div className="mt-12 grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
          <Reveal delay={0.08} className="glass-panel rounded-[2rem] p-6 md:p-8">
            <p className="eyebrow text-xs text-cyan-300/80">Primary contact</p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="mt-4 block text-2xl font-semibold text-white hover:text-cyan-200"
            >
              {contactInfo.email}
            </a>
            <div className="mt-5">
              <CopyEmailButton email={contactInfo.email} />
            </div>
            <div className="mt-10">
              <p className="eyebrow text-xs text-cyan-300/80">Social links</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {codingProfiles.map((profile) => {
                  const Icon = profile.icon;

                  return (
                    <a
                      key={profile.label}
                      href={profile.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:border-cyan-300/40 hover:bg-cyan-400/10"
                    >
                      <Icon className="text-cyan-300" />
                      {profile.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <ContactForm email={contactInfo.email} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
