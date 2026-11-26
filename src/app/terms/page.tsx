import React from "react";
import Link from "next/link";
import { Shield, Phone, ExternalLink } from "lucide-react";
import InternalLinkingSection from "@/components/InternalLinkingSection";
import { PHONE_NUMBER, FORMATTED_PHONE, SITE_NAME } from "@/data/siteData";

export const metadata = {
  title: "Website Terms & Referral Disclaimer",
  description: "Read the Terms of Service for Water Heater Repair in Colorado Springs. Important disclosures regarding independent plumbing contractor referral services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  const termsInternalLinks = [
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
      href: "/service-areas",
      label: "Regional Service Areas",
      description: "Review dispatch coverage across Colorado Springs, Fountain, Manitou, and Monument."
    },
    {
      href: "/about",
      label: "About Our Service & Referral Model",
      description: "Learn how our independent referral service connects you with local technicians."
    },
    {
      href: "/contact",
      label: "Contact & Live Dispatch Map",
      description: "Connect directly with our 24/7 phone dispatch desk."
    }
  ];

  const termsExternalLink = {
    source: "Colorado Department of Regulatory Agencies (DORA)",
    href: "https://dora.colorado.gov/",
    label: "Colorado State Plumbing Board Licensing Verification",
    note: "Official state registry for verifying trade licensing, plumbing credentials, and master plumber registrations."
  };

  return (
    <div className="flex flex-col">
      <section className="bg-brand-dark text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black mb-2">Terms of Service</h1>
          <p className="text-xs text-slate-400">Last updated: November 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm text-slate-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, or placing a telephone call through {SITE_NAME} (&quot;the Website&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue using the website and its telephone services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-2">2. Independent Referral Service Disclosure</h2>
            <p>
              {SITE_NAME} is an independent marketing and referral service that connects consumers in Colorado Springs and El Paso County with independent third-party plumbing and water heater repair specialists. <strong>{SITE_NAME} does not directly employ plumbing technicians or perform plumbing installations or repairs.</strong>
            </p>
            <p className="mt-2">
              All independent contractors in our referral network are autonomous third parties. The decision to hire a dispatched contractor, accept an estimate, or authorize repairs is entirely between the consumer and the independent contractor.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-2">3. Warranties, Pricing & Guarantees</h2>
            <p>
              {SITE_NAME} makes no direct warranties, express or implied, regarding plumbing workmanship, parts, or equipment. Any warranties on parts, labor, or replacement equipment (such as manufacturer tank warranties on Bradford White, Rheem, or Navien units) are provided solely by the independent contractor or equipment manufacturer.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-2">4. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by Colorado law, {SITE_NAME} and its operators shall not be liable for any direct, indirect, incidental, or consequential damages resulting from water damage, property damage, gas leaks, contractor delays, or plumbing performance issues arising from services performed by independent third-party contractors.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-2">5. Permitting and Local Code Compliance</h2>
            <p>
              In Colorado Springs and unincorporated El Paso County, water heater installations require building permits issued by the Pikes Peak Regional Building Department (PPRBD). It is the responsibility of the licensed independent contractor to secure required permits and schedule inspections.
            </p>
          </div>

          {/* Mandatory Internal & External Linking Module */}
          <InternalLinkingSection
            title="Explore Related Site Resources"
            internalLinks={termsInternalLinks}
            externalLink={termsExternalLink}
          />
        </div>
      </section>
    </div>
  );
}
