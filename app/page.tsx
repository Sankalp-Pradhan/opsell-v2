"use client";

import { CtaSection } from "./home/cta";
import FAQ from "./home/faq-section";
import { Footer } from "./home/footer";
import { GrowthSection } from "./home/growth-section";
import { Hero } from "./home/hero";
import { IntegrateSection } from "./home/integrate-section";
import { Nav } from "./home/nav";
import ProblemSection from "./home/problem-section";
import RevenueLeakQuiz from "./home/quiz-section";
import { KEYFRAMES } from "./home/styles";

// ─── Page ─────────────────────────────────────────────────────────────────────



export default function OpsellHomePage() {
  return (
    <>
      <style>{KEYFRAMES}</style>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <div style={{ fontFamily: "var(--font-body)", color: "#0F1114", background: "#fff", overflowX: "hidden" }}>
        <Hero />
        <ProblemSection />
        <GrowthSection />
        <IntegrateSection />
        <RevenueLeakQuiz />
        <FAQ />
        <CtaSection/>
      </div>
    </>
  );
}