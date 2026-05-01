
"use client";

import { useState } from "react";
import { Check, Clock, Bell, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Starter",
    description: "Best for new or small stores",
    monthly: 999,
    features: [
      "Track up to 25 products",
      "Automatic price updates",
      "Competitor monitoring",
      "Basic sales insights",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    description: "For stores ready to scale up",
    monthly: 2499,
    features: [
      "Track up to 250 products",
      "Faster automatic updates",
      "Competitor alerts",
      "Smart pricing suggestions",
      "Weekly growth reports",
      "Priority support",
    ],
    cta: "Grow My Store",
    popular: true,
  },
  {
    name: "Scale",
    description: "For larger ecommerce businesses",
    monthly: 5999,
    features: [
      "Unlimited products",
      "Advanced competitor tracking",
      "Custom pricing rules",
      "Dedicated support",
      "Team access",
      "Detailed reports",
    ],
    cta: "Book a Demo",
    popular: false,
  },
];

const faqs = [
  {
    q: "Do I need technical knowledge?",
    a: "Not at all. Opsell is built for store owners, not developers. If you can use email, you can use Opsell.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no contracts and no cancellation fees. Cancel from your dashboard with one click.",
  },
  {
    q: "How long does setup take?",
    a: "Most stores are fully connected and running in under 10 minutes. We guide you through every step.",
  },
  {
    q: "Will this work for my Shopify or WooCommerce store?",
    a: "Yes. Opsell works seamlessly with Shopify, WooCommerce, and most popular ecommerce platforms.",
  },
  {
    q: "Which plan is best for me?",
    a: "If you have under 25 products, start with Starter. Growing stores love Growth. Larger catalogs should pick Scale.",
  },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  const formatPrice = (monthly: number) => {
    const price = yearly ? Math.round(monthly * 0.8) : monthly;
    return `₹${price.toLocaleString("en-IN")}`;
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 via-white to-slate-50">
        <div className=" max-w-7xl px-6 pb-20 pt-24 text-center lg:px-8">
          <Badge className="mb-6 border-0 bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-100">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" />
            Simple pricing for growing stores
          </Badge>

          <h1 className="mx-auto mb-6 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Pricing that grows
            <br />
            <span className="text-blue-600">with your store.</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 md:text-xl">
            Save hours every week. Sell more without lifting a finger. Pick a
            plan and start your free trial today.
          </p>

          <div className="inline-flex items-center gap-4 rounded-full border border-slate-200 bg-white px-6 py-3 shadow-sm">
            <span
              className={`text-sm font-medium transition-colors ${
                !yearly ? "text-slate-900" : "text-slate-500"
              }`}
            >
              Monthly
            </span>

            <Switch checked={yearly} onCheckedChange={setYearly} />

            <span
              className={`text-sm font-medium transition-colors ${
                yearly ? "text-slate-900" : "text-slate-500"
              }`}
            >
              Yearly
            </span>

            <Badge className="ml-1 border-0 bg-blue-50 text-blue-600 hover:bg-blue-100">
              Save 20%
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-blue-600 bg-white shadow-2xl shadow-blue-100 md:-translate-y-4"
                  : "border border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white shadow-lg hover:bg-blue-600">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="mb-8">
                <h3 className="mb-2 text-2xl font-bold text-slate-900">
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-600">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight text-slate-900">
                    {formatPrice(plan.monthly)}
                  </span>
                  <span className="text-base text-slate-500">/month</span>
                </div>

                {yearly && (
                  <p className="mt-2 text-xs font-medium text-blue-600">
                    Billed yearly
                  </p>
                )}
              </div>

              <Button
                className={`mb-8 h-12 w-full rounded-xl font-medium transition-all ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-slate-100 text-slate-900 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {plan.cta}
              </Button>

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-50">
                      <Check className="h-3 w-3 text-blue-600" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-24 grid max-w-5xl gap-8 border-t border-slate-200 pt-16 md:mx-auto md:grid-cols-3">
          {[
            {
              icon: Clock,
              title: "Save hours every week",
              desc: "Stop manually checking prices and updating listings.",
            },
            {
              icon: Bell,
              title: "Never miss competitor changes",
              desc: "Get notified the moment your competitors move.",
            },
            {
              icon: TrendingUp,
              title: "Increase sales automatically",
              desc: "Smart pricing that helps you sell more, every day.",
            },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                <item.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="mb-2 text-lg font-semibold text-slate-900">
                {item.title}
              </h4>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-100/70 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Frequently asked questions
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to know before getting started.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-slate-200 bg-white px-6 shadow-sm"
              >
                <AccordionTrigger className="py-5 text-left font-semibold text-slate-900 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-slate-600">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      
    </main>
  );
}