import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, ShieldCheck, AlertTriangle, ExternalLink, Wrench, CheckCircle } from "lucide-react";
import CallerChecklist from "@/components/CallerChecklist";
import InternalLinkingSection from "@/components/InternalLinkingSection";
import { PHONE_NUMBER, FORMATTED_PHONE, SITE_NAME, MAP_LINK, LOCATIONS, SERVICES } from "@/data/siteData";

export const metadata = {
  title: "Contact for Water Heater Service in Colorado Springs | 24/7 Dispatch",
  description: "Contact our phone-only water heater dispatch desk in Colorado Springs, CO. Fast 24/7 service connection for gas, electric, and tankless units. Call (456) 789-0123.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const contactInternalLinks = [
    {
      href: "/",
      label: "Water Heater Repair Colorado Springs (Home)",
      description: "Return to our primary city dispatch hub for emergency 24/7 water heater repair."
    },
    {
      href: "/water-heater-services",
      label: "All 15 Water Heater Services Directory",
      description: "Explore our comprehensive directory of specialized repair, replacement, and tankless solutions."
    },
    {
      href: "/emergency-water-heater-repair",
      label: "Emergency Water Heater Repair",
      description: "Immediate response for active tank leaks, gas odors, and winter freeze outages."
    },
    {
      href: "/service-areas",
      label: "Pikes Peak Regional Service Areas",
      description: "Review dispatch coverage across Colorado Springs, Fountain, Manitou, and Monument."
    },
    {
      href: "/water-heater-faq",
      label: "Water Heater Repair FAQs",
      description: "Answers to common homeowner questions regarding repair costs, noise causes, and pilot lights."
    }
  ];

  const contactExternalLink = {
    source: "Google Maps - Colorado Springs Service Area",
    href: MAP_LINK,
    label: "Google Maps Colorado Springs Service Boundary",
    note: "Official geographic navigation view of Colorado Springs and regional El Paso County dispatch routes."
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark via-brand-navy to-slate-900 text-white py-14 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
              <Phone className="w-3.5 h-3.5" /> Direct Phone Connection
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Contact Water Heater Dispatch in Colorado Springs
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              We operate exclusively by phone to eliminate slow web forms and automated email delays. When you call, you speak directly with a local dispatch specialist who routes a certified water heater technician to your home.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            
            {/* Left Column: Direct Phone Actions & Service Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-gradient-to-br from-brand-slate to-orange-50/40 p-6 sm:p-8 rounded-2xl border border-orange-200/80 shadow-sm">
                <span className="text-xs font-black uppercase tracking-wider text-brand-accent bg-orange-100 px-3 py-1 rounded-full inline-block mb-3">
                  Phone-Only Connection Service
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-brand-dark mb-3">
                  Why We Do Not Use Online Contact Forms
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Water heater breakdowns are time-sensitive plumbing emergencies. A leaking 50-gallon tank or a dead pilot light in freezing weather cannot wait for someone to check an email inbox tomorrow morning. By keeping our service 100% phone-based, we ensure immediate human triage, accurate parts matching, and rapid physical dispatch.
                </p>

                {/* Big Call Button Card */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-md space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-extrabold text-slate-500">24/7 Immediate Dispatch</span>
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> Live Now
                    </span>
                  </div>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="w-full flex items-center justify-center gap-3 bg-brand-accent hover:bg-brand-accentHover text-white py-4 px-6 rounded-xl font-black text-xl shadow-lg shadow-orange-500/20 transition-all transform hover:scale-[1.02]"
                  >
                    <Phone className="w-6 h-6 animate-bounce" />
                    <span>{FORMATTED_PHONE}</span>
                  </a>
                  <p className="text-center text-xs text-slate-500">
                    Toll-free mobile direct dial • No wait times • No phone trees
                  </p>
                </div>
              </div>

              {/* Operational Dispatch Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2">
                    <Clock className="w-4 h-4 text-brand-accent" />
                    Operating Hours
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Emergency Dispatch:</strong> 24 Hours / 7 Days / 365 Days<br />
                    <strong>Standard Maintenance:</strong> Monday – Saturday: 7:00 AM – 7:00 PM<br />
                    <strong>Sunday Emergency Only:</strong> 24-Hour On-Call
                  </p>
                </div>

                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2">
                    <MapPin className="w-4 h-4 text-brand-blue" />
                    Dispatch Radius
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Primary Hub:</strong> Colorado Springs, CO<br />
                    <strong>Surrounding Communities:</strong> Fountain, Security-Widefield, Cimarron Hills, Manitou Springs, Monument, Falcon (approx. 20-mile radius).
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Google Maps & Local Coverage */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-brand-dark text-white p-6 rounded-2xl shadow-xl space-y-4">
                <h3 className="text-lg font-extrabold flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-accent" />
                  Colorado Springs Dispatch Service Area
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our network technicians are stationed throughout El Paso County for rapid highway access via I-25, Powers Blvd, and Highway 24.
                </p>

                {/* Embedded Interactive Google Map */}
                <div className="w-full h-72 rounded-xl overflow-hidden border-2 border-slate-600 relative bg-slate-800 shadow-inner">
                  <iframe
                    title="Colorado Springs Water Heater Repair Service Area Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199124.64687612304!2d-104.94528143922903!3d38.86737526743916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8713412ea1e612e9%3A0x8992ef3064dae3eb!2sColorado%20Springs%2C%20CO!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full filter saturate-150 contrast-105"
                  ></iframe>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Pikes Peak Region, CO</span>
                  <a
                    href={MAP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="content-link text-xs text-brand-accent hover:text-white"
                  >
                    <span>Open in Google Maps App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Caller Checklist */}
          <CallerChecklist />

          {/* Mandatory Internal & External Linking Module */}
          <InternalLinkingSection
            title="Explore Related Services & Regulatory Links"
            internalLinks={contactInternalLinks}
            externalLink={contactExternalLink}
          />

        </div>
      </section>
    </div>
  );
}
