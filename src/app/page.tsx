import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Shield,
  Clock,
  Wrench,
  Flame,
  AlertTriangle,
  Zap,
  Droplet,
  CheckCircle,
  HelpCircle,
  MapPin,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Layers,
  Thermometer,
  Settings,
  Info,
  Calendar,
  ExternalLink
} from "lucide-react";
import EmergencyBanner from "@/components/EmergencyBanner";
import CallerChecklist from "@/components/CallerChecklist";
import InternalLinkingSection from "@/components/InternalLinkingSection";
import {
  PHONE_NUMBER,
  FORMATTED_PHONE,
  SERVICES,
  LOCATIONS,
  FAQS,
  COLORADO_SPRINGS_NEIGHBORHOODS,
  MAP_LINK
} from "@/data/siteData";

export const metadata = {
  title: "Water Heater Repair Colorado Springs, CO",
  description: "Looking for water heater repair in Colorado Springs, CO? Explore repair, installation and maintenance options and request a local service estimate. Call (456) 789-0123.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const homeInternalLinks = [
    {
      href: "/water-heater-services",
      label: "Water Heater Services in Colorado Springs",
      description: "Explore our comprehensive directory of 15 specialized water heater repair, replacement, and maintenance solutions."
    },
    {
      href: "/emergency-water-heater-repair",
      label: "Emergency Water Heater Repair",
      description: "24/7 urgent dispatch for burst tanks, major leaks, and winter hot water emergencies."
    },
    {
      href: "/tankless-water-heater-repair",
      label: "Tankless Water Heater Repair",
      description: "Diagnostics, descaling, and high-altitude burner adjustments for Rinnai, Navien, and Noritz units."
    },
    {
      href: "/service-areas",
      label: "Service Areas Across El Paso County",
      description: "Detailed regional coverage maps covering Colorado Springs, Fountain, Manitou, and Monument."
    },
    {
      href: "/water-heater-faq",
      label: "Water Heater Repair FAQs",
      description: "Authoritative answers to 10 common homeowner questions regarding repair costs, noises, and pilot lights."
    }
  ];

  const homeExternalLink = {
    source: "Colorado Springs Utilities (CSU)",
    href: "https://www.csu.org/",
    label: "Colorado Springs Utilities Water & Gas Efficiency Guidelines",
    note: "Official municipal utility guidance on local water hardness, natural gas supply pressures, and residential rebates."
  };

  return (
    <div className="flex flex-col">
      {/* Top Emergency Flash Banner */}
      <EmergencyBanner />

      {/* Hero Section - DrainHaus Inspired Luxury Plumbing Styling */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-navy to-slate-900 text-white pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        {/* Subtle background glow effects */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-accent/15 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-600/15 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-orange-300 text-xs sm:text-sm font-bold">
                <Flame className="w-4 h-4 text-brand-accent animate-pulse" />
                <span>Pikes Peak Region&apos;s Dedicated Water Heater Hotline</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight tracking-tight">
                Water Heater Repair in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Colorado Springs, CO</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
                Waking up to freezing cold water, a hissing gas burner, or a flooded basement utility room? We connect homeowners across Colorado Springs, Fountain, and El Paso County with vetted local water heater technicians specialized in high-altitude combustion, mineral sediment flushes, and emergency repairs.
              </p>

              {/* Big Phone Action Box */}
              <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl max-w-xl">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase font-extrabold text-brand-yellow tracking-wider block">
                      Fast Phone-Only Dispatch
                    </span>
                    <span className="text-xs text-slate-300">
                      No slow web forms. Speak with a live technician:
                    </span>
                  </div>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-brand-accentHover text-white px-6 py-4 rounded-xl font-black text-lg shadow-xl shadow-orange-600/30 transition-all transform hover:scale-105"
                  >
                    <Phone className="w-6 h-6 animate-bounce" />
                    <span>{FORMATTED_PHONE}</span>
                  </a>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-[11px] text-slate-300">
                  <div className="flex items-center justify-center gap-1 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Vetted Pros
                  </div>
                  <div className="flex items-center justify-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-300" /> Same-Day Available
                  </div>
                  <div className="flex items-center justify-center gap-1 font-medium">
                    <Zap className="w-3.5 h-3.5 text-blue-300" /> Upfront Pricing
                  </div>
                </div>
              </div>

              {/* Verified Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-brand-accent" /> Gas & Electric Tank Systems
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-brand-accent" /> Tankless High-Efficiency
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-brand-accent" /> PPRBD Code Compliance
                </span>
              </div>
            </div>

            {/* Right Image 1 (Hero Portrait) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/15 bg-slate-800 aspect-[4/3]">
                  <Image
                    src="/images/img-6-technician-portrait.jpg"
                    alt="Licensed water heater repair technician in Colorado Springs"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent"></div>
                  
                  {/* Floating card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-200 text-slate-900">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                        <span className="text-xs font-black uppercase text-brand-navy">Dispatch Status</span>
                      </div>
                      <span className="text-[11px] font-bold text-slate-500">El Paso County, CO</span>
                    </div>
                    <p className="text-xs text-slate-700 mt-1 font-semibold">
                      Technicians available now for emergency leak isolation & no-hot-water service.
                    </p>
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -top-6 -left-6 bg-brand-accent text-white p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 border-2 border-white">
                  <Wrench className="w-8 h-8 text-white" />
                  <div>
                    <span className="text-xl font-black block leading-none">100%</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-100">Colorado Focused</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Primary Value Metrics Bar */}
      <section className="bg-slate-100 py-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-200">
              <span className="text-2xl sm:text-3xl font-black text-brand-dark block">6,035 ft</span>
              <span className="text-xs font-semibold text-slate-600">High Altitude Sizing</span>
            </div>
            <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-200">
              <span className="text-2xl sm:text-3xl font-black text-brand-accent block">24/7/365</span>
              <span className="text-xs font-semibold text-slate-600">Emergency Dispatch</span>
            </div>
            <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-200">
              <span className="text-2xl sm:text-3xl font-black text-brand-blue block">15+</span>
              <span className="text-xs font-semibold text-slate-600">Specialized Services</span>
            </div>
            <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-200">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600 block">PPRBD</span>
              <span className="text-xs font-semibold text-slate-600">Code Certified Pros</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Detailed Emergency Problem Analysis + Images 2 & 3 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-accent bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Recognizing Urgent Water Heater Failures
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mt-3">
              Common Water Heater Emergencies Facing Colorado Springs Homes
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              When a water heater fails in Colorado, it rarely happens at a convenient hour. Sub-freezing winter nights and harsh municipal water mineral content place exceptional strain on heating elements, thermostats, and internal glass tank linings. Recognizing early warning signs enables homeowners to request targeted repairs before minor faults trigger catastrophic water damage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Problem Card 1 */}
            <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-accent/40 shadow-sm hover:shadow-card transition-all">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-brand-accent flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Total Lack of Hot Water</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Turning on your morning faucet only to receive ice-cold water indicates an electrical breaker trip, a blown upper heating element, or a pilot light extinguished by high-altitude backdrafts. Gas units may also experience thermocouple failure or broken electronic spark igniters.
              </p>
              <Link href="/blog/why-water-heater-not-producing-hot-water" className="content-link text-xs">
                Read troubleshooting checklist &rarr;
              </Link>
            </div>

            {/* Problem Card 2 */}
            <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-accent/40 shadow-sm hover:shadow-card transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-brand-blue flex items-center justify-center mb-4">
                <Droplet className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Active Leaking & Pooling Water</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Water pooling around the base of the tank demands immediate investigation. While dripping temperature-and-pressure (T&P) relief valves or loose threaded fittings can be replaced quickly, water weeping from the internal steel tank seams indicates irreversible glass-lining failure.
              </p>
              <Link href="/water-heater-leak-repair" className="content-link text-xs">
                Inspect leak repair solutions &rarr;
              </Link>
            </div>

            {/* Problem Card 3 */}
            <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-accent/40 shadow-sm hover:shadow-card transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Loud Popping, Knocking & Rumbling</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Colorado Springs water sources carry dissolved calcium and magnesium. Over months, these minerals precipitate out, forming a dense calcified layer along the bottom of the tank. Trapped water boils under the crust, creating kettle-like popping and overheating the tank floor.
              </p>
              <Link href="/water-heater-flush" className="content-link text-xs">
                Explore sediment flush services &rarr;
              </Link>
            </div>

            {/* Problem Card 4 */}
            <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-accent/40 shadow-sm hover:shadow-card transition-all">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Pilot Outages & Gas Ignition Faults</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                High Front Range mountain gusts frequently create negative pressure zones in atmospheric chimney flues, blowing out standing pilot flames. Alternatively, soot buildup on the flame sensor or a degrading thermocouple will automatically shut off the safety gas valve.
              </p>
              <Link href="/gas-water-heater-repair" className="content-link text-xs">
                View gas water heater solutions &rarr;
              </Link>
            </div>

            {/* Problem Card 5 */}
            <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-accent/40 shadow-sm hover:shadow-card transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                <Thermometer className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Lukewarm or Rapidly Depleting Water</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                If your hot shower lasts only three minutes before turning lukewarm, the culprit is commonly a cracked plastic dip tube (which dumps incoming cold water at the top rather than the bottom) or a failed lower electrical heating element in dual-element models.
              </p>
              <Link href="/water-heater-thermostat-repair" className="content-link text-xs">
                Check thermostat calibration &rarr;
              </Link>
            </div>

            {/* Problem Card 6 */}
            <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-accent/40 shadow-sm hover:shadow-card transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Rusty, Discolored Water or Rotten Egg Odor</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Brownish or metallic-tasting hot water signifies internal tank corrosion, typically occurring after the protective sacrificial magnesium anode rod has completely dissolved. A sulfur or rotten egg smell indicates anaerobic bacteria reacting with magnesium ions.
              </p>
              <Link href="/water-heater-maintenance" className="content-link text-xs">
                Learn about anode rod replacements &rarr;
              </Link>
            </div>

          </div>

          {/* Home Section Images 2 & 3: Active Leaks & On-Site Service */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
              <Image
                src="/images/img-10-water-heater-leak.jpg"
                alt="Emergency water heater leaking water onto basement floor in Colorado Springs"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-black/40 px-2 py-0.5 rounded">Emergency Alert</span>
                <p className="text-sm font-bold mt-1">Active Tank Rupture & Bottom Drain Valve Leaks</p>
                <p className="text-xs text-slate-200">Shut off the cold intake valve and call our 24/7 hotline immediately.</p>
              </div>
            </div>

            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
              <Image
                src="/images/img-8-kneeling-plumber.jpg"
                alt="Local plumber servicing drain valve and flushing sediment on Colorado Springs water heater"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 bg-black/40 px-2 py-0.5 rounded">Precision Service</span>
                <p className="text-sm font-bold mt-1">On-Site Drain Flushing & Component Replacement</p>
                <p className="text-xs text-slate-200">Vetted local technicians equipped with commercial-grade replacement parts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Colorado Springs Water Heaters Are Unique + Image 4 */}
      <section className="py-16 bg-brand-slate border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Pikes Peak Regional Environmental Factors
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark">
                Why Water Heaters in Colorado Springs Require Specialized High-Altitude Care
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Operating a water heater at 6,035 feet above sea level is fundamentally different than at sea level. With atmospheric pressure roughly 20% lower than coastal regions, natural gas combustion dynamics change dramatically. Gas water heaters installed in Colorado Springs, Manitou Springs, and Monument require precision burner orifice derating and combustion chamber air-volume calibration to ensure full fuel burning without generating dangerous carbon monoxide (CO) or soot.
                </p>
                <p>
                  Furthermore, Colorado Springs municipal water sourced from Continental Divide snowmelt and local Pikes Peak reservoirs carries a complex mineral profile. While remarkably crisp to drink, dissolved calcium and silica aggressively attack traditional copper heating elements and accelerate internal tank scale accumulation. Without annual power flushing and active sacrificial anode rod monitoring, water heaters in El Paso County frequently fail within 7 to 9 years, well below the national 12-year average.
                </p>
                <p>
                  During Front Range winter cold snaps, incoming groundwater temperatures frequently plummet to 38°F–42°F. This creates an extreme 80°F temperature delta to reach a safe 120°F domestic hot water output, forcing burners and electrical elements to cycle under maximum thermal stress.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-white px-6 py-3.5 rounded-xl font-bold shadow-md transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call Our Altitude Specialists: {FORMATTED_PHONE}
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              {/* Home Page Image 4: Technician and Homeowner Consultation */}
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-card border-2 border-slate-200">
                <Image
                  src="/images/img-11-technician-homeowner.jpg"
                  alt="Colorado Springs homeowner reviewing water heater condition with local technician"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-black/40 px-2 py-0.5 rounded">Honest Diagnosis</span>
                  <p className="text-xs sm:text-sm font-bold mt-0.5">Transparent In-Person Estimates & PPRBD Safety Compliance</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
                <h3 className="text-base font-extrabold text-brand-dark flex items-center gap-2">
                  <Shield className="w-4 h-4 text-brand-accent" />
                  Altitude Derating & Safety Verification
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All dispatched technicians test gas manifold pressures, verify positive chimney drafts against Pikes Peak mountain winds, and ensure thermal expansion tanks protect your closed plumbing loop.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Comprehensive 15-Service Directory (Silo Architecture) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Complete Repair Silo
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mt-3">
              Full Spectrum Water Heater Services in Colorado Springs
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              From routine preventative flushing to emergency midnight burner swaps, explore our comprehensive range of specialized water heating services:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv) => (
              <div
                key={srv.slug}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-blue shadow-sm hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center font-bold">
                      <Wrench className="w-5 h-5" />
                    </div>
                    {srv.popular && (
                      <span className="text-[10px] bg-brand-accent/10 text-brand-accent font-black uppercase px-2 py-0.5 rounded-full">
                        High Demand
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">
                    <Link href={`/${srv.slug}`} className="hover:text-brand-accent transition-colors">
                      {srv.name}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/${srv.slug}`}
                    className="content-link text-xs font-bold"
                  >
                    <span>Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="text-xs font-extrabold text-brand-accent hover:text-brand-accentHover flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" /> Call
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/water-heater-services"
              className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-navy text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all"
            >
              <span>Explore All Service Silos & Engineering Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Tank vs Tankless In-Depth Technical Comparison */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-brand-yellow bg-white/10 px-3 py-1 rounded-full border border-white/15">
              Engineering Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-3">
              Standard Tank vs. High-Efficiency Tankless: Which Fits Colorado Springs Best?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              Choosing between a traditional atmospheric storage tank and an advanced on-demand tankless water heater requires evaluating Colorado Springs winter inlet water temperatures, peak household demand, and electrical or gas supply infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Storage Tank Column */}
            <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">Standard Storage Tank Systems</h3>
                    <span className="text-xs text-slate-400">40 to 75 Gallon Natural Gas or Electric</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded-full">
                  Lower Upfront Cost
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>How it works:</strong> Continuously heats and maintains a reservoir of water at 120°F to 140°F. When hot water is tapped, cold water enters the tank bottom via a dip tube to be reheated.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span><strong>Lower Initial Investment:</strong> Easiest drop-in replacement with existing plumbing and 3-inch or 4-inch B-vent chimney flues.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span><strong>High Simultaneous Flow:</strong> Can supply multiple showers simultaneously without immediate temperature drops until the reservoir depletes.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">⚠</span>
                    <span><strong>Standby Heat Loss:</strong> Consumes fuel 24/7 keeping reserve water warm, even when you are away from home.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">⚠</span>
                    <span><strong>Finite Capacity:</strong> Once 50 gallons are exhausted, recovery takes 30 to 50 minutes.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700">
                <Link
                  href="/water-heater-replacement"
                  className="content-link text-xs text-brand-yellow hover:text-white"
                >
                  Explore storage tank replacement options &rarr;
                </Link>
              </div>
            </div>

            {/* Tankless Column */}
            <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-brand-accent flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">On-Demand Tankless Systems</h3>
                    <span className="text-xs text-slate-400">Condensing Gas Units (Rinnai, Navien)</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-orange-400 bg-orange-950/60 border border-orange-800 px-2.5 py-1 rounded-full">
                  Maximum Efficiency
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>How it works:</strong> Cold water flows across a copper/stainless steel heat exchanger ignited by high-output modulating gas burners (up to 199,000 BTU) only when a hot faucet opens.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span><strong>Endless Hot Water:</strong> Continuous flow that never runs out during consecutive showers, laundry, or dishwashing.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span><strong>Up to 34% Energy Savings:</strong> Zero standby heat losses; qualifies for Federal Inflation Reduction Act tax credits and CSU rebates.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span><strong>Compact Footprint:</strong> Wall-mounted design frees up valuable square footage in basements or utility closets.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">⚠</span>
                    <span><strong>Installation Considerations:</strong> May require upgrading gas supply lines from 1/2-inch to 3/4-inch and dedicated concentric PVC/polypropylene venting.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700">
                <Link
                  href="/tankless-water-heater-installation"
                  className="content-link text-xs text-brand-yellow hover:text-white"
                >
                  Learn about tankless installation in Colorado Springs &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 5: Caller Checklist & Phone-Only Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-accent bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Streamlined Phone Dispatch
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mt-3">
              How Our Referral & Connection Service Works
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              We operate exclusively by phone to eliminate the frustrating delays of automated quote forms, unanswered emails, and chatbot dead-ends when your hot water is down:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative text-center">
              <div className="w-12 h-12 rounded-full bg-brand-dark text-white font-black text-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Direct Phone Call</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dial <strong className="text-slate-900">{FORMATTED_PHONE}</strong>. You connect immediately with a knowledgeable dispatch operator who reviews your water heater symptoms, brand, and neighborhood.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative text-center">
              <div className="w-12 h-12 rounded-full bg-brand-accent text-white font-black text-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Technician Routing</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We locate the nearest certified, insured water heater specialist actively on duty in your Colorado Springs or El Paso County sector with the proper parts in stock.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative text-center">
              <div className="w-12 h-12 rounded-full bg-brand-blue text-white font-black text-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">On-Site Estimate & Repair</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The technician inspects your unit, provides a clear, transparent upfront estimate, and proceeds with the repair or replacement upon your explicit approval.
              </p>
            </div>
          </div>

          {/* Embed Caller Checklist */}
          <CallerChecklist />
        </div>
      </section>

      {/* Section 6: Regional Service Area & Neighborhood Coverage */}
      <section className="py-16 bg-brand-slate border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Regional Dispatch Radius
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mt-3">
              Serving Colorado Springs & Communities Within 20 Miles
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              We provide rapid dispatch coverage across all central Colorado Springs residential sectors, military base corridors, and neighboring municipal jurisdictions:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* 5 Location Sub-Pages Cards */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-lg font-extrabold text-brand-dark flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-accent" />
                Featured Surrounding Markets (Within 20 Miles)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {LOCATIONS.map((loc) => (
                  <div
                    key={loc.slug}
                    className="p-5 bg-white rounded-xl border border-slate-200 hover:border-brand-accent/50 shadow-sm transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-extrabold text-brand-dark text-base">
                        <Link href={`/locations/${loc.slug}`} className="hover:text-brand-accent transition-colors">
                          {loc.name}
                        </Link>
                      </h4>
                      <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {loc.altitude}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                      {loc.shortDesc}
                    </p>
                    <div className="text-[11px] text-slate-500 mb-3">
                      <strong>Coverage:</strong> ZIP {loc.zipCodes.join(", ")} • {loc.distance}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-bold">
                      <Link href={`/locations/${loc.slug}`} className="content-link">
                        <span>View Location Hub</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                      <a href={`tel:${PHONE_NUMBER}`} className="text-brand-accent">
                        Call Dispatch
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* City Residential ZIPs & Neighborhoods */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-extrabold text-brand-dark pb-2 border-b border-slate-100 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-blue" />
                Colorado Springs Neighborhood & ZIP Coverage
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct dispatch is available across all primary residential ZIP codes: <strong>80903, 80904, 80905, 80906, 80907, 80909, 80910, 80911, 80915, 80916, 80917, 80918, 80919, 80920, 80921, 80922, 80923, 80924, 80925, 80927</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {COLORADO_SPRINGS_NEIGHBORHOODS.map((nb, i) => (
                  <div key={i} className="p-2 bg-slate-50 rounded border border-slate-100 font-medium text-slate-700 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                    <span>{nb}</span>
                  </div>
                ))}
              </div>
              <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 text-xs text-slate-700">
                <strong>Need Immediate Service?</strong> Average technician arrival times range between 35 and 60 minutes depending on I-25 and Powers Blvd traffic. Call <strong className="text-brand-blue">{FORMATTED_PHONE}</strong> now.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 7: 10 Comprehensive FAQs with Schema Accordions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-brand-accent bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Clear Answers For Homeowners
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-dark mt-3">
              Frequently Asked Water Heater Questions in Colorado Springs
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              Find transparent, technically accurate answers to common water heater performance, safety, and replacement questions:
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-50 rounded-2xl border border-slate-200 p-5 open:bg-white open:shadow-md transition-all duration-200"
              >
                <summary className="flex items-center justify-between font-extrabold text-brand-dark text-base cursor-pointer list-none select-none">
                  <span className="pr-4 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-accent/15 text-brand-accent text-xs flex items-center justify-center shrink-0 font-bold">
                      Q{index + 1}
                    </span>
                    {faq.q}
                  </span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 shrink-0">
                    ▼
                  </span>
                </summary>
                <div className="pt-4 mt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/water-heater-faq"
              className="content-link text-sm font-bold"
            >
              <span>Visit our full FAQ directory with troubleshooting guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: Mandatory 5 Internal Links + 1 External Authoritative Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InternalLinkingSection
          title="Related Colorado Springs Water Heater Resources"
          internalLinks={homeInternalLinks}
          externalLink={homeExternalLink}
        />
      </div>

      {/* Section 9: Final Conversion CTA Banner */}
      <section className="bg-gradient-to-r from-brand-dark via-brand-navy to-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" /> 24-Hour Emergency Response
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Ready to Restore Your Home&apos;s Hot Water Today?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t endure another cold shower or risk catastrophic basement water damage. Speak directly with a local Colorado Springs water heater technician now.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-brand-accentHover text-white px-8 py-4 rounded-xl font-black text-lg sm:text-xl shadow-2xl shadow-orange-500/30 transition-transform hover:scale-105"
            >
              <Phone className="w-6 h-6 animate-bounce" />
              <span>Call Dispatch: {FORMATTED_PHONE}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-4 rounded-xl font-bold text-base border border-slate-700 transition-colors"
            >
              <span>View Coverage & Dispatch Map</span>
              <MapPin className="w-4 h-4 text-brand-accent" />
            </Link>
          </div>
          <p className="text-xs text-slate-400">
            Available 24/7 across Colorado Springs, Fountain, Security-Widefield, Manitou Springs, and Monument.
          </p>
        </div>
      </section>

    </div>
  );
}
