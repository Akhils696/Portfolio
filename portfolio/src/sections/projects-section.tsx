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
            title="Selected builds across AI, machine learning, and distributed systems."
            description="A project showcase designed like a technical mission board, with interactive filtering and hover motion to highlight the strongest work first."
          />
        </Reveal>
        <div className="mt-12">
          <ProjectFilter projects={projects} />
        </div>
      </div>
    </section>
  );
}
