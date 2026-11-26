import React from "react";
import Link from "next/link";
import { HelpCircle, Phone, ShieldCheck, ArrowRight, Clock, CheckCircle } from "lucide-react";
import CallerChecklist from "@/components/CallerChecklist";
import InternalLinkingSection from "@/components/InternalLinkingSection";
import { FAQS, PHONE_NUMBER, FORMATTED_PHONE, SERVICES, LOCATIONS } from "@/data/siteData";

export const metadata = {
  title: "Water Heater Repair FAQs | Colorado Springs, CO",
  description: "Find answers to 10 common water heater questions: no hot water, leaking tanks, strange noises, pilot lights, and repair vs replace in Colorado Springs. Call (456) 789-0123.",
  alternates: {
    canonical: "/water-heater-faq",
  },
};

export default function FAQPage() {
  const faqInternalLinks = [
    {
      href: "/",
      label: "Water Heater Repair Colorado Springs (Home)",
      description: "Return to our primary city dispatch hub for immediate emergency service."
    },
    {
      href: "/water-heater-services",
      label: "All 15 Water Heater Services Directory",
      description: "Explore our comprehensive directory of specialized repair and replacement options."
    },
    {
      href: "/emergency-water-heater-repair",
      label: "Emergency Water Heater Repair",
      description: "Immediate 24/7 dispatch for ruptured tanks, active flooding, and gas leaks."
    },
    {
      href: "/tankless-water-heater-repair",
      label: "Tankless Water Heater Repair",
      description: "Diagnostic codes, flame sensor cleaning, and descaling for Rinnai and Navien units."
    },
    {
      href: "/service-areas",
      label: "El Paso County Regional Service Areas",
      description: "Review dispatch coverage across Colorado Springs, Fountain, Manitou, and Monument."
    }
  ];

  const faqExternalLink = {
    source: "Colorado Springs Utilities (CSU)",
    href: "https://www.csu.org/",
    label: "Colorado Springs Utilities Appliance Efficiency Guidelines",
    note: "Official information regarding local water hardness, natural gas safety, and energy efficiency rebates."
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-brand-dark via-brand-navy to-slate-900 text-white py-14 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" /> Homeowner Resource Center
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Water Heater Repair FAQs in Colorado Springs
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Clear, technically grounded answers to the 10 most common water heater performance, safety, and replacement questions asked by El Paso County homeowners.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-white px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-orange-500/20 transition-all"
              >
                <Phone className="w-4 h-4 animate-bounce" />
                Ask A Technician: {FORMATTED_PHONE}
              </a>
              <span className="text-xs text-slate-300 font-semibold flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-400" /> 24/7 Phone Assistance Available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main FAQ Content - 10 In-Depth Q&As */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-6 mb-16">
            {FAQS.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 open:bg-white open:shadow-md transition-all duration-200"
                open={index < 2}
              >
                <summary className="flex items-center justify-between font-extrabold text-brand-dark text-base sm:text-lg cursor-pointer list-none select-none">
                  <span className="pr-4 flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-brand-accent text-white text-xs flex items-center justify-center shrink-0 font-black">
                      {index + 1}
                    </span>
                    {faq.q}
                  </span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 shrink-0">
                    ▼
                  </span>
                </summary>
                <div className="pt-4 mt-3 border-t border-slate-100 text-sm text-slate-700 leading-relaxed pl-10 space-y-2">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>

          {/* Caller Checklist */}
          <CallerChecklist />

          {/* Mandatory Internal & External Linking Module */}
          <InternalLinkingSection
            title="Explore Related Services, Coverage Areas & Official Codes"
            internalLinks={faqInternalLinks}
            externalLink={faqExternalLink}
          />

          {/* Bottom Call Card */}
          <div className="bg-brand-dark text-white rounded-2xl p-8 text-center space-y-4 shadow-xl mt-12">
            <h3 className="text-xl sm:text-2xl font-black">
              Still Have Questions About Your Water Heater?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Call our Colorado Springs dispatch desk. We are happy to evaluate your symptoms over the phone and provide honest, no-obligation recommendations.
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
