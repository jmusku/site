import Link from "next/link";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted sm:flex-row lg:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
        <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-paper">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-paper">
            Email
          </a>
          <Link href="/portfolio" className="hover:text-paper">
            Portfolio
          </Link>
        </div>
      </div>
    </footer>
  );
}
