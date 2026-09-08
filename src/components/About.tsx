import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { education, industries, profile } from "@/lib/data";
import { GraduationCap, MapPin } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          kicker="About"
          title="Nearly two decades turning ambiguous problems into resilient systems."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3" delay={0.05}>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              <p>
                I&apos;m a Senior Software Engineer and Technical Lead who has spent my career at the
                intersection of architecture, engineering and delivery — designing Azure and AWS
                solutions that stay secure and scalable long after launch day.
              </p>
              <p>
                My path has taken me through global consultancies and enterprise product teams
                across healthcare, insurance, telecommunications, pharma and media — building
                everything from event-driven microservices to government-grade healthcare
                integrations. Along the way I&apos;ve led distributed teams, mentored engineers, and
                owned the technical decisions that make delivery predictable.
              </p>
              <p>
                Today that includes using AI deliberately: Claude Code and Copilot-style tools as an
                accelerant for context engineering and token-efficient delivery — never as a
                substitute for judgement, security or code quality.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={0.12}>
            <div className="rounded-2xl border border-line bg-panel/60 p-6">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-lime" />
                <div>
                  <p className="text-sm font-medium text-paper">Based in</p>
                  <p className="text-sm text-muted">{profile.location}</p>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3 border-t border-line pt-5">
                <GraduationCap size={18} className="mt-0.5 shrink-0 text-lime" />
                <div>
                  <p className="text-sm font-medium text-paper">{education.degree}</p>
                  <p className="text-sm text-muted">
                    {education.institution} · {education.year}
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-line pt-5">
                <p className="mb-3 text-sm font-medium text-paper">Industry expertise</p>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <span
                      key={industry}
                      className="rounded-full border border-line-strong px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
