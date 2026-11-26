import React from "react";
import Link from "next/link";
import { Phone, MapPin, Shield, Clock, ExternalLink, Flame, CheckCircle, AlertCircle } from "lucide-react";
import { PHONE_NUMBER, FORMATTED_PHONE, SITE_NAME, SERVICES, LOCATIONS, MAP_LINK } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800 relative">
      {/* Visual Service Area Map Section in Footer as requested */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="bg-brand-navy rounded-2xl p-6 sm:p-8 border border-slate-700/60 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" /> Direct Local Coverage
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Serving Colorado Springs & Surrounding 20-Mile Radius
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our dispatched technicians cover all of Colorado Springs and immediate El Paso County communities: Fountain, Security-Widefield, Cimarron Hills, Manitou Springs, and Monument.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-white px-5 py-3 rounded-lg font-bold text-sm shadow-md transition-colors"
                >
                  <Phone className="w-4 h-4 animate-pulse" />
                  Call Now: {FORMATTED_PHONE}
                </a>
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 rounded-lg font-semibold text-sm border border-slate-600 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-brand-accent" />
                  Open in Google Maps
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="lg:col-span-7">
              <div className="w-full h-72 sm:h-80 rounded-xl overflow-hidden border-2 border-slate-600 shadow-inner relative bg-slate-800">
                <iframe
                  title="Water Heater Repair in Colorado Springs Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199124.64687612304!2d-104.94528143922903!3d38.86737526743916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8713412ea1e612e9%3A0x8992ef3064dae3eb!2sColorado%20Springs%2C%20CO!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-150 contrast-105"
                ></iframe>
                <div className="absolute bottom-2 left-2 bg-slate-900/90 text-white text-[11px] px-3 py-1 rounded backdrop-blur-sm border border-slate-700">
                  <span className="font-semibold text-brand-accent">Live GPS Dispatch:</span> Colorado Springs & El Paso County, CO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded bg-brand-accent flex items-center justify-center text-white">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <span className="text-base font-extrabold text-white tracking-tight">
                {SITE_NAME}
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              We connect homeowners and commercial facility operators across Colorado Springs and the Pikes Peak region with certified, vetted water heater technicians. As a phone-only dispatch service, we eliminate web form delays to ensure rapid, human-coordinated emergency support.
            </p>
            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-white">
                <Shield className="w-4 h-4 text-emerald-400" /> Licensed Local Plumbing Network
              </div>
              <p className="text-[11px] text-slate-400">
                All network partners adhere to Pikes Peak Regional Building Department (PPRBD) safety codes and manufacturer engineering standards.
              </p>
            </div>
            <div className="pt-2">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="text-white hover:text-brand-accent font-extrabold text-lg flex items-center gap-2"
              >
                <Phone className="w-5 h-5 text-brand-accent" />
                {FORMATTED_PHONE}
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 pb-1 border-b border-slate-800">
              Popular Services
            </h4>
            <ul className="space-y-1.5 text-xs">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-slate-400 hover:text-white hover:underline underline-offset-2 transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/water-heater-services"
                  className="text-brand-accent font-semibold hover:underline"
                >
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 pb-1 border-b border-slate-800">
              Service Areas
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link
                  href="/water-heater-repair"
                  className="text-slate-400 hover:text-white hover:underline underline-offset-2 transition-colors"
                >
                  Colorado Springs (Central Metro)
                </Link>
              </li>
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/locations/${l.slug}`}
                    className="text-slate-400 hover:text-white hover:underline underline-offset-2 transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="text-brand-accent font-semibold hover:underline"
                >
                  View All Coverage Areas &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 pb-1 border-b border-slate-800">
              Helpful Guides
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white hover:underline">
                  About Our Service
                </Link>
              </li>
              <li>
                <Link href="/water-heater-faq" className="text-slate-400 hover:text-white hover:underline">
                  Water Heater FAQs (10 Q&As)
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white hover:underline">
                  Plumbing Troubleshooting Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white hover:underline">
                  Contact & Dispatch
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-400 hover:text-white hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="https://www.csu.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white hover:underline inline-flex items-center gap-1"
                >
                  Colorado Springs Utilities <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Phone-Only Disclaimer */}
        <div className="pt-8 border-t border-slate-800 text-[11px] text-slate-500 space-y-2">
          <p>
            <strong>Service Disclosure:</strong> {SITE_NAME} is an independent plumbing connection and marketing referral service. We connect consumers with independent, third-party plumbing and water heater repair specialists in Colorado Springs and El Paso County. We do not perform plumbing repairs directly. Any warranties, pricing, or guarantees are solely the responsibility of the licensed independent contractor dispatched to your property.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-2">
            <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
              <Link href="/terms" className="hover:underline">Terms of Use</Link>
              <Link href="/sitemap.xml" className="hover:underline">XML Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
