"use client";

// ─── Nav ──────────────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";
import Link from "next/link";

const LINKS = [
  { label: "product",      href: "/product" },
  { label: "How it works", href: "/works" },
  { label: "Features",      href: "/features" },
  { label: "Pricing",         href: "/pricing" },
];

const NAV_STYLES = `
  .nav-links { display: flex; }
  .nav-cta   { display: flex; }
  .hamburger { display: none; }

  @media (max-width: 768px) {
    .nav-links { display: none; }
    .nav-cta   { display: none; }
    .hamburger { display: flex; }
  }
`;

export function Nav() {
  const [scrolled,     setScrolled]     = useState(false);
  const [sidebarOpen,  setSidebarOpen]  = useState(false);

  // Inject responsive CSS once
  useEffect(() => {
    const el = document.createElement("style");
    el.textContent = NAV_STYLES;
    document.head.appendChild(el);
    return () => { document.head.removeChild(el); };
  }, []);

  // Scroll detection
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Body scroll lock when sidebar open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  const close = () => setSidebarOpen(false);

  const linkStyle: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontSize: 14,
    fontWeight: 500,
    color: "#4A4F57",
    textDecoration: "none",
  };

  const ctaStyle: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontSize: 14,
    fontWeight: 600,
    color: "#fff",
    background: "#5046E5",
    border: "none",
    cursor: "pointer",
    padding: "9px 20px",
    borderRadius: 8,
  };

  return (
    <>
      {/* ── Topbar ── */}
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
        <Link href="/" style={{ display: "flex", alignItems: "baseline", gap: 1, textDecoration: "none" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800, color: "#0F1114", letterSpacing: "-0.03em" }}>opsell</span>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800, color: "#5046E5" }}>.</span>
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links" style={{ gap: 32, listStyle: "none", margin: 0, padding: 0 }}>
          {LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0F1114")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4A4F57")}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="nav-cta" style={{ gap: 12, alignItems: "center" }}>
          <Link href="/contact">
            <button
              style={ctaStyle}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#3B32C4")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#5046E5")}
            >
              Talk to the founder
            </button>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
          style={{
            background: "none", border: "none", cursor: "pointer",
            padding: 8, borderRadius: 8,
            flexDirection: "column", gap: 5,
            alignItems: "center", justifyContent: "center",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ display: "block", width: 22, height: 2, background: "#0F1114", borderRadius: 2 }} />
          ))}
        </button>
      </nav>

      {/* ── Backdrop ── */}
      <div
        onClick={close}
        aria-hidden="true"
        style={{
          position: "fixed", inset: 0, zIndex: 200,
          background: "rgba(15,17,20,0.4)",
          backdropFilter: "blur(2px)",
          opacity: sidebarOpen ? 1 : 0,
          pointerEvents: sidebarOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* ── Sidebar ── */}
      <aside
        style={{
          position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 300,
          width: 280,
          background: "#fff",
          borderLeft: "1px solid #E2E4E8",
          display: "flex", flexDirection: "column",
          padding: "0 0 32px",
          transform: sidebarOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: sidebarOpen ? "-8px 0 32px rgba(15,17,20,0.12)" : "none",
        }}
      >
        {/* Sidebar header */}
        <div style={{
          height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 24px", borderBottom: "1px solid #E2E4E8", flexShrink: 0,
        }}>
          <Link href="/" onClick={close} style={{ display: "flex", alignItems: "baseline", gap: 1, textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800, color: "#0F1114", letterSpacing: "-0.03em" }}>opsell</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800, color: "#5046E5" }}>.</span>
          </Link>
          <button
            onClick={close}
            aria-label="Close menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: 8, borderRadius: 8, color: "#4A4F57",
              fontSize: 20, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#F0F1F3")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
          >
            ✕
          </button>
        </div>

        {/* Sidebar links */}
        <ul style={{ listStyle: "none", margin: 0, padding: "16px 16px 0", flexGrow: 1 }}>
          {LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={close}
                style={{
                  display: "block",
                  fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 500,
                  color: "#4A4F57", textDecoration: "none",
                  padding: "12px 12px", borderRadius: 8,
                  transition: "background 0.15s, color 0.15s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#F0F1F3"; e.currentTarget.style.color = "#0F1114"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#4A4F57"; }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sidebar CTA */}
        <div style={{ padding: "0 24px" }}>
          <Link href="/contact" onClick={close} style={{ display: "block" }}>
            <button
              style={{ ...ctaStyle, width: "100%", padding: "12px 20px" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#3B32C4")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#5046E5")}
            >
              Talk to the founder
            </button>
          </Link>
        </div>
      </aside>
    </>
  );
}