import { Reveal } from "@/components/Reveal";
import { profile } from "@/lib/data";
import { ArrowUpRight, Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lime">
            <span className="h-px w-8 bg-lime" />
            Get in touch
          </span>
          <h2 className="font-display text-balance max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Building something that needs a steady hand on architecture and delivery?
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted">
            I&apos;m always open to a conversation about senior engineering, technical leadership or
            architecture work.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5"
            >
              <Mail size={15} />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-paper transition-colors hover:border-lime hover:text-lime"
            >
              <LinkedinIcon size={15} />
              Connect on LinkedIn
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
