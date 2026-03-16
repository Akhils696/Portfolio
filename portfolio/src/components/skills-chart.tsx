"use client";

import { motion } from "framer-motion";

type SkillChartProps = {
  items: Array<{ label: string; value: number }>;
};

export function SkillsChart({ items }: SkillChartProps) {
  return (
    <div className="glass-panel rounded-3xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="eyebrow text-xs text-cyan-300/80">Skills Matrix</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Animated capabilities chart</h3>
        </div>
        <span className="rounded-full border border-cyan-400/20 px-3 py-1 font-mono text-xs text-cyan-200">
          live metrics
        </span>
      </div>
      <div className="space-y-5">
        {items.map((item, index) => (
          <div key={item.label}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-[var(--color-text)]">{item.label}</span>
              <span className="font-mono text-cyan-200">{item.value}%</span>
            </div>
            <div className="h-3 rounded-full bg-slate-900/80">
              <motion.div
                className="h-3 rounded-full bg-[linear-gradient(90deg,#5ee7ff_0%,#00ffa3_55%,#7c4dff_100%)] shadow-[0_0_18px_rgba(94,231,255,0.35)]"
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
