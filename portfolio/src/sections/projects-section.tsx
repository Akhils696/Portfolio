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
        <div className="mt-12">
          <ProjectFilter projects={projects} />
        </div>
      </div>
    </section>
  );
}
