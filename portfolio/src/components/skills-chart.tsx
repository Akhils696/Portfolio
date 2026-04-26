"use client";

import { motion } from "framer-motion";
import type { SkillMetric } from "@/data/portfolio-data";

type SkillChartProps = {
  items: SkillMetric[];
};

export function SkillsChart({ items }: SkillChartProps) {
  const sortedItems = [...items].sort((left, right) => right.value - left.value);

  return (
    <div className="glass-panel rounded-[1.5rem] p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="eyebrow text-xs text-sky-300/80">Skills Matrix</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Core strengths</h3>
        </div>
        <span className="rounded-full border border-emerald-300/20 bg-emerald-400/8 px-3 py-1 font-mono text-xs text-emerald-100">
          recruiter view
        </span>
      </div>
      <div className="space-y-4">
        {sortedItems.map((item, index) => (
          <div
            key={item.label}
            className={`rounded-2xl border p-4 transition-colors ${
              item.spotlight
                ? "border-sky-300/25 bg-sky-400/6 shadow-[0_0_24px_rgba(125,211,252,0.12)]"
                : "border-white/8 bg-white/[0.03]"
            }`}
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--color-text)]">{item.label}</span>
                  {item.spotlight ? (
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.24em] text-cyan-200">
                      Focus
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 max-w-[34ch] text-sm leading-6 text-[var(--color-text-soft)]">
                  {item.detail}
                </p>
              </div>
              <div className="text-right">
                <p className="font-mono text-sky-200">{item.tier}</p>
                <p className="mt-1 text-xs text-slate-400">{item.value}/100 confidence</p>
              </div>
            </div>
            <div className="h-3 rounded-full bg-slate-900/80">
              <motion.div
                className="h-3 rounded-full bg-[linear-gradient(90deg,#7dd3fc_0%,#34d399_58%,#f5c451_100%)] shadow-[0_0_18px_rgba(125,211,252,0.26)]"
                initial={{ width: 0 }}
                whileInView={{ width: `${item.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
