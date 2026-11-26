import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Shield, ArrowRight, ExternalLink, Clock, Wrench, CheckCircle } from "lucide-react";
import CallerChecklist from "@/components/CallerChecklist";
import InternalLinkingSection from "@/components/InternalLinkingSection";
import { PHONE_NUMBER, FORMATTED_PHONE, LOCATIONS, SERVICES, COLORADO_SPRINGS_NEIGHBORHOODS, MAP_LINK } from "@/data/siteData";

export const metadata = {
  title: "Service Areas in Colorado Springs, CO",
  description: "Explore water heater repair and replacement service areas across Colorado Springs, Fountain, Security-Widefield, Manitou Springs, and Monument. Call (456) 789-0123.",
  alternates: {
    canonical: "/service-areas",
  },
};

export default function ServiceAreasPage() {
  const serviceAreasInternalLinks = [
    {
      href: "/",
      label: "Water Heater Repair Colorado Springs (Home)",
      description: "Return to our primary city dispatch center for 24/7 emergency water heater response."
    },
    {
      href: "/water-heater-services",
      label: "All 15 Water Heater Services Hub",
      description: "Review all specialized repair, replacement, and tankless installation options."
    },
    {
      href: "/locations/fountain-co",
      label: "Water Heater Repair in Fountain, CO",
      description: "Direct dispatch for Fountain, Countryside, and neighborhoods near Fort Carson Gate 20."
    },
    {
      href: "/locations/monument-co",
      label: "Water Heater Repair in Monument, CO",
      description: "High-altitude combustion and winter freeze protection across the Tri-Lakes region."
    },
    {
      href: "/water-heater-faq",
      label: "Water Heater Repair FAQs",
      description: "Answers to common homeowner questions regarding costs, pilot lights, and permits."
    }
  ];

  const serviceAreasExternalLink = {
    source: "Pikes Peak Regional Building Department (PPRBD)",
    href: "https://www.pprbd.org/",
    label: "PPRBD Regional Jurisdiction & Permitting Guide",
    note: "Official information on plumbing and mechanical code enforcement across Colorado Springs and El Paso County."
  };

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-brand-dark via-brand-navy to-slate-900 text-white py-14 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" /> Regional Coverage Hub
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Water Heater Service Areas in the Pikes Peak Region
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              We connect homeowners, property managers, and commercial facilities across Colorado Springs and within a 20-mile radius with certified, vetted local water heater technicians.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-white px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-orange-500/20 transition-all"
              >
                <Phone className="w-4 h-4 animate-bounce" />
                Call Regional Dispatch: {FORMATTED_PHONE}
              </a>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 font-semibold hover:text-white"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                View on Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto space-y-6 text-slate-700 leading-relaxed mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Dedicated Local Coverage Across El Paso County
            </h2>
            <p className="text-sm sm:text-base">
              The Pikes Peak region spans diverse geological elevations, multiple water supply districts, and varying municipal utility codes. From the low-elevation plains of Fountain (5,545 ft) to the high Palmer Divide pine forests of Monument (nearly 7,000 ft), water heaters face unique operational conditions. We dispatch technicians equipped with the exact burner derating parts, element wattages, and flue venting fittings demanded by your specific municipality.
            </p>

            {/* 3-Image Regional Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                <div className="relative h-56 w-full">
                  <Image
                    src="/images/img-11-technician-homeowner.jpg"
                    alt="Plumbing specialist consulting with El Paso County homeowner"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-xs text-slate-700 font-semibold bg-white border-t border-slate-100 flex items-center justify-between">
                  <span>Homeowner Consultations</span>
                  <span className="text-[10px] text-brand-blue bg-blue-50 px-2 py-0.5 rounded font-bold">20-Mile Radius</span>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                <div className="relative h-56 w-full">
                  <Image
                    src="/images/img-8-kneeling-plumber.jpg"
                    alt="Technician servicing lower tank and flushing sediment"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-xs text-slate-700 font-semibold bg-white border-t border-slate-100 flex items-center justify-between">
                  <span>Tank Flush & Maintenance</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">Scale Removal</span>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                <div className="relative h-56 w-full">
                  <Image
                    src="/images/img-3-tankless-inspection.jpg"
                    alt="High altitude water heater inspection in Monument and Manitou Springs"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-xs text-slate-700 font-semibold bg-white border-t border-slate-100 flex items-center justify-between">
                  <span>High-Altitude Sizing</span>
                  <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-bold">Up to 7,000 ft</span>
                </div>
              </div>
            </div>
          </div>

          {/* 5 Location Hub Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.slug}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-accent/50 shadow-sm hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-500 bg-slate-200/70 px-2.5 py-0.5 rounded-full">
                      {loc.distance}
                    </span>
                    <span className="text-xs font-bold text-brand-blue bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                      Elev. {loc.altitude}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-brand-dark mb-2">
                    <Link href={`/locations/${loc.slug}`} className="hover:text-brand-accent transition-colors">
                      {loc.name}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {loc.shortDesc}
                  </p>
                  <div className="text-xs text-slate-500 space-y-1 mb-4 pt-2 border-t border-slate-200/60">
                    <div><strong>ZIP Codes:</strong> {loc.zipCodes.join(", ")}</div>
                    <div><strong>Key Landmarks:</strong> {loc.landmarks.join(" • ")}</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="content-link text-xs font-bold"
                  >
                    <span>Full Market Details</span>
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

            {/* Central Colorado Springs Card */}
            <div className="bg-brand-slate rounded-2xl p-6 border-2 border-brand-blue/30 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-brand-blue bg-blue-100 px-2.5 py-0.5 rounded-full">
                    Primary Market
                  </span>
                  <span className="text-xs font-bold text-slate-600 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                    Elev. 6,035 ft
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-brand-dark mb-2">
                  <Link href="/water-heater-repair" className="hover:text-brand-blue transition-colors">
                    Colorado Springs (Central Metro)
                  </Link>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Full 24/7 emergency dispatch coverage spanning all central zip codes, military corridors, downtown historic districts, and northern master-planned communities.
                </p>
                <div className="text-xs text-slate-600 space-y-1 mb-4 pt-2 border-t border-slate-200/60">
                  <div><strong>Key Neighborhoods:</strong> Briargate, Broadmoor, Old Colorado City, Rockrimmon, Powers Corridor.</div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <Link href="/water-heater-repair" className="content-link text-xs font-bold">
                  <span>View Primary City Hub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a href={`tel:${PHONE_NUMBER}`} className="text-xs font-black text-brand-accent hover:text-brand-accentHover flex items-center gap-1">
                  <Phone className="w-3 h-3" /> Call
                </a>
              </div>
            </div>
          </div>

          {/* Detailed Colorado Springs Residential Coverage */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-16">
            <h3 className="text-xl font-extrabold text-brand-dark mb-3">
              Colorado Springs Residential ZIP Codes Served
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Our dispatched network covers the entire urban core and suburban periphery of Colorado Springs:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 text-xs">
              {[
                "80903 - Downtown",
                "80904 - Old Colorado City",
                "80905 - Southwest / Ivywild",
                "80906 - Broadmoor / Cheyenne",
                "80907 - Central North",
                "80909 - Palmer Park / East",
                "80910 - Southeast / Airport",
                "80911 - Security-Widefield",
                "80915 - Cimarron Hills",
                "80916 - Gateway / Peterson",
                "80917 - Village Seven",
                "80918 - University / Erindale",
                "80919 - Rockrimmon / Peregrine",
                "80920 - Briargate / Pine Creek",
                "80921 - Northgate / Gleneagle",
                "80922 - Stetson Hills / Powers",
                "80923 - Ridgeview",
                "80924 - Cordera",
                "80925 - Lorson Ranch",
                "80927 - Banning Lewis Ranch"
              ].map((zip, i) => (
                <div key={i} className="p-3 bg-white rounded-lg border border-slate-200 font-medium text-slate-700 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                  <span>{zip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Caller Checklist */}
          <CallerChecklist />

          {/* Internal & External Links */}
          <InternalLinkingSection
            title="Related Service Area Information & Regional Building Codes"
            internalLinks={serviceAreasInternalLinks}
            externalLink={serviceAreasExternalLink}
          />

        </div>
      </section>

      {/* Conversion Banner */}
      <section className="bg-brand-dark text-white py-12 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">
            Need Rapid Water Heater Service in Your Neighborhood?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Call our direct dispatch line. We identify your location and connect you with a technician ready for immediate dispatch.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-3 bg-brand-accent hover:bg-brand-accentHover text-white px-8 py-3.5 rounded-xl font-black text-lg shadow-xl shadow-orange-600/30 transition-transform hover:scale-105"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>Call For Dispatch: {FORMATTED_PHONE}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
