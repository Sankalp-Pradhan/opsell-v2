import { TrendingUp, Sparkles } from "lucide-react";

type Brand = {
  name: string;
  logo: string;
  multiplier: string;
  headline: string;
  description: string;
  footer: string;
};

const brands: Brand[] = [
  {
    name: "adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    multiplier: "2.1x",
    headline: "GMV growth via AI suggested Cross-Selling.",
    description:
      "(Opsell AI detected competitor pricing dip and recommended optimized Adidas bundles, increasing total order value).",
    footer: "Opsell recommends next optimal bundle.",
  },
  {
    name: "minimalist",
    logo: "", // no reliable public CDN — use text fallback
    multiplier: "1.8x",
    headline: "Conversion Rate boost via AI Content Generation.",
    description:
      "(Opsell's AI updated all minimalist. listings across Amazon and Flipkart, resulting in faster checkouts).",
    footer:
      "Content score has been surpassed by our AI-generated product descriptions.",
  },
  {
    name: "dot & key",
    logo: "https://dotandkey.com/cdn/shop/files/dot-key-logo.png", // no reliable public CDN — use text fallback
    multiplier: "1.5x",
    headline: "Margin improvement via automated price testing.",
    description:
      "(Opsell AI tested higher price in specific regions, maintaining volume and boosting margins for key dot and key serums).",
    footer: "Regional demand insights implemented in dot and key SKU level pricing.",
  },
];

const BrandLogo = ({ logo, name }: { logo: string; name: string }) => {
  if (!logo) {
    return (
      <span className="font-display text-sm font-bold uppercase tracking-widest text-white/80">
        {name}
      </span>
    );
  }

  return (
    <img
      src={logo}
      alt={`${name} logo`}
      className="h-10 w-auto object-contain brightness-0 invert"
      loading="lazy"
      onError={(e) => {
        const target = e.currentTarget;
        target.style.display = "none";
        const fallback = target.nextElementSibling as HTMLElement;
        if (fallback) fallback.style.display = "block";
      }}
    />
  );
};

const ProblemSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0F1114] py-16 px-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(circle, #5E5CE6 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#5E5CE6]/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <h2 className="mx-auto max-w-4xl text-center font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
        AI{" "}
          <span className="bg-gradient-to-r from-[#A5B4FC] to-[#5E5CE6] bg-clip-text text-transparent">
          Growth Engine
          </span>
          {" "}for Sellers
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {brands.map((brand) => (
            <article
              key={brand.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1C1F24] to-[#0F1114] p-8 transition-all duration-300 hover:border-[#5E5CE6]/40 hover:shadow-[0_20px_50px_-15px_rgba(94,92,230,0.4)]"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#5E5CE6]/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex h-12 items-center">
                  <BrandLogo logo={brand.logo} name={brand.name} />
                  {/* onError fallback sibling — hidden by default */}
                  <span
                    className="font-display text-sm font-bold uppercase tracking-widest text-white/80"
                    style={{ display: "none" }}
                  >
                    {brand.name}
                  </span>
                </div>
                <p className="max-w-[55%] text-right text-sm font-medium leading-snug text-white/90">
                  {brand.headline}
                </p>
              </div>

              <p className="relative mt-3 text-xs leading-relaxed text-white/50">
                {brand.description}
              </p>

              <div className="relative mt-8 flex items-end gap-2">
                <TrendingUp className="mb-2 h-7 w-7 text-[#22C55E]" strokeWidth={2.5} />
                <span className="font-display text-6xl font-bold tracking-tight text-white">
                  {brand.multiplier}
                </span>
              </div>

              <div className="relative mt-6 flex items-center gap-2 border-t border-white/10 pt-6">
                <Sparkles className="h-4 w-4 flex-shrink-0 text-[#A5B4FC]" />
                <p className="text-xs text-[#A5B4FC]">{brand.footer}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white">
            Read Detailed Success Stories
            <span aria-hidden>↓</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;