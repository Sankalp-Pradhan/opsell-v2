"use client";

import React from "react";
import OrbitApps from "./orbitApps";
import { useInView } from "./use-view";

export function IntegrateSection() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: "#0F1114",
        padding: "80px 40px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
          opacity: inView ? 1 : 0,
          transform: inView ? "none" : "translateY(32px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* Orbit — no fixed width/height here; OrbitApps is self-sizing */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <OrbitApps />
        </div>

        {/* Text */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "rgba(255,255,255,0.4)",
              marginBottom: 12,
            }}
          >
            Integrations
          </p>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#fff",
              marginBottom: 16,
            }}
          >
            One Hub for Every
            <br />
            <em style={{ fontStyle: "normal", color: "#7B73FF" }}>
              E-commerce Platform
            </em>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.65,
              marginBottom: 24,
            }}
          >
            Opsell brings together pricing, listings, competitor tracking, and
            automation from every marketplace into one intelligent platform —
            helping your team make faster decisions, react instantly, and grow
            more efficiently.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 28,
            }}
          >
            {[
              "Amazon", "Flipkart", "Myntra", "Meesho",
              "Ajio", "Shopify", "Nykaa", "Blinkit", "Zepto"
            ].map((c) => (
              <span
                key={c}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.6)",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  padding: "5px 12px",
                  borderRadius: 100,
                }}
              >
                {c}
              </span>
            ))}
          </div>

          <button
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 15,
              fontWeight: 600,
              color: "#fff",
              background: "none",
              border: "1.5px solid rgba(255,255,255,0.25)",
              cursor: "pointer",
              padding: "12px 24px",
              borderRadius: 10,
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)")
            }
          >
            Learn more →
          </button>
        </div>
      </div>
    </section>
  );
}