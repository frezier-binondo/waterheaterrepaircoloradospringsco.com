"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, Shield, Clock, Flame, ChevronDown, MapPin } from "lucide-react";
import { PHONE_NUMBER, FORMATTED_PHONE, SITE_NAME, SERVICES, LOCATIONS } from "@/data/siteData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      {/* Top DrainHaus-Style Urgency Bar */}
      <div className="bg-brand-dark text-white text-xs sm:text-sm py-2 px-4 border-b border-brand-navy">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-brand-accent/20 text-brand-accent px-2 py-0.5 rounded font-semibold text-xs uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping inline-block"></span>
              24/7 Rapid Dispatch
            </span>
            <span className="hidden md:inline text-slate-300">
              Serving Colorado Springs, Fountain, Manitou & El Paso County
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="hidden lg:flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-brand-accent" /> Average Response: Under 45 Mins
            </span>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="text-white hover:text-brand-accent font-bold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-accent animate-bounce" />
              Call Dispatch: <span className="text-brand-yellow font-extrabold">{FORMATTED_PHONE}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-brand-dark to-brand-navy flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 text-brand-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-brand-dark leading-tight group-hover:text-brand-accent transition-colors">
                Water Heater Repair
              </span>
              <span className="text-xs font-bold text-brand-blue tracking-wide uppercase">
                in Colorado Springs, CO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-bold text-slate-700 hover:text-brand-accent transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/water-heater-services"
                className="text-sm font-bold text-slate-700 hover:text-brand-accent flex items-center gap-1 transition-colors py-2"
              >
                Water Heater Services
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </Link>
              {servicesOpen && (
                <div className="absolute top-full -left-10 w-80 bg-white rounded-xl shadow-xl border border-slate-100 py-3 grid grid-cols-1 gap-1 animate-fadeIn">
                  <div className="px-4 py-1.5 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Core Solutions
                  </div>
                  {SERVICES.slice(0, 8).map((srv) => (
                    <Link
                      key={srv.slug}
                      href={`/${srv.slug}`}
                      className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-brand-accent flex items-center justify-between transition-colors"
                    >
                      <span>{srv.name}</span>
                      {srv.popular && (
                        <span className="text-[10px] bg-orange-100 text-orange-700 font-bold px-1.5 py-0.5 rounded">
                          Fast Fix
                        </span>
                      )}
                    </Link>
                  ))}
                  <div className="px-4 pt-2 border-t border-slate-100">
                    <Link
                      href="/water-heater-services"
                      className="text-xs font-bold text-brand-blue hover:text-brand-accent flex items-center gap-1"
                    >
                      View All 15 Services &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <Link
                href="/service-areas"
                className="text-sm font-bold text-slate-700 hover:text-brand-accent flex items-center gap-1 transition-colors py-2"
              >
                Service Areas
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </Link>
              {locationsOpen && (
                <div className="absolute top-full -left-6 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-3 grid grid-cols-1 gap-1">
                  <div className="px-4 py-1.5 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Nearby Municipalities
                  </div>
                  {LOCATIONS.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-brand-accent flex items-center gap-2 transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                      <span>{loc.name}</span>
                    </Link>
                  ))}
                  <div className="px-4 pt-2 border-t border-slate-100">
                    <Link
                      href="/service-areas"
                      className="text-xs font-bold text-brand-blue hover:text-brand-accent flex items-center gap-1"
                    >
                      All Coverage & ZIPs &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-sm font-bold text-slate-700 hover:text-brand-accent transition-colors"
            >
              About
            </Link>

            <Link
              href="/water-heater-faq"
              className="text-sm font-bold text-slate-700 hover:text-brand-accent transition-colors"
            >
              FAQs
            </Link>

            <Link
              href="/blog"
              className="text-sm font-bold text-slate-700 hover:text-brand-accent transition-colors"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="text-sm font-bold text-slate-700 hover:text-brand-accent transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right Phone CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-3 bg-brand-accent hover:bg-brand-accentHover text-white px-5 py-3 rounded-lg font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all transform hover:-translate-y-0.5"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Phone className="w-4 h-4 text-white animate-pulse" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] uppercase tracking-wider text-orange-100 font-semibold leading-tight">
                  Speak To A Technician
                </span>
                <span className="text-base font-black leading-tight text-white">
                  {FORMATTED_PHONE}
                </span>
              </div>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-brand-accent hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-bold text-slate-800 hover:bg-slate-50 hover:text-brand-accent"
          >
            Home
          </Link>
          <Link
            href="/water-heater-services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-bold text-slate-800 hover:bg-slate-50 hover:text-brand-accent"
          >
            All Water Heater Services (15)
          </Link>
          <div className="pl-4 space-y-1">
            {SERVICES.slice(0, 5).map((srv) => (
              <Link
                key={srv.slug}
                href={`/${srv.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs font-medium text-slate-600 py-1 hover:text-brand-accent"
              >
                • {srv.name}
              </Link>
            ))}
          </div>
          <Link
            href="/service-areas"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-bold text-slate-800 hover:bg-slate-50 hover:text-brand-accent"
          >
            Service Areas (Pikes Peak Region)
          </Link>
          <div className="pl-4 space-y-1">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs font-medium text-slate-600 py-1 hover:text-brand-accent"
              >
                • {loc.name}
              </Link>
            ))}
          </div>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-bold text-slate-800 hover:bg-slate-50 hover:text-brand-accent"
          >
            About Us & Referral Process
          </Link>
          <Link
            href="/water-heater-faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-bold text-slate-800 hover:bg-slate-50 hover:text-brand-accent"
          >
            FAQs (10 In-Depth Q&As)
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-bold text-slate-800 hover:bg-slate-50 hover:text-brand-accent"
          >
            Plumbing Blog & Guides (10 Articles)
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-bold text-slate-800 hover:bg-slate-50 hover:text-brand-accent"
          >
            Contact & Coverage Map
          </Link>

          <div className="pt-4 border-t border-slate-200">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-full flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-white py-3 px-4 rounded-lg font-bold text-center shadow-md"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              Call 24/7 Dispatch: {FORMATTED_PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
