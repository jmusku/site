import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { certifications, skillGroups } from "@/lib/data";
import { Award, BadgeCheck } from "lucide-react";

export function Expertise() {
  return (
    <section id="expertise" className="relative border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          kicker="Expertise"
          title="A full-stack architect's toolkit, sharpened by production incidents."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-line bg-panel/50 p-6 transition-colors hover:border-lime/50">
                <h3 className="font-display text-base font-semibold text-paper">{group.title}</h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-6 border-t border-line pt-16 sm:grid-cols-2">
          <Reveal delay={0.05} className="sm:col-span-2">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lime">
              <Award size={14} />
              Certifications
            </div>
          </Reveal>
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={0.1 + i * 0.05}>
              <div className="flex h-full gap-4 rounded-2xl border border-line bg-panel/50 p-6">
                <BadgeCheck size={22} className="mt-0.5 shrink-0 text-violet-soft" />
                <div>
                  <p className="font-display text-base font-semibold text-paper">{cert.title}</p>
                  <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{cert.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
