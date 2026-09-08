"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Bot } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { profile } from "@/lib/data";
import { useChatWidget } from "@/components/ChatWidgetContext";

export function Hero() {
  const { open } = useChatWidget();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-strong bg-panel/60 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-lime"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime" />
          </span>
          Available for senior / lead engineering engagements
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-5 max-w-2xl font-display text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-violet-soft via-paper to-lime sm:text-2xl"
        >
          {profile.role}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-6 flex flex-wrap gap-2"
        >
          {profile.subroles.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line-strong px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            type="button"
            onClick={open}
            className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5"
          >
            <Bot size={15} />
            Ask my Digital Twin
          </button>
          <a
            href="#journey"
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-paper transition-colors hover:border-lime hover:text-lime"
          >
            View my journey
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-paper transition-colors hover:border-lime hover:text-lime"
          >
            <LinkedinIcon size={15} />
            LinkedIn
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36 }}
          className="mt-20 grid grid-cols-2 gap-6 border-t border-line pt-10 sm:grid-cols-4"
        >
          {profile.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-3xl font-semibold text-paper sm:text-4xl">{stat.value}</dt>
              <dd className="mt-1 max-w-[16ch] text-sm text-muted">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} className="animate-pulse-slow" />
      </motion.a>
    </section>
  );
}
