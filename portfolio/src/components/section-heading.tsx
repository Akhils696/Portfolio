type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow mb-4 text-xs text-cyan-300/80">{eyebrow}</p>
      <h2 className="section-title text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-[var(--color-text-soft)] md:text-lg">
        {description}
      </p>
    </div>
  );
}
