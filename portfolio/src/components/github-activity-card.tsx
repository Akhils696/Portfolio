export function GitHubActivityCard() {
  return (
    <div className="glass-panel rounded-[1.5rem] p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="eyebrow text-xs text-sky-300/80">GitHub Signal</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Activity graph</h3>
        </div>
        <a
          href="https://github.com/Akhils696"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-sky-300/20 bg-slate-950/35 px-4 py-2 text-sm text-sky-100 hover:bg-sky-400/10"
        >
          Open GitHub
        </a>
      </div>
      <div className="overflow-hidden rounded-2xl border border-white/8 bg-[#050816] p-3 shadow-inner">
        {/* Static export on Vercel works more reliably when this external chart is rendered directly. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://ghchart.rshah.org/40c463/Akhils696"
          alt="GitHub contribution activity graph for Akhils696"
          width={1200}
          height={260}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="h-auto w-full rounded-xl"
        />
      </div>
    </div>
  );
}
