import { ArrowRight, Activity, Tag, Lightbulb, Zap, Check, Bell, Package, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  label: string;
  title: string;
  description: string;
  bullets: string[];
  Icon: LucideIcon;
  mockup: React.ReactNode;
};

const Mock1 = () => (
  <div className="space-y-3">
    {[
      { name: "Wireless Headphones", price: "$89.00", change: "−$4", up: false },
      { name: "Smart Watch Pro", price: "$149.90", change: "+$10", up: true },
      { name: "Bluetooth Speaker", price: "$39.50", change: "−$2", up: false },
    ].map((p) => (
      <div key={p.name} className="flex items-center justify-between rounded-2xl bg-blue-50/60 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600" />
          <div>
            <p className="text-sm font-semibold text-gray-900">{p.name}</p>
            <p className="text-xs text-gray-400">3 competitors tracked</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-bold text-gray-900">{p.price}</p>
          <p className={`text-xs font-semibold ${p.up ? "text-gray-400" : "text-blue-600"}`}>{p.change}</p>
        </div>
      </div>
    ))}
  </div>
);

const Mock2 = () => (
  <div className="space-y-4">
    <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">Recommended price</p>
      <p className="mt-2 text-4xl font-bold text-gray-900">$32.90</p>
      <p className="mt-1 text-sm text-gray-500">Estimated +14% conversions</p>
    </div>
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded-2xl bg-gray-100 p-4">
        <p className="text-xs text-gray-400">Current</p>
        <p className="mt-1 text-lg font-bold text-gray-900">$29.90</p>
      </div>
      <div className="rounded-2xl bg-gray-100 p-4">
        <p className="text-xs text-gray-400">Margin</p>
        <p className="mt-1 text-lg font-bold text-blue-600">38%</p>
      </div>
    </div>
  </div>
);

const Mock3 = () => (
  <div className="space-y-3">
    {[
      { icon: Package, title: "Bundle T-shirt + Cap", note: "Trending together" },
      { icon: Lightbulb, title: "Promote Summer Collection", note: "High demand week" },
      { icon: BarChart3, title: "Restock Sneakers Black", note: "Low inventory" },
    ].map((s) => (
      <div key={s.title} className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
          <s.icon className="h-5 w-5 text-blue-600" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-900">{s.title}</p>
          <p className="text-xs text-gray-400">{s.note}</p>
        </div>
        <ArrowRight className="h-4 w-4 text-blue-600" />
      </div>
    ))}
  </div>
);

const Mock4 = () => (
  <div className="space-y-3">
    <div className="rounded-2xl border border-gray-100 bg-white p-4">
      <div className="mb-3 flex items-center gap-2">
        <Bell className="h-4 w-4 text-blue-600" />
        <p className="text-sm font-semibold text-gray-900">When competitor lowers price</p>
      </div>
      <div className="rounded-xl bg-blue-50/60 p-3 text-xs text-gray-500">
        → Match price within 2%{" "}
        <span className="ml-2 rounded-full bg-blue-600 px-2 py-0.5 font-semibold text-white">Active</span>
      </div>
    </div>
    <div className="rounded-2xl border border-gray-100 bg-white p-4">
      <div className="mb-3 flex items-center gap-2">
        <Zap className="h-4 w-4 text-blue-600" />
        <p className="text-sm font-semibold text-gray-900">Weekly performance report</p>
      </div>
      <div className="rounded-xl bg-blue-50/60 p-3 text-xs text-gray-500">
        → Sent every Monday at 9:00 AM
      </div>
    </div>
  </div>
);

const features: Feature[] = [
  { label: "Competitor Tracking", title: "Track Competitors in Real Time", description: "See when competitors change prices, run discounts, or go out of stock — all in one place.", bullets: ["Live price tracking", "Competitor alerts", "Stock monitoring"], Icon: Activity, mockup: <Mock1 /> },
  { label: "Smart Pricing", title: "Know the Best Price to Set", description: "Opsell suggests the best price for your products so you can increase sales without lowering profits.", bullets: ["Smart price suggestions", "Protect profit margins", "Increase conversions"], Icon: Tag, mockup: <Mock2 /> },
  { label: "Growth Insights", title: "Get Clear Growth Suggestions", description: "Receive simple recommendations like what to bundle, what to promote, and what to restock.", bullets: ["Product recommendations", "Bundle suggestions", "Sales insights"], Icon: Lightbulb, mockup: <Mock3 /> },
  { label: "Automation", title: "Save Time with Automation", description: "Set rules once and let Opsell handle repetitive work automatically.", bullets: ["Automatic alerts", "Price updates", "Weekly reports"], Icon: Zap, mockup: <Mock4 /> },
];

const MockupShell = ({ children }: { children: React.ReactNode }) => (
  <div className="relative">
    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-400 to-blue-600 opacity-10 blur-2xl" />
    <div
      className="relative rounded-3xl border border-gray-200/60 p-6 transition-transform duration-500 group-hover:-translate-y-1"
      style={{ background: "linear-gradient(135deg,#EEF2FF 0%,#F8F9FF 60%,#EDF4FF 100%)" }}
    >
      {children}
    </div>
  </div>
);

const FeatureBlocks = () => {
  return (
    <section id="features" className="bg-blue-50/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">Core Features</p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Built to make growth feel simple</h2>
          <p className="mt-4 text-lg text-gray-500">Powerful tools, designed for everyday store owners.</p>
        </div>

        <div className="space-y-10 lg:space-y-16">
          {features.map((f, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={f.title}
                className="group grid items-center gap-8 rounded-3xl border border-gray-200/60 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-[0_4px_24px_0_rgba(59,111,240,0.10)] sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-10"              >
                {/* Copy */}
                <div className={reverse ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-blue-600">
                    <f.Icon className="h-3.5 w-3.5" />
                    {f.label}
                  </div>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">{f.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-gray-500">{f.description}</p>
                  <ul className="mt-6 space-y-3">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm font-medium text-gray-800">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50">
                          <Check className="h-3.5 w-3.5 text-blue-600" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-700 active:scale-95 sm:w-auto">                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Mockup */}
                <div className={reverse ? "lg:order-1" : ""}>
                  <MockupShell>{f.mockup}</MockupShell>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlocks;