"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Project, ProjectCategory } from "@/data/portfolio-data";

const filters: Array<ProjectCategory | "All"> = ["All", "AI", "ML", "Systems"];

type ProjectFilterProps = {
  projects: Project[];
};

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">("All");

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={clsx(
              "rounded-full border px-4 py-2 text-sm font-medium",
              activeFilter === filter
                ? "border-cyan-300 bg-cyan-400/10 text-cyan-100 shadow-[0_0_18px_rgba(94,231,255,0.2)]"
                : "border-white/10 bg-white/5 text-[var(--color-text-soft)] hover:border-cyan-300/40 hover:text-white",
            )}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <motion.article
            key={project.title}
            layout
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -6 }}
            className="glass-panel group rounded-3xl p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="rounded-full border border-cyan-400/20 px-3 py-1 font-mono text-xs text-cyan-200">
                {project.category}
              </span>
              <span className="font-mono text-xs text-[var(--color-text-soft)]">0{index + 1}</span>
            </div>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text-soft)]">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 space-y-2">
              {project.features.map((feature) => (
                <p key={feature} className="text-sm text-slate-300">
                  <span className="mr-2 text-cyan-300">+</span>
                  {feature}
                </p>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
