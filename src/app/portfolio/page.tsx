import type { Metadata } from "next";
import Link from "next/link";
import { BackgroundField } from "@/components/BackgroundField";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/lib/data";
import { ArrowLeft, Hammer, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: `Portfolio — ${profile.name}`,
  description: "Case studies and project work — coming soon.",
};

const upcoming = [
  {
    title: "Medcare — Healthcare Interoperability at Webstercare",
    tag: "Architecture",
    blurb:
      "Event-driven microservices on Azure, integrated with My Health Record, Services Australia and FRED eRx Prescribing.",
  },
  {
    title: "AIMS — Greenfield Asset Integrity Platform",
    tag: "Cloud & Delivery",
    blurb: "Scalable AWS architecture at Hitachi Vantara, delivered ahead of schedule and defect-free.",
  },
  {
    title: "AI-Assisted Engineering, Done Responsibly",
    tag: "Essay",
    blurb: "Notes on context engineering, token optimisation, and where AI tooling earns its place in a secure SDLC.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <BackgroundField />
      <Nav />
      <main className="relative pt-40 pb-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-paper"
            >
              <ArrowLeft size={14} />
              Back home
            </Link>

            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-line-strong bg-panel/60 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-lime">
              <Hammer size={13} />
              Under construction
            </span>

            <h1 className="font-display text-balance max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
              The portfolio is being built — fittingly, one case study at a time.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              I&apos;m putting together detailed write-ups of the systems I&apos;ve architected and led —
              the problem, the trade-offs, and how it held up in production. Here&apos;s what&apos;s in the
              queue.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((item, i) => (
              <Reveal key={item.title} delay={0.05 + i * 0.05}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-line-strong bg-panel/30 p-6">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-violet-soft">
                      {item.tag}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-semibold text-paper">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.blurb}</p>
                  </div>
                  <span className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted">
                    Coming soon
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25} className="mt-16 rounded-2xl border border-line bg-panel/50 p-8">
            <p className="font-display text-xl font-medium text-paper">
              Want to see specific work before it&apos;s published?
            </p>
            <p className="mt-2 max-w-xl text-muted">
              Reach out and I&apos;m happy to walk through architecture diagrams, code samples or
              delivery outcomes directly.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5"
            >
              <Mail size={15} />
              {profile.email}
            </a>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
