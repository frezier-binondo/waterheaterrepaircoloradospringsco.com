import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Wrench,
  Flame,
  Zap,
  Droplet,
  ShieldCheck,
  Phone,
  ArrowRight,
  Clock,
  Layers,
  Sparkles,
  HelpCircle,
  AlertTriangle,
  RefreshCw,
  Waves,
  Thermometer,
  Gauge,
  SunMedium
} from "lucide-react";
import CallerChecklist from "@/components/CallerChecklist";
import InternalLinkingSection from "@/components/InternalLinkingSection";
import { PHONE_NUMBER, FORMATTED_PHONE, SERVICES, LOCATIONS } from "@/data/siteData";

export const metadata = {
  title: "Water Heater Services Colorado Springs, CO",
  description: "Explore water heater repair, replacement, installation and maintenance in Colorado Springs, CO. Find the service you need and request an estimate. Call (456) 789-0123.",
  alternates: {
    canonical: "/water-heater-services",
  },
};

export default function ServicesHubPage() {
  const hubInternalLinks = [
    {
      href: "/water-heater-repair",
      label: "Water Heater Repair in Colorado Springs",
      description: "Fast diagnostic troubleshooting for gas and electric tank systems across central metro neighborhoods."
    },
    {
      href: "/emergency-water-heater-repair",
      label: "Emergency 24/7 Water Heater Repair",
      description: "Priority dispatch for active flooding, burst tanks, gas odors, and sub-zero winter outages."
    },
    {
      href: "/tankless-water-heater-installation",
      label: "Tankless Water Heater Installation",
      description: "Continuous hot water solutions engineered for 6,000+ ft altitude and 40°F winter inlet water."
    },
    {
      href: "/service-areas",
      label: "Pikes Peak Regional Service Areas",
      description: "Review dispatch boundaries covering Colorado Springs, Fountain, Manitou Springs, and Monument."
    },
    {
      href: "/water-heater-faq",
      label: "Water Heater Frequently Asked Questions",
      description: "Answers to 10 top homeowner questions about costs, pilot lights, sediment flushing, and permits."
    }
  ];

  const hubExternalLink = {
    source: "U.S. Department of Energy (DOE Energy Saver)",
    href: "https://www.energy.gov/energysaver/water-heating",
    label: "DOE Energy Saver Water Heating Guide",
    note: "Official federal resource on water heating equipment types, energy-efficiency ratings (UEF), and lifecycle operation."
  };

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-brand-dark via-brand-navy to-slate-900 text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5" /> Specialized Plumbing Silo
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Water Heater Services in Colorado Springs, CO
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Explore professional water heater repair, replacement, turnkey installation, and preventative descaling maintenance tailored to high Front Range elevations. Connect with certified local technicians ready for immediate phone dispatch.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-white px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-orange-500/20 transition-all"
              >
                <Phone className="w-4 h-4 animate-bounce" />
                Call Dispatch: {FORMATTED_PHONE}
              </a>
              <span className="text-xs text-slate-300 font-semibold flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-400" /> Same-Day Service Available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section - 1000+ words */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Detailed Intro */}
          <div className="max-w-4xl mx-auto space-y-6 text-slate-700 leading-relaxed mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Comprehensive Water Heating Solutions for Pikes Peak Homeowners
            </h2>
            <p className="text-sm sm:text-base">
              Water heaters are under round-the-clock mechanical pressure. In Colorado Springs, that strain is intensified by elevation (6,035 feet above sea level), mineral-heavy water runoff from the Rampart Range, and freezing winter temperatures that chill incoming groundwater to near-freezing levels. Whether your system is an atmospheric natural gas tank, a 240V dual-element electric system, or an advanced wall-hung condensing tankless unit, choosing the right specialized service ensures safety, energy efficiency, and uninterrupted comfort.
            </p>
            <p className="text-sm sm:text-base">
              Our service directory below organizes all 15 core water heating solutions. Each sub-page provides deep technical specifications, diagnostic warning signs, repair versus replacement criteria, and safety procedures compliant with the Pikes Peak Regional Building Department (PPRBD) and Colorado Springs Utilities (CSU).
            </p>

            {/* 3-Image Showcase for Services Hub */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                <div className="relative h-56 w-full">
                  <Image
                    src="/images/img-6-technician-portrait.jpg"
                    alt="Certified water heater technician ready for Colorado Springs dispatch"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-xs text-slate-700 font-semibold bg-white border-t border-slate-100 flex items-center justify-between">
                  <span>Certified Local Plumbers</span>
                  <span className="text-[10px] text-brand-blue bg-blue-50 px-2 py-0.5 rounded font-bold">24/7 Dispatch</span>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                <div className="relative h-56 w-full">
                  <Image
                    src="/images/img-5-top-fittings-repair.jpg"
                    alt="Water heater copper piping and valve connection fitting"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-xs text-slate-700 font-semibold bg-white border-t border-slate-100 flex items-center justify-between">
                  <span>PPRBD Code Permitted</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">Code Standard</span>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                <div className="relative h-56 w-full">
                  <Image
                    src="/images/img-2-tankless-repair.jpg"
                    alt="Tankless and conventional water heater diagnostic servicing"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-xs text-slate-700 font-semibold bg-white border-t border-slate-100 flex items-center justify-between">
                  <span>Diagnostic Testing</span>
                  <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-bold">Tank & Tankless</span>
                </div>
              </div>
            </div>
          </div>

          {/* All 15 Services Detailed Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {SERVICES.map((s) => (
              <div
                key={s.slug}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-blue shadow-sm hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-100 text-brand-blue flex items-center justify-center font-bold">
                      <Wrench className="w-5 h-5" />
                    </div>
                    {s.popular && (
                      <span className="text-[10px] font-black uppercase tracking-wider bg-orange-100 text-brand-accent px-2.5 py-1 rounded-full">
                        Priority Need
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">
                    <Link href={`/${s.slug}`} className="hover:text-brand-accent transition-colors">
                      {s.name}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {s.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    href={`/${s.slug}`}
                    className="content-link text-xs font-bold"
                  >
                    <span>Read Service Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="text-xs font-black text-brand-accent hover:text-brand-accentHover flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" /> Call
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Educational Comparison: Tank vs Tankless & Repair vs Replace */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-16">
            <div className="bg-brand-slate p-8 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-xl font-extrabold text-brand-dark flex items-center gap-2">
                <Layers className="w-5 h-5 text-brand-accent" />
                Storage Tank vs. Tankless: Sizing Considerations
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Standard tank water heaters maintain 40 to 75 gallons of reserve water heated continuously. They feature lower initial equipment purchase costs and deliver high simultaneous flow rates for busy families. However, standby heat losses and finite hot water capacity mean long recovery intervals between back-to-back showers.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tankless systems heat water on demand using high-output modulating gas burners (up to 199,000 BTU) or electronic heating matrices. While initial installation requires careful gas line sizing and dedicated direct-venting, tankless units deliver continuous, endless hot water, free up floor space, and save up to 30% on monthly natural gas bills.
              </p>
              <div className="pt-2">
                <Link href="/tankless-water-heater-repair" className="content-link text-xs">
                  Review tankless repair & maintenance protocols &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-brand-slate p-8 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-xl font-extrabold text-brand-dark flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-brand-blue" />
                The Repair vs. Replacement Decision Guide
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Homeowners often struggle when deciding whether to repair an older water heater or invest in a new replacement. We recommend applying the industry-standard <strong>50% Rule</strong>: if your water heater is under 8 years old and the estimate is less than 50% of replacement cost, repair is recommended.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                If the tank is 10 years or older, suffers from rusted fittings, or has a leaking internal glass vessel, replacement is strongly advised. Modern ENERGY STAR® certified models feature superior foam insulation, micro-processor gas controls, and lower operating costs that pay for themselves over time.
              </p>
              <div className="pt-2">
                <Link href="/water-heater-replacement" className="content-link text-xs">
                  Learn about high-efficiency replacement models &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Caller Checklist Component */}
          <CallerChecklist />

          {/* Mandatory Internal Linking Module */}
          <InternalLinkingSection
            title="Explore Related Services, Coverage Areas & Official Codes"
            internalLinks={hubInternalLinks}
            externalLink={hubExternalLink}
          />

        </div>
      </section>

      {/* Conversion Banner */}
      <section className="bg-brand-dark text-white py-12 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">
            Not Sure Which Water Heater Service You Need?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Give our dispatch desk a call. Describe your symptoms, and we will match you with the right specialist equipped for your exact system.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-3 bg-brand-accent hover:bg-brand-accentHover text-white px-8 py-3.5 rounded-xl font-black text-lg shadow-xl shadow-orange-600/30 transition-transform hover:scale-105"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>Call For An Estimate: {FORMATTED_PHONE}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
