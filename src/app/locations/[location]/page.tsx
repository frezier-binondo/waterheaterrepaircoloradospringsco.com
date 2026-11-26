import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  MapPin,
  Phone,
  ShieldCheck,
  Clock,
  Wrench,
  AlertTriangle,
  Flame,
  Zap,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  Droplet,
  Compass
} from "lucide-react";
import CallerChecklist from "@/components/CallerChecklist";
import InternalLinkingSection from "@/components/InternalLinkingSection";
import { LOCATIONS_DETAILED } from "@/data/locationsData";
import { PHONE_NUMBER, FORMATTED_PHONE, SERVICES, LOCATIONS } from "@/data/siteData";
import { getLocationImages } from "@/lib/pageImages";

interface Props {
  params: {
    location: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(LOCATIONS_DETAILED).map((slug) => ({
    location: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const loc = LOCATIONS_DETAILED[params.location];
  if (!loc) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: {
      canonical: `/locations/${loc.slug}`,
    },
  };
}

export default function LocationDetailPage({ params }: Props) {
  const loc = LOCATIONS_DETAILED[params.location];

  if (!loc) {
    notFound();
  }

  const locImages = getLocationImages(loc.slug, loc.name);

  // 5 distinct internal links for this location
  const otherLocations = LOCATIONS.filter((l) => l.slug !== loc.slug);
  const nextLoc = otherLocations[0];

  const internalLinks = [
    {
      href: "/",
      label: "Water Heater Repair Colorado Springs (Home)",
      description: "Return to our primary central dispatch hub for Pikes Peak regional emergency service."
    },
    {
      href: "/water-heater-services",
      label: "All 15 Water Heater Services Directory",
      description: "Explore repair, replacement, tankless installation, and maintenance silos."
    },
    {
      href: "/water-heater-repair",
      label: `Water Heater Repair in ${loc.city}`,
      description: `Complete diagnostic repair options for gas and electric water heaters in ${loc.name}.`
    },
    {
      href: `/locations/${nextLoc.slug}`,
      label: `Water Heater Services in ${nextLoc.name}`,
      description: `Nearby service coverage, local altitude considerations, and dispatch availability in ${nextLoc.name}.`
    },
    {
      href: "/water-heater-faq",
      label: "Water Heater Repair Frequently Asked Questions",
      description: "Authoritative answers regarding water heater repair costs, pilot outage remedies, and permits."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark via-brand-navy to-slate-900 text-white py-14 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            
            <nav className="flex items-center gap-2 text-xs text-slate-300 mb-2">
              <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
              <span>/</span>
              <Link href="/service-areas" className="hover:text-brand-accent transition-colors">Service Areas</Link>
              <span>/</span>
              <span className="text-brand-yellow font-medium">{loc.name}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" /> Regional Market Coverage
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              {loc.heroHeading}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              {loc.heroSubtitle}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-brand-accentHover text-white px-7 py-4 rounded-xl font-black text-lg shadow-xl shadow-orange-600/30 transition-transform hover:scale-105"
              >
                <Phone className="w-5 h-5 animate-bounce" />
                <span>Call {loc.city} Dispatch: {FORMATTED_PHONE}</span>
              </a>
              <div className="text-xs text-slate-300 space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-emerald-400">
                  <Clock className="w-3.5 h-3.5" /> Serving ZIP: {loc.zipCodes.join(", ")}
                </div>
                <div>Elevation: {loc.altitude} • {loc.distance}</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main 2,000-Word Locally Grounded Content Body */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section 1: Community Profile & Local Intent */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Local Plumbing Context & Water Heater Care in {loc.name}
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {loc.communityContext}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Water heaters installed in {loc.name} do not operate in a vacuum. Regional elevation, local water utility infrastructure, atmospheric air density, and seasonal Front Range weather patterns all directly influence how water heaters perform and how quickly components degrade. Our referral network connects you with licensed, independent technicians who understand these exact localized dynamics.
            </p>

            {locImages[0] && (
              <div className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                <div className="relative h-64 sm:h-80 w-full">
                  <Image
                    src={locImages[0].src}
                    alt={locImages[0].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-xs text-slate-600 bg-white border-t border-slate-100 flex items-center justify-between">
                  <span>{locImages[0].caption}</span>
                  <span className="text-[11px] font-semibold text-brand-blue bg-blue-50 px-2 py-0.5 rounded">{loc.city} Field Service</span>
                </div>
              </div>
            )}
          </div>

          {/* Section 2: Water Profile & Hardness Analysis */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
            <div className="flex items-center gap-2">
              <Droplet className="w-5 h-5 text-brand-blue" />
              <h3 className="text-xl font-extrabold text-brand-dark">
                Local Water Chemistry & Mineral Hardness in {loc.name}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {loc.waterProfile}
            </p>
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
              <strong>Local Recommendation:</strong> Because of the mineral characteristics in {loc.city}, routine annual tank flushing and sacrificial anode rod inspections every 3 years are essential to prevent premature tank rupture and maintain manufacturer warranty protection.
            </div>
          </div>

          {/* Section 3: High Altitude Combustion & Flue Venting */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-brand-accent" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
                High-Altitude Combustion & Venting at {loc.altitude}
              </h2>
            </div>
            <p className="text-base text-slate-700 leading-relaxed">
              {loc.altitudeVenting}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Under Pikes Peak Regional Building Department (PPRBD) guidelines, all fuel-burning appliances installed above 5,000 feet must be derated unless the manufacturer certifies operation at elevated elevations. Our network technicians carry digital manometers and draft gauges to calibrate gas manifold pressures, verify positive chimney drafts, and test for ambient carbon monoxide.
            </p>
          </div>

          {/* Section 4: Housing Stock & Mechanical Room Layouts */}
          <div className="bg-blue-50/50 p-6 sm:p-8 rounded-2xl border border-blue-100 space-y-4">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-brand-blue" />
              <h3 className="text-xl font-extrabold text-brand-dark">
                Housing Styles & Installation Configurations in {loc.city}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {loc.housingStock}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Whether your water heater is housed in a tight finished basement alcove, an unheated garage requiring freeze-protection insulation, or an exterior utility shed, dispatched contractors carry the proper dollies, pipe fittings, and code-approved materials to complete the job cleanly.
            </p>

            {locImages[1] && (
              <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                <div className="relative h-64 sm:h-72 w-full">
                  <Image
                    src={locImages[1].src}
                    alt={locImages[1].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-xs text-slate-600 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span>{locImages[1].caption}</span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">{loc.city} Standards</span>
                </div>
              </div>
            )}
          </div>

          {/* Section 5: Common Problems in this Area */}
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Localized Failure Modes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Frequent Water Heater Issues Diagnosed in {loc.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {loc.commonProblems.map((prob, idx) => (
                <div key={idx} className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2">
                    <AlertTriangle className="w-4 h-4 text-brand-accent" />
                    <span>{prob.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {prob.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Repair vs Replace Guidelines */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Repair Options & Replacement Decision Criteria for {loc.city}
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              When a water heater malfunctions in {loc.city}, homeowners must weigh the cost of immediate component repair against a complete system replacement. If your unit is under 8 years of age and the steel vessel shows no exterior rust, replacing thermocouples, heating elements, thermostats, or pressure relief valves restores reliable service at a fraction of the cost.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              However, if your storage tank is over 10 years old, leaking from the tank base, or severely calcified, replacement is the safer, more cost-effective choice. Dispatched contractors supply premium Bradford White, Rheem, and Navien models backed by full manufacturer warranties.
            </p>
          </div>

          {/* Section 7: Dispatch Process & Safety Inspections */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="text-xl font-extrabold text-brand-dark flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Service Process & Code Compliance in {loc.name}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {loc.repairProcess}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-slate-200 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                PPRBD Permit Compliance Handled
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-slate-200 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Thermal Expansion Tank Verified
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-slate-200 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Seismic & Strapping Secure
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-slate-200 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Old Unit Haul-Away & Recycling
              </div>
            </div>

            {locImages[2] && (
              <div className="mt-6 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                <div className="relative h-56 sm:h-64 w-full">
                  <Image
                    src={locImages[2].src}
                    alt={locImages[2].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                  />
                </div>
                <div className="p-2.5 text-xs text-slate-600 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span>{locImages[2].caption}</span>
                  <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Expert Dispatch</span>
                </div>
              </div>
            )}
          </div>

          {/* Section 8: Cost Factors (No Made-Up Prices) */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Transparent Factors Influencing Water Heater Costs in {loc.city}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We believe in honest, upfront contractor pricing without misleading published flat rates. The investment required for repair or replacement in {loc.name} depends on verified physical conditions:
            </p>
            <ul className="space-y-2">
              {loc.costFactors.map((cf, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                  <span>{cf}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Caller Checklist */}
          <CallerChecklist />

          {/* Section 9: Local FAQs */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-4">
              Frequently Asked Questions in {loc.name}
            </h2>
            <div className="space-y-3">
              {loc.faqs.map((faq, idx) => (
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
            title={`Related Resources for Homeowners in ${loc.name}`}
            internalLinks={internalLinks}
            externalLink={loc.externalLink}
          />

          {/* Final Call CTA */}
          <div className="bg-gradient-to-r from-brand-dark to-brand-navy text-white rounded-2xl p-8 text-center space-y-4 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-black">
              Need Reliable Water Heater Repair in {loc.name}?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Call our direct dispatch desk to connect with an on-duty technician in {loc.city} for immediate diagnostics and same-day service.
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
