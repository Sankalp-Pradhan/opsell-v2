"use client";

// ─── Page ─────────────────────────────────────────────────────────────────────

import { KEYFRAMES } from "@/components/home/styles";
import {
  Nav,
  Hero,
  ProblemSection,
  GrowthSection,
  IntegrateSection,
  QuizSection,
  FaqSection,
  CtaSection,
  Footer,
} from "@/components/home/sections";

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
        <Nav />
        <Hero />
        <ProblemSection />
        <GrowthSection />
        <IntegrateSection />
        <QuizSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </div>
    </>
  );
}