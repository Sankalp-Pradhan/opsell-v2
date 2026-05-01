"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

/* ─── Loop Hook ─── */
const useLoop = (duration: number, active: boolean) => {
  const [cycle, setCycle] = useState(0);
  useEffect(() => {
    if (!active) return;
    const i = setInterval(() => setCycle((c) => c + 1), duration);
    return () => clearInterval(i);
  }, [active, duration]);
  return cycle;
};

/* ─── Step 1: Connect Store ─── */
const StepConnect = ({ inView }: { inView: boolean }) => {
  const cycle = useLoop(6000, inView);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (!inView) return;
    setConnected(false);
    const t = setTimeout(() => setConnected(true), 1200);
    return () => clearTimeout(t);
  }, [cycle, inView]);

  const sources = ["Shopify", "WooCommerce", "CSV"];

  return (
    <div className="bg-card border border-border rounded-xl p-6 min-h-[300px] flex flex-col gap-5 shadow-elevated">
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse-ai" />
        <p className="font-display text-[12px] font-bold text-foreground uppercase tracking-[0.1em]">
          Connect store
        </p>
      </div>

      {/* Source rows */}
      <div className="flex flex-col gap-2">
        {sources.map((s, i) => (
          <motion.div
            key={s + cycle}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12 }}
            className={[
              "flex items-center justify-between px-4 py-3 rounded-lg border font-sans text-sm font-medium transition-all duration-500",
              connected && i === 0
                ? "border-[var(--color-success)] status-success"
                : "border-border bg-muted text-[var(--color-neutral-600)]",
            ].join(" ")}
          >
            {s}
            {connected && i === 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Check size={14} />
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Status line */}
      <AnimatePresence>
        {connected && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-auto flex items-center gap-1.5 text-[12px] font-sans ai-confidence-high"
          >
            <Check size={12} />
            Catalog synced — 248 SKUs imported
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Step 2: AI Analysis ─── */
const StepAnalyze = ({ inView }: { inView: boolean }) => {
  const cycle = useLoop(7000, inView);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;
    setProgress(0);
    const i = setInterval(
      () => setProgress((p) => (p >= 100 ? 100 : p + 2)),
      50
    );
    return () => clearInterval(i);
  }, [cycle, inView]);

  const signals = [
    { label: "Competitor pricing", done: progress > 30 },
    { label: "Demand & seasonality", done: progress > 55 },
    { label: "Inventory pressure", done: progress > 75 },
    { label: "SKU health tagging", done: progress >= 100 },
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6 min-h-[300px] flex flex-col gap-5 shadow-elevated">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Sparkles size={13} className="text-primary" />
        <p className="font-display text-[12px] font-bold text-foreground uppercase tracking-[0.1em]">
          AI Analysis
        </p>
        <span className="ml-auto font-mono text-[12px] text-primary font-medium">
          {progress}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-[var(--color-neutral-150)] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut", duration: 0.15 }}
        />
      </div>

      {/* Signal checklist */}
      <div className="flex flex-col gap-3">
        {signals.map((sig) => (
          <div key={sig.label} className="flex items-center gap-2.5">
            <div
              className={[
                "w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300",
                sig.done
                  ? "bg-primary border-primary"
                  : "border-[var(--color-neutral-300)] bg-card",
              ].join(" ")}
            >
              {sig.done && <Check size={9} className="text-white" />}
            </div>
            <span
              className={[
                "font-sans text-[13px] transition-colors duration-300",
                sig.done
                  ? "text-foreground"
                  : "text-[var(--color-neutral-400)]",
              ].join(" ")}
            >
              {sig.label}
            </span>
          </div>
        ))}
      </div>

      {/* AI thinking dots */}
      {progress < 100 && (
        <div className="mt-auto flex gap-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-ai"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/* ─── Step 3: Smart Suggestions ─── */
const StepRecommend = ({ inView }: { inView: boolean }) => {
  const cycle = useLoop(7000, inView);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!inView) return;
    setShow(false);
    const t = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(t);
  }, [cycle, inView]);

  return (
    <div className="bg-card border border-border rounded-xl p-6 min-h-[300px] flex flex-col gap-4 shadow-elevated">
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-primary" />
        <p className="font-display text-[12px] font-bold text-foreground uppercase tracking-[0.1em]">
          Smart suggestion
        </p>
      </div>

      {/* SKU pill */}
      <div className="flex items-center gap-2">
        <span className="font-mono text-[11px] text-[var(--color-neutral-400)] bg-[var(--color-neutral-100)] px-2 py-0.5 rounded-md">
          SKU-4821
        </span>
        <span className="font-sans text-[12px] text-[var(--color-neutral-500)]">
          Wireless Earbuds Pro
        </span>
      </div>

      {/* AI surface card */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="ai-surface p-4 flex flex-col gap-3"
          >
            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-[28px] font-extrabold text-primary tracking-tight">
                ₹849
              </span>
              <span className="font-sans text-[13px] text-[var(--color-neutral-400)] line-through">
                ₹999
              </span>
            </div>

            {/* Confidence bar */}
            <div>
              <div className="flex justify-between mb-1.5">
                <span className="text-caption text-[var(--color-neutral-500)]">
                  Confidence
                </span>
                <span className="font-mono text-[11px] ai-confidence-high">
                  87%
                </span>
              </div>
              <div className="h-1 bg-[var(--color-ai-border)] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[var(--color-ai-confidence-high)] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "87%" }}
                  transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Impact badge */}
            <span className="status-success self-start inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-semibold font-display">
              +18% predicted sales
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Why panel */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-auto border border-border rounded-lg p-3 bg-muted"
          >
            <p className="font-sans text-[12px] text-[var(--color-neutral-500)] leading-relaxed">
              <span className="text-primary font-medium">Why?</span> Competitors
              at ₹899 avg. Your inventory is 40% above safety stock — discount
              now to clear before Q4.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Step 4: Growth Dashboard ─── */
const StepGrowth = ({ inView }: { inView: boolean }) => {
  const cycle = useLoop(7000, inView);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!inView) return;
    setShow(false);
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, [cycle, inView]);

  const metrics = [
    { label: "Revenue", value: "+32%", cls: "ai-confidence-high" },
    { label: "Conversion", value: "+18%", cls: "text-primary" },
    { label: "Profit margin", value: "+9%", cls: "ai-confidence-mid" },
  ];

  const bars = [30, 45, 38, 55, 50, 65, 72, 68, 80, 92, 88, 100];

  return (
    <div className="bg-card border border-border rounded-xl p-6 min-h-[300px] flex flex-col gap-4 shadow-elevated">
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
        <p className="font-display text-[12px] font-bold text-foreground uppercase tracking-[0.1em]">
          Growth dashboard
        </p>
        <span className="ml-auto font-sans text-[11px] text-[var(--color-neutral-400)]">
          Live
        </span>
      </div>

      {/* Metric chips */}
      <div className="flex gap-2 flex-wrap">
        {metrics.map((m, i) => (
          <AnimatePresence key={m.label}>
            {show && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col gap-0.5 px-3 py-2 rounded-lg border border-border bg-muted"
              >
                <span className={`font-mono text-[16px] font-bold ${m.cls}`}>
                  {m.value}
                </span>
                <span className="font-sans text-[11px] text-[var(--color-neutral-400)]">
                  {m.label}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>

      {/* Sparkline */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-auto flex items-end gap-1 h-14"
          >
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-primary"
                initial={{ height: 0, opacity: 0.5 }}
                animate={{ height: `${h}%`, opacity: 0.5 + (h / 100) * 0.5 }}
                transition={{
                  delay: 0.5 + i * 0.04,
                  duration: 0.4,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Router ─── */
export const StepMockup = ({
  step,
  inView,
}: {
  step: number;
  inView: boolean;
}) => {
  const steps = [
    <StepConnect key="connect" inView={inView} />,
    <StepAnalyze key="analyze" inView={inView} />,
    <StepRecommend key="recommend" inView={inView} />,
    <StepGrowth key="growth" inView={inView} />,
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.35 }}
      >
        {steps[step]}
      </motion.div>
    </AnimatePresence>
  );
};