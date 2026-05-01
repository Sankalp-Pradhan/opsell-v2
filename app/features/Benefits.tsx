import {
  Smile,
  Clock,
  TrendingUp,
  GraduationCap,
  Plug,
  Eye,
} from "lucide-react";

const benefits = [
  {
    Icon: Smile,
    title: "Easy to Use",
    text: "Designed so anyone can get started in minutes — no manual needed.",
  },
  {
    Icon: Clock,
    title: "Saves Time",
    text: "Automate the repetitive tasks you used to do every single morning.",
  },
  {
    Icon: TrendingUp,
    title: "Improves Revenue",
    text: "Smarter prices and clear suggestions help you sell more, every week.",
  },
  {
    Icon: GraduationCap,
    title: "No Technical Skills Needed",
    text: "If you can use a phone, you can run your entire pricing with Opsell.",
  },
  {
    Icon: Plug,
    title: "Works with Your Store",
    text: "Connects with Shopify, WooCommerce and more in just a few clicks.",
  },
  {
    Icon: Eye,
    title: "Gives Clear Insights",
    text: "Plain-language reports tell you exactly what to do next.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600 sm:text-xs">
            Why Opsell
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Why Businesses Choose Opsell
          </h2>

          <p className="mt-4 text-base text-gray-500 sm:text-lg">
            Six reasons store owners love it from day one.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group rounded-3xl border border-gray-200/60 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_4px_24px_0_rgba(59,111,240,0.10)] sm:p-6 lg:p-7"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 transition-colors group-hover:bg-blue-600">
                <b.Icon className="h-5 w-5 text-blue-600 transition-colors group-hover:text-white" />
              </div>

              <h3 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
                {b.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-500 sm:text-[15px]">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;