import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Shield, ShieldCheck, Phone, Users, CheckCircle, Wrench, Award, Clock } from "lucide-react";
import CallerChecklist from "@/components/CallerChecklist";
import InternalLinkingSection from "@/components/InternalLinkingSection";
import { PHONE_NUMBER, FORMATTED_PHONE, SITE_NAME, SERVICES, LOCATIONS } from "@/data/siteData";

export const metadata = {
  title: "About Our Water Heater Service Team",
  description: "Learn about Water Heater Repair in Colorado Springs: our referral service standards, certified plumbing network, and high-altitude technical qualifications. Call (456) 789-0123.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const aboutInternalLinks = [
    {
      href: "/",
      label: "Water Heater Repair Colorado Springs (Home)",
      description: "Return to our main city dispatch hub for 24/7 emergency water heater response."
    },
    {
      href: "/water-heater-services",
      label: "Water Heater Services Directory",
      description: "Explore all 15 specialized repair, replacement, and tankless solutions."
    },
    {
      href: "/emergency-water-heater-repair",
      label: "Emergency Water Heater Repair",
      description: "Priority dispatch for active flooding, burst tanks, gas leaks, and winter outages."
    },
    {
      href: "/service-areas",
      label: "Regional Service Areas",
      description: "Review dispatch coverage across Colorado Springs, Fountain, Manitou, and Monument."
    },
    {
      href: "/contact",
      label: "Contact & Live Dispatch Map",
      description: "Connect directly with our 24/7 phone dispatch desk and view regional coverage."
    }
  ];

  const aboutExternalLink = {
    source: "Pikes Peak Regional Building Department (PPRBD)",
    href: "https://www.pprbd.org/",
    label: "PPRBD Contractor Licensing & Mechanical Standards",
    note: "Official regulatory standards governing plumbing contractor licensure and mechanical inspections in El Paso County."
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark via-brand-navy to-slate-900 text-white py-14 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" /> Company & Dispatch Standards
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              About Our Water Heater Service Network
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Dedicated to connecting homeowners and businesses in Colorado Springs and the Pikes Peak region with certified, vetted, and high-altitude qualified water heater specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Mission & Referral Transparency */}
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              How Our Referral & Connection Service Works
            </h2>
            <p className="text-sm sm:text-base">
              <strong>{SITE_NAME}</strong> was built to solve a simple, persistent problem: finding a qualified, responsive water heater technician in Colorado Springs without wading through endless quote forms, unmonitored email boxes, or unlicensed handymen.
            </p>
            <p className="text-sm sm:text-base">
              We operate an independent plumbing referral and marketing service. When you call our central dispatch hotline at <strong className="text-brand-dark">{FORMATTED_PHONE}</strong>, you connect immediately with a knowledgeable dispatch coordinator who assesses your water heater symptoms, determines your equipment fuel type and location, and immediately routes your request to a licensed, insured, and vetted third-party local plumbing contractor actively working in your sector of El Paso County.
            </p>

            {/* 2-Image Network Presentation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/img-6-technician-portrait.jpg"
                    alt="Certified water heater technician in Colorado Springs"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-xs text-slate-700 font-semibold bg-white border-t border-slate-100 flex items-center justify-between">
                  <span>Licensed Plumbing Technicians</span>
                  <span className="text-[10px] text-brand-blue bg-blue-50 px-2 py-0.5 rounded font-bold">PPRBD Vetted</span>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/img-11-technician-homeowner.jpg"
                    alt="Technician explaining water heater estimate to homeowner"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-xs text-slate-700 font-semibold bg-white border-t border-slate-100 flex items-center justify-between">
                  <span>Transparent Upfront Estimates</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">No Hidden Fees</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values & Standards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-brand-accent flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Rapid Response</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                By operating exclusively by phone, we eliminate the 12-to-24-hour delays typical of web inquiry forms, ensuring rapid arrival when hot water fails.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-brand-blue flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Vetted Contractors</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every independent contractor in our referral network is fully insured, background-checked, and licensed under Pikes Peak Regional Building Department requirements.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">High Altitude Pros</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Technicians specialize in 6,000+ ft combustion calibrations, high-altitude gas burner derating, and local hard-water mineral mitigation.
              </p>
            </div>
          </div>

          {/* Caller Checklist */}
          <CallerChecklist />

          {/* Mandatory Internal & External Linking Module */}
          <InternalLinkingSection
            title="Explore Related Services & Regulatory Standards"
            internalLinks={aboutInternalLinks}
            externalLink={aboutExternalLink}
          />

          {/* Bottom Call Card */}
          <div className="bg-brand-dark text-white rounded-2xl p-8 text-center space-y-4 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-black">
              Ready to Connect With a Local Technician?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Call our Colorado Springs dispatch hotline now to discuss your water heater symptoms and schedule same-day service.
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
