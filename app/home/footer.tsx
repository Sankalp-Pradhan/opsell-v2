"use client";

// ─── Footer ───────────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer style={{ background: "#0F1114", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 1 }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 800, color: "#fff", letterSpacing: "-0.03em" }}>opsell</span>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 800, color: "#5046E5" }}>.</span>
      </div>

      <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.3)" }}>© 2026 Opsell AI. All rights reserved.</span>

      <div style={{ display: "flex", gap: 24 }}>
        {["Privacy", "Terms", "Security", "Contact"].map(l => (
          <a
            key={l}
            href="#"
            style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
          >
            {l}
          </a>
        ))}
      </div>
    </footer>
  );
}