"use client";

// ─── Nav ──────────────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: 64,
        background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #E2E4E8",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 40px",
        transition: "background 0.25s",
      }}
    >
      {/* Logo */}
      <a href="#" style={{ display: "flex", alignItems: "baseline", gap: 1, textDecoration: "none" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800, color: "#0F1114", letterSpacing: "-0.03em" }}>opsell</span>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800, color: "#5046E5" }}>.</span>
      </a>

      {/* Links */}
      <ul style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 }}>
        {["Product", "Integrations", "Pricing", "Blog"].map(l => (
          <li key={l}>
            <a
              href="#"
              style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 500, color: "#4A4F57", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#0F1114")}
              onMouseLeave={e => (e.currentTarget.style.color = "#4A4F57")}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        {/* <button
          style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, color: "#2E3238", background: "none", border: "none", cursor: "pointer", padding: "8px 16px", borderRadius: 8 }}
          onMouseEnter={e => (e.currentTarget.style.background = "#F0F1F3")}
          onMouseLeave={e => (e.currentTarget.style.background = "none")}
        >
          Log in
        </button> */}
        <button
          style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, color: "#fff", background: "#5046E5", border: "none", cursor: "pointer", padding: "9px 20px", borderRadius: 8 }}
          onMouseEnter={e => (e.currentTarget.style.background = "#3B32C4")}
          onMouseLeave={e => (e.currentTarget.style.background = "#5046E5")}
        >
          Talk to the founder
        </button>
      </div>
    </nav>
  );
}