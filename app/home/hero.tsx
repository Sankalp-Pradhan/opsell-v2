"use client";

// ─── Hero Dashboard ───────────────────────────────────────────────────────────

function HeroDashboard() {
  return (
    <div
      className="mt-16 w-full max-w-[1000px] relative z-[1]"
      style={{ animation: "fadeUp 0.8s 0.32s ease both" }}
    >
      <div className="bg-white border border-[#E2E4E8] rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.10),0_0_0_1px_rgba(0,0,0,0.04)] overflow-hidden">

        {/* Browser topbar */}
        <div className="h-11 bg-[#F8F9FA] border-b border-[#E2E4E8] flex items-center px-4 gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840] inline-block" />
          <div className="flex-1 mx-4 bg-[#F0F1F3] h-6 rounded-md flex items-center px-3 gap-1.5">
            <span className="font-mono text-[11px] text-[#8C919A]">app.opsell.ai/dashboard</span>
          </div>
        </div>

        {/* Mockup body */}
        <div className="flex h-auto lg:h-[360px]">

          {/* Sidebar — hidden on mobile */}
          <div className="hidden lg:flex w-[200px] border-r border-[#E2E4E8] bg-white p-4 flex-col gap-1 shrink-0">
            <div className="flex items-baseline gap-px px-2 mb-4">
              <span className="font-display text-sm font-extrabold text-[#0F1114] tracking-tight">opsell</span>
              <span className="font-display text-sm font-extrabold text-[#5046E5]">.</span>
            </div>
            {[
              { label: "Dashboard",   active: true  },
              { label: "Listings",    active: false },
              { label: "Pricing",     active: false },
              { label: "Competitors", active: false },
              { label: "Analytics",   active: false },
            ].map(item => (
              <div
                key={item.label}
                className={`flex items-center gap-2 p-2 rounded-md text-[13px] font-display ${
                  item.active
                    ? "font-semibold text-[#5046E5] bg-[#F0EFFF]"
                    : "font-medium text-[#6B707A]"
                }`}
              >
                <span
                  className="w-4 h-4 rounded-[3px] shrink-0 inline-block"
                  style={{ background: "currentColor", opacity: item.active ? 1 : 0.3 }}
                />
                {item.label}
              </div>
            ))}
          </div>

          {/* Main */}
          <div className="flex-1 bg-[#F8F9FA] p-3.5 sm:p-5 flex flex-col gap-3 overflow-hidden">
            <div className="flex justify-between items-center">
              <span className="font-display text-sm sm:text-base font-bold text-[#0F1114]">
                Overview · April 2026
              </span>
              <span className="bg-[#5046E5] text-white font-display text-[11px] font-semibold px-3 py-[5px] rounded-md">
                + New Action
              </span>
            </div>

            {/* Stats row — 2 cols on mobile, 4 on lg */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {[
                { label: "Total GMV",  val: "₹18.4L", delta: "+12%",       up: true  },
                { label: "Avg. Rank",  val: "#2.1",   delta: "−0.4",       up: true  },
                { label: "Live SKUs",  val: "14",     delta: "+2 this wk", up: true  },
                { label: "AI Actions", val: "289",    delta: "this month",  up: null  },
              ].map(s => (
                <div key={s.label} className="bg-white border border-[#E2E4E8] rounded-lg p-2.5 sm:p-3">
                  <div className="font-body text-[10px] sm:text-[11px] text-[#8C919A] mb-1">{s.label}</div>
                  <div className="font-mono text-base sm:text-lg font-medium text-[#0F1114]">{s.val}</div>
                  {s.delta && (
                    <div
                      className={`font-display text-[10px] font-semibold mt-0.5 ${
                        s.up === true ? "text-[#16A34A]" : s.up === false ? "text-[#EF4444]" : "text-[#6B707A]"
                      }`}
                    >
                      {s.delta}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Table — simplified cols on mobile */}
            <div className="bg-white border border-[#E2E4E8] rounded-lg overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-[2fr_1fr_1fr] lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] px-3 sm:px-4 py-2 border-b border-[#F0F1F3] bg-[#F8F9FA]">
                {["Product", "Price", "Status"].map(h => (
                  <span
                    key={h}
                    className="font-display text-[10px] font-bold uppercase tracking-[0.06em] text-[#8C919A]"
                  >
                    {h}
                  </span>
                ))}
                {/* Extra cols — desktop only */}
                {["Platform", "Rank"].map(h => (
                  <span
                    key={h}
                    className="hidden lg:block font-display text-[10px] font-bold uppercase tracking-[0.06em] text-[#8C919A]"
                  >
                    {h}
                  </span>
                ))}
              </div>

              {[
                { name: "Vitamin C Serum 30ml", platform: "Amazon",   price: "₹649",  rank: "#1", status: "Optimal",  statusColor: "text-[#16A34A]", statusBg: "bg-[#ECFDF5]" },
                { name: "Moisturiser SPF 50",   platform: "Flipkart", price: "₹429",  rank: "#4", status: "Review",   statusColor: "text-[#F59E0B]", statusBg: "bg-[#FFFBEB]" },
                { name: "Retinol Night Cream",  platform: "Myntra",   price: "₹1939", rank: "#7", status: "Critical", statusColor: "text-[#EF4444]", statusBg: "bg-[#FEF2F2]" },
              ].map(row => (
                <div
                  key={row.name}
                  className="grid grid-cols-[2fr_1fr_1fr] lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#F0F1F3] items-center last:border-0"
                >
                  <span className="font-body text-[11px] sm:text-xs text-[#2E3238] truncate pr-2">{row.name}</span>
                  <span className="font-mono text-[11px] sm:text-xs text-[#0F1114]">{row.price}</span>
                  <span className={`inline-flex items-center px-2 py-[3px] rounded-full font-display text-[10px] font-semibold w-fit ${row.statusBg} ${row.statusColor}`}>
                    {row.status}
                  </span>
                  {/* Desktop-only cols */}
                  <span className="hidden lg:block font-body text-xs text-[#2E3238]">{row.platform}</span>
                  <span className="hidden lg:block font-mono text-xs text-[#0F1114]">{row.rank}</span>
                </div>
              ))}
            </div>

            {/* AI Panel */}
            <div className="bg-[#F0EFFF] border border-[#C7C4FF] rounded-lg p-2.5 sm:p-[10px_14px] flex items-start gap-2">
              <div className="flex gap-[3px] mt-0.5 shrink-0">
                {[0, 200, 400].map(d => (
                  <span
                    key={d}
                    className="w-[5px] h-[5px] rounded-full bg-[#5046E5] inline-block"
                    style={{ animation: `aiPulse 1.2s ease ${d}ms infinite` }}
                  />
                ))}
              </div>
              <div className="font-body text-[11px] sm:text-xs text-[#2E3238] leading-relaxed">
                <strong className="font-display font-semibold text-[#5046E5] text-[11px]">AI Suggestion:</strong>{" "}
                Retinol Night Cream is losing to competitor (#499, ₹1760). Reduce to ₹1849 to recover +₹5.2L ·{" "}
                <u className="cursor-pointer">Apply?</u>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export function Hero() {
  return (
    <section className="min-h-screen px-4 sm:px-10 pt-24 sm:pt-[120px] pb-20 flex flex-col items-center text-center relative overflow-hidden bg-white">

      {/* Gradient BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(80,70,229,0.08)_0%,transparent_70%)]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(80,70,229,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(80,70,229,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
          }}
        />
      </div>

      {/* Pill */}
      <div
        className="inline-flex items-center gap-2 px-4 py-[7px] rounded-full border border-[#E2E4E8] bg-white/90 backdrop-blur-sm shadow-[0_1px_3px_rgba(0,0,0,0.06)] font-display text-[13px] font-semibold text-[#4A4F57] mb-8 relative overflow-hidden z-[1]"
        style={{ animation: "fadeUp 0.6s ease both" }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full bg-[#5046E5] inline-block"
          style={{ animation: "aiPulse 1.5s ease infinite" }}
        />
        Your AI growth agent
        <div
          className="absolute top-0 -left-full w-3/5 h-full bg-[linear-gradient(90deg,transparent,rgba(80,70,229,0.15),transparent)]"
          style={{ animation: "pillBeam 3s ease infinite" }}
        />
      </div>

      {/* Headline */}
      <h1
        className="font-display text-[clamp(36px,6vw,80px)] font-extrabold leading-[1.02] tracking-[-0.04em] text-[#0F1114] max-w-[900px] relative z-[1]"
        style={{ animation: "fadeUp 0.6s 0.08s ease both" }}
      >
        Growth Across Every
        <br />
        <em className="not-italic text-[#5046E5]">Marketplace</em>
      </h1>

      <p
        className="mt-6 max-w-[560px] font-body text-[15px] sm:text-[17px] font-normal leading-[1.65] text-[#6B707A] relative z-[1]"
        style={{ animation: "fadeUp 0.6s 0.16s ease both" }}
      >
        Grow faster across all your e-commerce platforms with AI-powered
        analysis, pricing optimisation, competitor tracking, and automated
        actions — from one platform.
      </p>

      <div
        className="mt-10 flex flex-col sm:flex-row gap-3 items-center relative z-[1] w-full sm:w-auto px-4 sm:px-0"
        style={{ animation: "fadeUp 0.6s 0.24s ease both" }}
      >
        <button className="w-full sm:w-auto font-display text-[15px] font-semibold text-white bg-[#5046E5] border-none cursor-pointer px-7 py-3 rounded-[10px] shadow-[0_8px_24px_rgba(80,70,229,0.35)] transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(80,70,229,0.4)]">
          Talk to Founder
        </button>
        <button className="w-full sm:w-auto font-display text-[15px] font-semibold text-[#2E3238] bg-white border-[1.5px] border-[#D1D4D9] cursor-pointer px-7 py-3 rounded-[10px] transition-[border-color] duration-150 hover:border-[#8C919A]">
          Start Growing your Revenue →
        </button>
      </div>

      <HeroDashboard />
    </section>
  );
}