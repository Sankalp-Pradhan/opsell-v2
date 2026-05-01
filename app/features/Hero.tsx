import { ArrowRight, ShoppingBag, Sparkles, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-28"
      style={{
        background:
          "linear-gradient(135deg, #EEF2FF 0%, #F8F9FF 60%, #EDF4FF 100%)",
      }}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -left-24 top-40 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl sm:h-80 sm:w-80" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600 sm:text-xs">
            <Sparkles className="h-3.5 w-3.5" />
            All-in-one growth toolkit
          </div>

          <h1 className="mx-auto max-w-2xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:mx-0 lg:max-w-xl lg:text-6xl xl:text-7xl">
            Everything You Need to{" "}
            <span className="bg-gradient-to-br from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Grow Sales Smarter
            </span>
          </h1>

          <p className="mx-auto max-w-xl text-base leading-7 text-gray-500 sm:text-lg lg:mx-0">
            Opsell helps you track competitors, improve pricing, and grow revenue automatically — without complicated tools.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 sm:px-7 sm:py-3.5 sm:text-base">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </button>

            <button className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition hover:border-blue-300 hover:text-blue-600 sm:px-7 sm:py-3.5 sm:text-base">
              Book a Demo
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-gray-400 sm:text-sm lg:justify-start">
            <span>✓ No credit card</span>
            <span>✓ 14-day free trial</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative rounded-3xl border border-gray-200/60 bg-white p-4 shadow-[0_8px_40px_0_rgba(59,111,240,0.13)] sm:p-6 lg:ml-auto lg:max-w-xl">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 sm:text-xs">
                  Live Dashboard
                </p>
                <p className="text-sm font-bold text-gray-900 sm:text-base">
                  Today's overview
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
                <TrendingUp className="h-4 w-4 text-blue-600" />
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 sm:text-xs">
                Competitor prices
              </p>

              {[
                { name: "Competitor A", price: "$24.90", trend: "-3%", trendClass: "text-blue-600" },
                { name: "Competitor B", price: "$27.50", trend: "+1%", trendClass: "text-gray-400" },
                { name: "Your store", price: "$25.00", trend: "Best", trendClass: "text-blue-600" },
              ].map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-between gap-3 rounded-2xl bg-blue-50/50 px-3 py-3 sm:px-4"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
                    <span className="truncate text-xs font-medium text-gray-800 sm:text-sm">
                      {c.name}
                    </span>
                  </div>

                  <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                    <span className="text-xs font-semibold text-gray-900 sm:text-sm">
                      {c.price}
                    </span>
                    <span className={`text-[10px] font-semibold sm:text-xs ${c.trendClass}`}>
                      {c.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-gray-100 bg-white p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 sm:text-xs">
                  Revenue · 7 days
                </span>
                <span className="text-sm font-bold text-blue-600">+18.4%</span>
              </div>

              <svg viewBox="0 0 200 60" className="h-14 w-full">
                <defs>
                  <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#3B6FF0" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3B6FF0" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,45 L25,38 L50,42 L75,30 L100,32 L125,22 L150,25 L175,12 L200,15 L200,60 L0,60 Z" fill="url(#g)" />
                <path d="M0,45 L25,38 L50,42 L75,30 L100,32 L125,22 L150,25 L175,12 L200,15" fill="none" stroke="#3B6FF0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div className="relative mx-auto mt-4 w-full max-w-xs rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_4px_24px_0_rgba(59,111,240,0.10)] sm:absolute sm:-bottom-6 sm:-left-4 sm:mt-0 sm:max-w-[260px] lg:-left-8">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <ShoppingBag className="h-4 w-4 text-blue-600" />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-600 sm:text-xs">
                  Suggested action
                </p>
                <p className="mt-1 text-sm leading-snug text-gray-800">
                  Bundle "Hat + Tee" — could lift sales by 12%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;