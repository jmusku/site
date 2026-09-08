import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lime">
        <span className="h-px w-8 bg-lime" />
        {kicker}
      </span>
      <h2 className="font-display text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>}
    </Reveal>
  );
}
