import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, Construction } from "lucide-react";

const placeholders = [
  {
    title: "Healthcare interoperability platform",
    note: "Case study in progress",
  },
  {
    title: "Event-driven microservices at scale",
    note: "Case study in progress",
  },
  {
    title: "AI-assisted engineering workflow",
    note: "Case study in progress",
  },
];

export function PortfolioTeaser() {
  return (
    <section id="portfolio" className="relative border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          kicker="Selected Work"
          title="A portfolio of case studies is on its way."
          description="I'm curating detailed write-ups of the systems above — architecture decisions, trade-offs, and outcomes. Check back soon."
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {placeholders.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-dashed border-line-strong bg-panel/30 p-6">
                <Construction size={18} className="text-muted" />
                <div className="mt-8">
                  <p className="font-display text-lg font-medium text-paper/80">{item.title}</p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">
                    {item.note}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-paper transition-colors hover:border-lime hover:text-lime"
          >
            Visit the portfolio page
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
