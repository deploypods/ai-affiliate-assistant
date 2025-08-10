"use client";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  Link2,
  Rocket,
  Shield,
  Sparkles,
  Wand2,
  Zap,
  MousePointerClick,
  LineChart,
  BadgePercent,
  Gauge,
  MousePointer2,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WaitlistForm from "@/components/waitlist-form";

// Small, self-contained "visuals" to replace external image files.
// No downloads, nothing to corrupt.

function HeroPreview() {
  return (
    <div className="relative rounded-xl border bg-white p-4 shadow-md">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border p-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Gauge className="h-4 w-4 text-indigo-600" /> Campaign Overview
          </div>
          <div className="mt-3 h-2 w-full rounded bg-slate-100">
            <div className="h-2 rounded bg-indigo-500 w-3/4" />
          </div>
          <div className="mt-2 h-2 w-2/3 rounded bg-slate-100">
            <div className="h-2 rounded bg-violet-500 w-2/3" />
          </div>
          <div className="mt-2 h-2 w-1/2 rounded bg-slate-100">
            <div className="h-2 rounded bg-emerald-500 w-1/2" />
          </div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Target className="h-4 w-4 text-indigo-600" /> Top Offers
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {["Indigo", "Violet", "Emerald"].map((c, i) => (
              <div
                key={i}
                className={`h-16 rounded-md ${
                  i === 0
                    ? "bg-gradient-to-br from-indigo-500 to-indigo-700"
                    : i === 1
                      ? "bg-gradient-to-br from-violet-500 to-violet-700"
                      : "bg-gradient-to-br from-emerald-500 to-emerald-600"
                }`}
              />
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-slate-600">
            <BadgePercent className="h-3.5 w-3.5" /> Auto-rotating creatives
          </div>
        </div>
        <div className="rounded-lg border p-4 sm:col-span-2">
          <div className="flex items-center gap-2 text-sm font-medium">
            <MousePointer2 className="h-4 w-4 text-indigo-600" /> Clicks & EPC
          </div>
          <div className="mt-3 grid grid-cols-12 gap-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div
                  className="w-4 rounded bg-indigo-500"
                  style={{ height: 20 + ((i * 13) % 60) }}
                />
                <div className="h-1 w-4 rounded bg-slate-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Badge className="absolute -bottom-4 -left-4 hidden sm:inline-flex bg-violet-600 hover:bg-violet-600 text-white shadow">
        Avg. +32% conversion lift
      </Badge>
    </div>
  );
}

function BrandBadge({ name }: { name: string }) {
  return (
    <div className="inline-flex h-10 items-center justify-center rounded-md border px-3 text-sm text-slate-600 bg-white">
      <span className="font-medium">{name}</span>
    </div>
  );
}

function OfferArtwork({ label }: { label: string }) {
  const palettes = [
    "from-indigo-500 to-violet-600",
    "from-fuchsia-500 to-violet-600",
    "from-emerald-500 to-teal-600",
  ];
  const pick = palettes[label.length % palettes.length];
  return (
    <div
      className={`h-48 w-full rounded-lg border bg-gradient-to-br ${pick} relative overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_30%_20%,white,transparent_40%),radial-gradient(circle_at_70%_60%,white,transparent_35%)]" />
      <div className="absolute bottom-2 left-2 rounded bg-white/80 px-2 py-0.5 text-xs text-slate-700">
        {label}
      </div>
    </div>
  );
}

function Header() {
  "use client";
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-600 to-violet-600 grid place-items-center text-white font-bold">
            C
          </div>
          <span className="text-lg font-semibold">Convertly</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Features
          </Link>
          <Link
            href="#offers"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Top offers
          </Link>
          <Link
            href="#pricing"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            FAQ
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/auth/sign-in"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Sign in
          </Link>
          <Button className="bg-indigo-600 hover:bg-indigo-500">
            Start free
          </Button>
        </div>
        <button
          aria-label="Open menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <div className="space-y-1.5">
            <div className="h-0.5 w-5 bg-slate-900" />
            <div className="h-0.5 w-5 bg-slate-900" />
            <div className="h-0.5 w-5 bg-slate-900" />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="#features"
              className="text-sm text-slate-700"
              onClick={() => setOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#offers"
              className="text-sm text-slate-700"
              onClick={() => setOpen(false)}
            >
              Top offers
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-slate-700"
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm text-slate-700"
              onClick={() => setOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-2 border-t flex items-center gap-3">
              <Link
                href="#"
                className="text-sm text-slate-700"
                onClick={() => setOpen(false)}
              >
                Sign in
              </Link>
              <Button className="bg-indigo-600 hover:bg-indigo-500" asChild>
                <Link href="#" onClick={() => setOpen(false)}>
                  Start free
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-slate-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
            <span>New: AI offer optimization for affiliates</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            AI‑powered affiliate marketing that turns clicks into revenue
          </h1>
          <p className="text-lg text-slate-600">
            Track, optimize, and scale affiliate campaigns with AI. Built for
            affiliate marketers, media buyers, and partner teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="h-11 px-6 bg-indigo-600 hover:bg-indigo-500">
              Start free trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="h-11 px-6 bg-transparent">
              View a demo
            </Button>
          </div>
          <WaitlistForm />
          <p className="text-xs text-slate-500">
            Free 14-day trial. No credit card required.
          </p>
          <div className="flex items-center gap-6 pt-2">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Shield className="h-4 w-4 text-indigo-600" />
              GDPR-ready
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Zap className="h-4 w-4 text-indigo-600" />
              Fast global delivery
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Link2 className="h-4 w-4 text-indigo-600" />
              Affiliate network integrations
            </div>
          </div>
        </div>
        <HeroPreview />
      </div>
    </section>
  );
}

function Networks() {
  const items = [
    "Impact",
    "CJ",
    "Rakuten",
    "Awin",
    "ShareASale",
    "PartnerStack",
  ];
  return (
    <section aria-labelledby="supported-networks" className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="supported-networks" className="sr-only">
          Supported Affiliate Networks
        </h2>
        <div className="flex items-center justify-center gap-x-6 gap-y-4 flex-wrap">
          {items.map((name) => (
            <BrandBadge key={name} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      icon: <Wand2 className="h-5 w-5 text-indigo-600" />,
      title: "Offer & link management",
      desc: "Centralize links, cloaks, and geo/device routing in one place.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-indigo-600" />,
      title: "AI creative rotation",
      desc: "Rotate headlines and creatives to maximize EPC automatically.",
    },
    {
      icon: <MousePointerClick className="h-5 w-5 text-indigo-600" />,
      title: "Attribution & funnels",
      desc: "See click‑to‑conversion paths across devices and sources.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-indigo-600" />,
      title: "Auto UTM & tracking",
      desc: "Standardize UTMs, subids, and postbacks without spreadsheets.",
    },
    {
      icon: <Link2 className="h-5 w-5 text-indigo-600" />,
      title: "Network integrations",
      desc: "One‑click connections to major affiliate networks and CRMs.",
    },
    {
      icon: <Shield className="h-5 w-5 text-indigo-600" />,
      title: "Fraud protection",
      desc: "Block bot clicks, VPNs, and suspicious patterns with rules.",
    },
  ];
  return (
    <section id="features" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="bg-indigo-50 text-indigo-700 hover:bg-indigo-50">
            Built for affiliate teams
          </Badge>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Everything you need to scale affiliate revenue
          </h2>
          <p className="mt-3 text-slate-600">
            From the first click to the final checkout—optimize each step with
            tools affiliates actually enjoy using.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Card key={it.title} className="transition hover:shadow-md">
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="h-9 w-9 rounded-md bg-indigo-100 grid place-items-center">
                  {it.icon}
                </div>
                <CardTitle className="text-base">{it.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-slate-600">{it.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function TopOffers() {
  const offers = [
    {
      name: "GreenBlend Superfoods",
      network: "Impact",
      payout: "$35 CPA",
      epc: "$1.42 EPC",
      tags: ["Health", "US", "Mobile‑friendly"],
    },
    {
      name: "Nova VPN",
      network: "CJ",
      payout: "30% RevShare",
      epc: "$1.86 EPC",
      tags: ["Software", "Global", "Recurring"],
    },
    {
      name: "GlowSkin Serum",
      network: "Awin",
      payout: "$28 CPA",
      epc: "$1.12 EPC",
      tags: ["Beauty", "UK", "TikTok"],
    },
  ];
  return (
    <section id="offers" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="bg-indigo-50 text-indigo-700 hover:bg-indigo-50">
            Top offers
          </Badge>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            High‑converting offers to test
          </h2>
          <p className="mt-3 text-slate-600">
            Curated by EPC, approval speed, and payout reliability.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((o) => (
            <Card key={o.name} className="flex flex-col">
              <CardHeader className="pb-0">
                <CardTitle className="text-base">{o.name}</CardTitle>
                <div className="mt-1 flex items-center gap-2 text-xs text-slate-600">
                  <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100">
                    {o.network}
                  </Badge>
                  <span className="inline-flex items-center gap-1">
                    <BadgePercent className="h-3.5 w-3.5" /> {o.payout}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <LineChart className="h-3.5 w-3.5" /> {o.epc}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <OfferArtwork label={o.name} />
                <div className="mt-3 flex flex-wrap gap-2">
                  {o.tags.map((t) => (
                    <Badge
                      key={t}
                      className="bg-indigo-50 text-indigo-700 hover:bg-indigo-50"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-500">
                  Promote offer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      badge: "Step 1",
      title: "Connect offers & networks",
      desc: "Authenticate your networks and import offers in minutes.",
    },
    {
      badge: "Step 2",
      title: "Launch links & creatives",
      desc: "Generate short links, tags, and creatives for each channel.",
    },
    {
      badge: "Step 3",
      title: "Optimize with AI",
      desc: "Auto‑rotate top performers and get daily recommendations.",
    },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            How it works
          </h2>
          <p className="mt-3 text-slate-600">
            A simple workflow designed for speed and clarity.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <Card key={s.title} className="relative">
              <CardHeader>
                <Badge className="w-fit bg-violet-600 hover:bg-violet-600 text-white">
                  {s.badge}
                </Badge>
                <CardTitle className="mt-2">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      quote:
        "We shipped our first affiliate campaign in a day and lifted conversions by 28%. Convertly paid for itself in a week.",
      name: "Jamie Lee",
      role: "Growth Lead, PixelPress",
    },
    {
      quote:
        "The creative rotation is the best I’ve used. My clients love the results and the reports are gorgeous.",
      name: "Marco Díaz",
      role: "Agency Owner",
    },
  ];
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Loved by modern marketers
          </h2>
          <p className="mt-3 text-slate-600">Real teams. Real results.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {quotes.map((q, i) => (
            <Card key={i} className="border-indigo-100">
              <CardContent className="pt-6">
                <p className="text-slate-800 text-lg">{q.quote}</p>
                <div className="mt-4 text-sm text-slate-600">
                  {q.name} • {q.role}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  "use client";
  const [annual, setAnnual] = useState(true);
  const tiers = [
    {
      name: "Starter",
      price: annual ? 19 : 24,
      cta: "Start free",
      features: [
        "1 domain",
        "50k tracked clicks/mo",
        "Link cloaking & UTMs",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Growth",
      price: annual ? 49 : 59,
      cta: "Choose Growth",
      features: [
        "3 domains",
        "1M tracked clicks/mo",
        "AI creative rotation",
        "Network integrations",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Scale",
      price: annual ? 129 : 149,
      cta: "Contact sales",
      features: [
        "SSO & roles",
        "Custom limits & SLAs",
        "Fraud rules & webhooks",
        "Dedicated CSM",
        "Audit logs",
      ],
      popular: false,
    },
  ];
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="bg-indigo-50 text-indigo-700 hover:bg-indigo-50">
            Simple pricing
          </Badge>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Plans that scale with you
          </h2>
          <p className="mt-3 text-slate-600">
            Pay monthly or save with annual billing.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm">
            <button
              className={`px-3 py-1 rounded-full ${!annual ? "bg-indigo-600 text-white" : "text-slate-700"}`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-3 py-1 rounded-full ${annual ? "bg-indigo-600 text-white" : "text-slate-700"}`}
              onClick={() => setAnnual(true)}
            >
              Annual
            </button>
            <span className="ml-1 text-xs text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full">
              Save up to 20%
            </span>
          </div>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <Card
              key={t.name}
              className={`flex flex-col ${t.popular ? "border-indigo-300 shadow-md" : ""}`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{t.name}</CardTitle>
                  {t.popular && (
                    <Badge className="bg-violet-600 hover:bg-violet-600 text-white">
                      Popular
                    </Badge>
                  )}
                </div>
                <div className="mt-3">
                  <span className="text-4xl font-bold">${t.price}</span>
                  <span className="text-slate-500">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <Check className="h-4 w-4 text-indigo-600" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button
                  className={`${t.popular ? "bg-indigo-600 hover:bg-indigo-500" : ""} w-full`}
                >
                  {t.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-slate-600">
            Can’t find what you’re looking for? Email hello@convertly.app
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is there a free trial?</AccordionTrigger>
              <AccordionContent>
                Yes, every plan starts with a 14‑day free trial. No credit card
                required.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I cancel anytime?</AccordionTrigger>
              <AccordionContent>
                Absolutely. Cancel with one click from your billing page. You’ll
                keep access until the end of the period.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Do you support my affiliate network?
              </AccordionTrigger>
              <AccordionContent>
                We integrate with major networks and CRMs. If you don’t see
                yours, contact us—custom connectors are available.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How does AI rotation work?</AccordionTrigger>
              <AccordionContent>
                Convertly evaluates creatives and routes more traffic to top
                performers while continuously testing new variants.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border bg-gradient-to-r from-indigo-600 to-violet-600">
          <div className="px-6 py-10 md:px-10 md:py-12 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Ready to grow affiliate revenue?
              </h3>
              <p className="mt-2 text-indigo-100">
                Try Convertly free and launch your first experiment today.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 flex gap-3">
              <Button className="bg-white text-slate-900 hover:bg-white/90">
                Start free
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                Talk to sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-600 to-violet-600 grid place-items-center text-white font-bold">
                C
              </div>
              <span className="text-lg font-semibold">Convertly</span>
            </Link>
            <p className="mt-4 text-sm text-slate-600 max-w-sm">
              Convertly helps affiliate marketers track, test, and optimize
              campaigns that turn clicks into customers.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="#features">Features</Link>
              </li>
              <li>
                <Link href="#offers">Top offers</Link>
              </li>
              <li>
                <Link href="#pricing">Pricing</Link>
              </li>
              <li>
                <Link href="#faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Docs</Link>
              </li>
              <li>
                <Link href="#">Guides</Link>
              </li>
              <li>
                <Link href="#">Status</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="#">Legal</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t pt-6">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Convertly, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Cookie settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Networks />
        <Features />
        <TopOffers />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
