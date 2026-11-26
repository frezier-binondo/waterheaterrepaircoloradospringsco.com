import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Wrench,
  Phone,
  ShieldCheck,
  Clock,
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  MapPin,
  ArrowRight,
  Flame,
  Zap,
  Layers,
  Sparkles,
  Info
} from "lucide-react";
import CallerChecklist from "@/components/CallerChecklist";
import InternalLinkingSection from "@/components/InternalLinkingSection";
import { SERVICES_DETAILED } from "@/data/servicesData";
import { PHONE_NUMBER, FORMATTED_PHONE, SERVICES, LOCATIONS } from "@/data/siteData";
import { getServiceImages } from "@/lib/pageImages";

interface Props {
  params: {
    service: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(SERVICES_DETAILED).map((slug) => ({
    service: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES_DETAILED[params.service];
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES_DETAILED[params.service];

  if (!service) {
    notFound();
  }

  const serviceImages = getServiceImages(service.slug, service.name);

  // Generate 5 distinct internal links for this service page
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);
  const relatedService1 = otherServices[0];
  const relatedService2 = otherServices[1];
  const randomLocation1 = LOCATIONS[0];
  const randomLocation2 = LOCATIONS[1];

  const internalLinks = [
    {
      href: "/",
      label: "Water Heater Repair Colorado Springs (Home)",
      description: "Return to our primary city dispatch hub for general troubleshooting and emergency service."
    },
    {
      href: "/water-heater-services",
      label: "All Water Heater Services Directory",
      description: "Browse all 15 specialized repair, replacement, and tankless solutions in the Pikes Peak region."
    },
    {
      href: `/${relatedService1.slug}`,
      label: `${relatedService1.name} in Colorado Springs`,
      description: relatedService1.shortDesc
    },
    {
      href: `/${relatedService2.slug}`,
      label: `${relatedService2.name} in Colorado Springs`,
      description: relatedService2.shortDesc
    },
    {
      href: `/locations/${randomLocation1.slug}`,
      label: `Water Heater Services in ${randomLocation1.name}`,
      description: `Local dispatch coverage, altitude considerations, and repair availability in ${randomLocation1.name}.`
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Service Header / Hero */}
      <section className="bg-gradient-to-br from-brand-dark via-brand-navy to-slate-900 text-white py-14 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-slate-300 mb-2">
              <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
              <span>/</span>
              <Link href="/water-heater-services" className="hover:text-brand-accent transition-colors">Services</Link>
              <span>/</span>
              <span className="text-brand-yellow font-medium">{service.name}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5" /> Certified Regional Service Silo
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              {service.h1}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              {service.heroSubtitle}
            </p>

            {/* Emergency Phone Call Card */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-brand-accentHover text-white px-7 py-4 rounded-xl font-black text-lg shadow-xl shadow-orange-600/30 transition-transform hover:scale-105"
              >
                <Phone className="w-5 h-5 animate-bounce" />
                <span>Call Hotline: {FORMATTED_PHONE}</span>
              </a>
              <div className="text-xs text-slate-300 space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-emerald-400">
                  <Clock className="w-3.5 h-3.5" /> Fast Dispatch in Colorado Springs & El Paso County
                </div>
                <div>No automated forms • Talk directly to a local specialist</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Service Content Body - 800+ Words Structured Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 1. Concise Service Overview */}
          <div className="space-y-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Service Overview & Local Considerations
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {service.overview}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Operating a water heater along Colorado&apos;s Front Range introduces environmental stresses not found in lower-elevation regions. High altitude reduces natural draft velocities in atmospheric flues, and mountain watershed mineral content accelerates internal galvanic decay. Our network technicians bring specific diagnostic tools calibrated for Colorado Springs homes, ensuring that repairs address root causes rather than temporary symptoms.
            </p>

            {serviceImages[0] && (
              <div className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                <div className="relative h-64 sm:h-80 w-full">
                  <Image
                    src={serviceImages[0].src}
                    alt={serviceImages[0].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-xs text-slate-600 bg-white border-t border-slate-100 flex items-center justify-between">
                  <span>{serviceImages[0].caption}</span>
                  <span className="text-[11px] font-semibold text-brand-blue bg-blue-50 px-2 py-0.5 rounded">Colorado Springs Tech</span>
                </div>
              </div>
            )}
          </div>

          {/* 2. Common Symptoms & Warning Signs */}
          <div className="my-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Diagnostic Indicators
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mt-2 mb-6">
              Common Warning Signs You Need {service.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.symptoms.map((sym, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-slate-50 rounded-xl border border-slate-200 hover:border-brand-accent/40 transition-all"
                >
                  <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 text-base">
                    <span className="w-6 h-6 rounded-full bg-brand-accent/15 text-brand-accent text-xs flex items-center justify-center font-black shrink-0">
                      {idx + 1}
                    </span>
                    {sym.title}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                    {sym.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Diagnostic Approach & Likely Causes */}
          <div className="my-12 bg-brand-slate p-6 sm:p-8 rounded-2xl border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Technical Root Causes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mt-2 mb-6">
              Likely Mechanical Causes & Diagnostic Testing
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

            {serviceImages[1] && (
              <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                <div className="relative h-64 sm:h-72 w-full">
                  <Image
                    src={serviceImages[1].src}
                    alt={serviceImages[1].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-xs text-slate-600 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span>{serviceImages[1].caption}</span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Diagnostic Testing</span>
                </div>
              </div>
            )}
          </div>

          {/* 4. Repair Options & When Replacement is Appropriate */}
          <div className="my-12 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Repair Options vs. When Replacement Is Recommended
            </h2>
            <div className="p-6 bg-blue-50/60 rounded-2xl border border-blue-100 text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
              <p>{service.repairOptions}</p>
              <p>
                As a practical standard for Colorado Springs properties, consider the <strong>50% Rule</strong>: if the system is under 8 years of age and the estimated repair cost is under 50% of the price of an installed replacement, repair is the most economical path. If the unit is 10 to 12+ years old, replacing it with an ENERGY STAR® certified unit prevents repeated service calls and protects against flood risks.
              </p>
            </div>
          </div>

          {/* 5. Safety Considerations & Service Process */}
          <div className="my-12 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Safety Protocols & High-Altitude Service Process
            </h2>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-slate-700 text-sm leading-relaxed space-y-3">
              <p>{service.safetyAndProcess}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold text-slate-800">
                <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>PPRBD Code Verified</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-slate-200">
                  <Flame className="w-4 h-4 text-brand-accent" />
                  <span>CO Draft Tested</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-slate-200">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>Zero-Voltage Confirmed</span>
                </div>
              </div>

              {serviceImages[2] && (
                <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                  <div className="relative h-56 sm:h-64 w-full">
                    <Image
                      src={serviceImages[2].src}
                      alt={serviceImages[2].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-2.5 text-xs text-slate-600 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <span>{serviceImages[2].caption}</span>
                    <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Safety Protocol</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 6. Honest Cost Factors (No Fake Prices) */}
          <div className="my-12 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Factors Influencing Service & Repair Costs
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We provide transparent upfront diagnostics without published placeholder or misleading flat-rate prices. The total investment for your water heater service in Colorado Springs depends on verifiable physical criteria:
            </p>
            <ul className="space-y-2.5">
              {service.costFactors.map((cf, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                  <span>{cf}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Caller Checklist */}
          <CallerChecklist />

          {/* 7. Service FAQs */}
          <div className="my-12 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-4">
              Frequently Asked Questions About {service.name}
            </h2>
            <div className="space-y-3">
              {service.faqs.map((faq, idx) => (
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
            title={`Related Resources for ${service.name}`}
            internalLinks={internalLinks}
            externalLink={service.externalLink}
          />

          {/* Bottom Conversion Call Card */}
          <div className="bg-gradient-to-r from-brand-dark to-brand-navy text-white rounded-2xl p-8 text-center space-y-4 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-black">
              Need Immediate {service.name} in Colorado Springs?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Our dispatch desk connects you with certified technicians ready to inspect your system, provide transparent estimates, and restore your hot water today.
            </p>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-white px-7 py-3.5 rounded-xl font-black text-base shadow-lg transition-transform hover:scale-105"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              Call Dispatch: {FORMATTED_PHONE}
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
