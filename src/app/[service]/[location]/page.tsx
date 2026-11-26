import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Wrench,
  MapPin,
  Phone,
  ShieldCheck,
  Clock,
  AlertTriangle,
  Flame,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  Droplet
} from "lucide-react";
import CallerChecklist from "../../../components/CallerChecklist";
import InternalLinkingSection from "../../../components/InternalLinkingSection";
import { SERVICES_DETAILED } from "../../../data/servicesData";
import { LOCATIONS_DETAILED } from "../../../data/locationsData";
import { PHONE_NUMBER, FORMATTED_PHONE, SERVICES, LOCATIONS } from "../../../data/siteData";
import { getServiceLocationImages } from "../../../lib/pageImages";

interface Props {
  params: {
    service: string;
    location: string;
  };
}

export async function generateStaticParams() {
  const serviceSlugs = Object.keys(SERVICES_DETAILED);
  const locationSlugs = Object.keys(LOCATIONS_DETAILED);
  const params: { service: string; location: string }[] = [];

  for (const s of serviceSlugs) {
    for (const l of locationSlugs) {
      params.push({ service: s, location: l });
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES_DETAILED[params.service];
  const loc = LOCATIONS_DETAILED[params.location];

  if (!service || !loc) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} in ${loc.name}`,
    description: `Need ${service.name.toLowerCase()} in ${loc.name}? Learn about common problems, local water considerations, and request an estimate. Call (456) 789-0123.`,
    alternates: {
      canonical: `/${service.slug}/${loc.slug}`,
    },
  };
}

export default function ServiceLocationPage({ params }: Props) {
  const service = SERVICES_DETAILED[params.service];
  const loc = LOCATIONS_DETAILED[params.location];

  if (!service || !loc) {
    notFound();
  }

  const pageImages = getServiceLocationImages(service.slug, loc.name);

  const internalLinks = [
    {
      href: `/${service.slug}`,
      label: `${service.name} in Colorado Springs (Parent Hub)`,
      description: `Comprehensive technical details and primary city repair information for ${service.name}.`
    },
    {
      href: `/locations/${loc.slug}`,
      label: `All Water Heater Services in ${loc.name}`,
      description: `Explore full municipal coverage, water hardness profiles, and dispatch details for ${loc.city}.`
    },
    {
      href: "/water-heater-services",
      label: "Water Heater Services Directory",
      description: "Browse all 15 specialized repair, replacement, and tankless installation silos."
    },
    {
      href: "/service-areas",
      label: "El Paso County Regional Service Areas",
      description: "View coverage across Fountain, Security-Widefield, Manitou Springs, Monument, and Colorado Springs."
    },
    {
      href: "/water-heater-faq",
      label: "Water Heater Repair FAQs",
      description: "Answers to common homeowner questions regarding repair costs, noise causes, and safety relief valves."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header / Hero */}
      <section className="bg-gradient-to-br from-brand-dark via-brand-navy to-slate-900 text-white py-14 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            
            <nav className="flex items-center gap-2 text-xs text-slate-300 mb-2">
              <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
              <span>/</span>
              <Link href={`/${service.slug}`} className="hover:text-brand-accent transition-colors">{service.name}</Link>
              <span>/</span>
              <span className="text-brand-yellow font-medium">{loc.name}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" /> Local Service Dispatch
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              {service.name} in {loc.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Professional, code-compliant {service.name.toLowerCase()} tailored to {loc.city}&apos;s {loc.altitude} elevation, water hardness characteristics, and residential plumbing layouts.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-brand-accentHover text-white px-7 py-4 rounded-xl font-black text-lg shadow-xl shadow-orange-600/30 transition-transform hover:scale-105"
              >
                <Phone className="w-5 h-5 animate-bounce" />
                <span>Call {loc.city} Hotline: {FORMATTED_PHONE}</span>
              </a>
              <div className="text-xs text-slate-300 space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-emerald-400">
                  <Clock className="w-3.5 h-3.5" /> Fast Dispatch in ZIP {loc.zipCodes.join(", ")}
                </div>
                <div>Elevation: {loc.altitude} • PPRBD Compliant</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main 2000-Word Content Body */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section 1: Localized Intro */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Expert {service.name} Serving Homeowners in {loc.name}
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {service.overview} When performed in {loc.city}, this service is adapted to address localized environmental demands including {loc.altitude} atmospheric air density and regional mineral content from local watersheds.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              {loc.communityContext}
            </p>

            {pageImages[0] && (
              <div className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                <div className="relative h-64 sm:h-80 w-full">
                  <Image
                    src={pageImages[0].src}
                    alt={pageImages[0].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-xs text-slate-600 bg-white border-t border-slate-100 flex items-center justify-between">
                  <span>{pageImages[0].caption}</span>
                  <span className="text-[11px] font-semibold text-brand-blue bg-blue-50 px-2 py-0.5 rounded">{loc.city} Local Specialist</span>
                </div>
              </div>
            )}
          </div>

          {/* Section 2: Symptoms & Warning Signs */}
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Warning Indicators in {loc.city}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Recognizing When Your Water Heater Needs {service.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.symptoms.map((sym, idx) => (
                <div key={idx} className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 text-sm">
                    <span className="w-6 h-6 rounded-full bg-brand-accent/15 text-brand-accent text-xs flex items-center justify-center font-black shrink-0">
                      {idx + 1}
                    </span>
                    <span>{sym.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-8">
                    {sym.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Local Water Chemistry & High Altitude */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="text-lg font-extrabold text-brand-dark flex items-center gap-2">
                <Droplet className="w-5 h-5 text-brand-blue" />
                Water Chemistry in {loc.city}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {loc.waterProfile}
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="text-lg font-extrabold text-brand-dark flex items-center gap-2">
                <Flame className="w-5 h-5 text-brand-accent" />
                Combustion at {loc.altitude}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {loc.altitudeVenting}
              </p>
            </div>
          </div>

          {/* Section 4: Diagnostics & Root Causes */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Diagnostic Testing & Mechanical Inspection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.diagnosticCauses.map((diag, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-brand-blue" />
                    {diag.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {diag.desc}
                  </p>
                </div>
              ))}
            </div>

            {pageImages[1] && (
              <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                <div className="relative h-64 sm:h-72 w-full">
                  <Image
                    src={pageImages[1].src}
                    alt={pageImages[1].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-xs text-slate-600 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span>{pageImages[1].caption}</span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">{loc.city} Testing</span>
                </div>
              </div>
            )}
          </div>

          {/* Section 5: Repair vs Replacement Decision */}
          <div className="p-6 bg-blue-50/60 rounded-2xl border border-blue-100 text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
            <h3 className="text-xl font-extrabold text-brand-dark">
              Repair Options vs. Replacement Guidance for {loc.city}
            </h3>
            <p>{service.repairOptions}</p>
            <p>
              In {loc.name}, our network technicians assess age, tank condition, and repair history to ensure you never waste money repairing a tank that is nearing the end of its useful lifespan.
            </p>
          </div>

          {/* Section 6: Local Service Process & Safety */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="text-xl font-extrabold text-brand-dark flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Service Safety & Code Standards in {loc.name}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {loc.repairProcess} {service.safetyAndProcess}
            </p>

            {pageImages[2] && (
              <div className="mt-6 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                <div className="relative h-56 sm:h-64 w-full">
                  <Image
                    src={pageImages[2].src}
                    alt={pageImages[2].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                  />
                </div>
                <div className="p-2.5 text-xs text-slate-600 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span>{pageImages[2].caption}</span>
                  <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">{loc.city} Compliance</span>
                </div>
              </div>
            )}
          </div>

          {/* Section 7: Honest Cost Factors */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Factors Determining Cost for {service.name} in {loc.city}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Contractor estimates in {loc.name} are calculated based on transparent physical parameters rather than arbitrary fixed prices:
            </p>
            <ul className="space-y-2">
              {service.costFactors.concat(loc.costFactors.slice(0, 2)).map((cf, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                  <span>{cf}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Caller Checklist */}
          <CallerChecklist />

          {/* Section 8: Local & Service FAQs */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-4">
              Frequently Asked Questions: {service.name} in {loc.name}
            </h2>
            <div className="space-y-3">
              {service.faqs.concat(loc.faqs.slice(0, 2)).map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-slate-50 rounded-xl border border-slate-200 p-4 open:bg-white open:shadow-sm"
                >
                  <summary className="font-bold text-slate-900 text-sm cursor-pointer list-none flex justify-between items-center">
                    <span>{faq.q}</span>
                    <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="pt-3 mt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Mandatory Internal & External Linking Module */}
          <InternalLinkingSection
            title={`Related Resources for ${service.name} in ${loc.name}`}
            internalLinks={internalLinks}
            externalLink={service.externalLink}
          />

          {/* Bottom Conversion CTA */}
          <div className="bg-gradient-to-r from-brand-dark to-brand-navy text-white rounded-2xl p-8 text-center space-y-4 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-black">
              Need Prompt {service.name} in {loc.name}?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Call our direct dispatch line to speak with a specialist and schedule a qualified local technician today.
            </p>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-white px-7 py-3.5 rounded-xl font-black text-base shadow-lg transition-transform hover:scale-105"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              Call {loc.city} Hotline: {FORMATTED_PHONE}
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
