type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-10 bg-[linear-gradient(90deg,var(--color-primary),transparent)]" />
        <p className="eyebrow text-xs text-sky-300/80">{eyebrow}</p>
      </div>
      <h2 className="section-title text-3xl font-semibold leading-tight text-white md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[var(--color-text-soft)] md:text-lg">
        {description}
      </p>
    </div>
  );
}
