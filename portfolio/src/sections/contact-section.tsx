import { ContactForm } from "@/components/contact-form";
import { CopyEmailButton } from "@/components/copy-email-button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { codingProfiles, contactInfo } from "@/data/portfolio-data";
import { buildEmailHref } from "@/lib/email-links";

export function ContactSection() {
  const quickEmailLinks = [
    { label: "Default app", href: buildEmailHref({ to: contactInfo.email, client: "default" }) },
    { label: "Gmail", href: buildEmailHref({ to: contactInfo.email, client: "gmail" }) },
    { label: "Outlook", href: buildEmailHref({ to: contactInfo.email, client: "outlook" }) },
  ];

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
        <div className="mt-12 grid gap-6 xl:grid-cols-[0.88fr_1.12fr] xl:items-start">
          <Reveal delay={0.08} className="glass-panel rounded-[1.5rem] p-6 md:p-8">
            <p className="eyebrow text-xs text-sky-300/80">Primary contact</p>
            <p className="mt-4 break-all text-2xl font-semibold text-white sm:break-normal">
              {contactInfo.email}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {quickEmailLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Default app" ? undefined : "_blank"}
                  rel={link.label === "Default app" ? undefined : "noreferrer"}
                  className="chip-link border border-white/10 bg-slate-950/35 px-4 py-2 text-sm text-white hover:border-sky-300/40 hover:bg-sky-400/10"
                >
                  {link.label}
                </a>
              ))}
              <CopyEmailButton email={contactInfo.email} />
            </div>
            <div className="mt-10">
              <p className="eyebrow text-xs text-sky-300/80">Social links</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {codingProfiles.map((profile) => {
                  const Icon = profile.icon;

                  return (
                    <a
                      key={profile.label}
                      href={profile.href}
                      target="_blank"
                      rel="noreferrer"
                      className="chip-link justify-start gap-2 border border-white/10 bg-slate-950/35 px-4 py-2 text-sm text-white hover:border-sky-300/40 hover:bg-sky-400/10"
                    >
                      <Icon className="text-sky-300" />
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
