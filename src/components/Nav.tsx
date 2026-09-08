"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#journey", label: "Journey" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-ink/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line-strong bg-panel text-sm text-lime transition-colors group-hover:border-lime/60">
            JM
          </span>
          <span className="hidden sm:inline">Jeevan Musku</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={profile.resumeUrl}
            download
            className="group inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-lime hover:text-lime"
          >
            Résumé
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-line-strong text-paper md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 font-mono text-sm uppercase tracking-widest text-muted hover:bg-panel hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={profile.resumeUrl}
              download
              className="mt-2 rounded-md border border-line-strong px-2 py-3 text-center font-mono text-sm uppercase tracking-widest text-lime"
            >
              Download Résumé
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
