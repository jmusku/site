import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { timeline } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export function Journey() {
  return (
    <section id="journey" className="relative border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          kicker="Career Journey"
          title="From clinical trial systems to national healthcare integrations."
          description="Eight roles, five countries, one throughline: ship secure systems that hold up under real production load."
        />

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-lime via-line-strong to-transparent sm:left-[9px]"
          />

          <div className="space-y-14">
            {timeline.map((entry, i) => (
              <Reveal key={entry.company + entry.period} delay={Math.min(i * 0.04, 0.2)}>
                <div className="relative pl-8 sm:pl-10">
                  <span
                    className={`absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 sm:h-5 sm:w-5 ${
                      entry.current
                        ? "border-lime bg-ink"
                        : "border-line-strong bg-panel"
                    }`}
                  >
                    {entry.current && <span className="h-1.5 w-1.5 rounded-full bg-lime" />}
                  </span>

                  <div className="rounded-2xl border border-line bg-panel/50 p-6 transition-colors hover:border-line-strong sm:p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-display text-xl font-semibold text-paper sm:text-2xl">
                        {entry.role}
                      </h3>
                      <span className="font-mono text-xs uppercase tracking-widest text-lime">
                        {entry.period}
                      </span>
                    </div>

                    <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
                      {entry.companyUrl ? (
                        <a
                          href={entry.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center gap-1 font-medium text-paper hover:text-lime"
                        >
                          {entry.company}
                          <ArrowUpRight
                            size={12}
                            className="opacity-0 transition-opacity group-hover:opacity-100"
                          />
                        </a>
                      ) : (
                        <span className="font-medium text-paper">{entry.company}</span>
                      )}
                      <span aria-hidden>·</span>
                      <span>{entry.location}</span>
                      <span aria-hidden>·</span>
                      <span className="italic">{entry.project}</span>
                    </div>

                    <ul className="mt-5 space-y-2.5">
                      {entry.highlights.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-soft" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-5">
                      {entry.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-line-strong px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
