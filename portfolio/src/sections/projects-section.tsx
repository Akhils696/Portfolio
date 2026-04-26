import { ProjectFilter } from "@/components/project-filter";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/portfolio-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Selected builds across applied AI, machine learning, and full-stack systems."
            description="A project showcase grounded in resume evidence, from RAG learning tools and emergency triage to computer vision research and cybersecurity automation."
          />
        </Reveal>
        <Reveal delay={0.06}>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["RAG + LLM Apps", "Computer Vision", "Production APIs"].map((signal) => (
              <div
                key={signal}
                className="rounded-2xl border border-white/8 bg-slate-950/35 px-4 py-3 font-mono text-xs uppercase tracking-[0.16em] text-sky-100"
              >
                {signal}
              </div>
            ))}
          </div>
        </Reveal>
        <div className="mt-10">
          <ProjectFilter projects={projects} />
        </div>
      </div>
    </section>
  );
}
