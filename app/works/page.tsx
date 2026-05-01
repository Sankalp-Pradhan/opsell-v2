"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Plug, Brain, Tag, TrendingUp } from "lucide-react";
import { StepMockup } from "./stepMockup";

const STEPS = [
  {
    n: "01",
    eyebrow: "Connect in minutes",
    title: "Connect your store",
    body: "Link Shopify, WooCommerce, or upload your product data as CSV. Opsell syncs your catalog in seconds — no code, no engineers.",
    icon: Plug,
    bullets: [
      "1-click Shopify & WooCommerce",
      "CSV import for anything else",
      "Live product sync",
    ],
  },
  {
    n: "02",
    eyebrow: "Let AI do the analysis",
    title: "Opsell analyzes your products",
    body: "Our AI studies competitor pricing, market demand, inventory pressure, and seasonality — then tags every SKU with what it really needs.",
    icon: Brain,
    bullets: [
      "Competitor price tracking",
      "Demand & seasonality signals",
      "Auto SKU health tags",
    ],
  },
  {
    n: "03",
    eyebrow: "Pricing that converts",
    title: "Get smart suggestions",
    body: "Receive recommended prices, discount windows, and bundle ideas — each with predicted impact on conversion and revenue.",
    icon: Tag,
    bullets: [
      "Optimal price per SKU",
      "Smart discount timing",
      "Bundle & upsell ideas",
    ],
  },
  {
    n: "04",
    eyebrow: "Scale without guesswork",
    title: "Track the growth",
    body: "Watch revenue, profit, and conversions improve in a live dashboard. Opsell keeps learning and surfaces new opportunities every week.",
    icon: TrendingUp,
    bullets: [
      "Live revenue dashboard",
      "Weekly opportunity alerts",
      "Profit & conversion lift",
    ],
  },
];

/* ── CountUp ── */
const CountUp = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
};

/* ── Step Row ── */
const StepRow = ({
  step,
  index,
}: {
  step: (typeof STEPS)[number];
  index: number;
}) => {
  const Icon = step.icon;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-10%" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={[
        "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16",
        index < STEPS.length - 1 ? "border-b border-border" : "",
      ].join(" ")}
    >
      {/* TEXT BLOCK */}
      <div
        className={[
          "flex flex-col gap-6",
          !isEven ? "lg:order-2" : "",
        ].join(" ")}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-[11px] font-medium text-primary bg-[var(--color-ai-surface)] px-2 py-0.5 rounded-md">
            {step.n}
          </span>
          <Icon size={13} className="text-[var(--color-neutral-400)]" />
          <span className="text-caption text-[var(--color-neutral-400)]">
            {step.eyebrow}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-h1 font-display text-[28px] lg:text-[32px] font-bold text-foreground leading-[1.2] tracking-[-0.01em]">
          {step.title}
        </h3>

        {/* Divider */}
        <div className="w-12 h-1 bg-primary rounded-full" />

        {/* Body */}
        <p className="font-sans text-[15px] text-[var(--color-neutral-600)] leading-[1.65]">
          {step.body}
        </p>

        {/* Bullets */}
        <ul className="flex flex-col gap-2.5">
          {step.bullets.map((b) => (
            <li
              key={b}
              className="flex items-center gap-3 font-sans text-[14px] text-[var(--color-neutral-700)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {b}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="self-start mt-2 flex items-center gap-2 font-display text-[13px] font-bold text-primary hover:gap-3 transition-all duration-200 focus-ring group">
          Try this step
          <ArrowRight
            size={14}
            className="group-hover:translate-x-0.5 transition-transform duration-200"
          />
        </button>
      </div>

      {/* MOCKUP BLOCK */}
      <div
        className={[
          "relative",
          !isEven ? "lg:order-1" : "",
        ].join(" ")}
      >
        {/* Glow backdrop */}
        <div className="absolute -inset-4 bg-[var(--color-ai-surface)] rounded-3xl opacity-60 blur-2xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <StepMockup step={index} inView={inView} />
        </motion.div>
      </div>
    </motion.div>
  );
};

/* ── PAGE ── */
export default function HowItWorksPage() {
  return (
    <section className="bg-background py-20 px-6 lg:px-20">
      {/* Section header */}
      <div className="mb-16 flex flex-col gap-4 max-w-2xl">
        <span className="inline-flex items-center gap-2 text-caption text-primary bg-[var(--color-ai-surface)] px-3 py-1.5 rounded-lg self-start border border-[var(--color-ai-border)]">
          How it works
        </span>
        <h2 className="font-display text-[40px] lg:text-[48px] font-bold text-foreground leading-[1.1] tracking-[-0.02em]">
          From chaos to clarity
          <br />
          <span className="text-primary">in four steps.</span>
        </h2>
        <p className="font-sans text-[15px] text-[var(--color-neutral-500)] leading-relaxed">
          No complicated setup. No data science degree required. Just connect,
          analyze, act, and grow.
        </p>
      </div>

      {/* Steps */}
      <div>
        {STEPS.map((s, i) => (
          <StepRow key={s.n} step={s} index={i} />
        ))}
      </div>

      {/* Social proof strip */}
      <div className="mt-20 flex flex-col items-center gap-3 text-center">
        <div className="font-display text-[48px] lg:text-[64px] font-extrabold text-foreground tracking-[-0.03em] leading-none">
          +<CountUp to={32} suffix="%" />
        </div>
        <p className="font-sans text-[15px] text-[var(--color-neutral-400)]">
          average sales lift across Opsell stores in the first 90 days
        </p>
        <button className="mt-4 inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-display text-[14px] font-bold px-6 py-3 rounded-xl transition-colors duration-200 focus-ring">
          Start free — no credit card
          <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
}                    





  