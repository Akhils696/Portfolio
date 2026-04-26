"use client";

import { motion } from "framer-motion";

export function TerminalCard() {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="glass-panel rounded-3xl p-5"
      style={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-rose-400" />
        <span className="h-3 w-3 rounded-full bg-amber-300" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
      </div>
      <div className="space-y-3 font-mono text-sm text-slate-200">
        <p>
          <span className="text-cyan-300">{">"}</span> whoami
        </p>
        <p className="text-white">Akhil Senthil - AI/ML Researcher & Full-Stack Developer</p>
        <p>
          <span className="text-cyan-300">{">"}</span> focus --current
        </p>
        <p className="text-[var(--color-text-soft)]">
          Building computer vision, RAG, backend API, and developer-first product systems.
        </p>
        <p>
          <span className="text-cyan-300">{">"}</span> status
        </p>
        <p className="text-emerald-300">Open to AI/ML Engineer and SDE opportunities</p>
      </div>
    </motion.div>
  );
}
