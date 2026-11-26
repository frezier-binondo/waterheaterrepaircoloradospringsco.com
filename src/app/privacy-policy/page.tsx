import React from "react";
import Link from "next/link";
import { Shield, Phone, ExternalLink } from "lucide-react";
import InternalLinkingSection from "@/components/InternalLinkingSection";
import { PHONE_NUMBER, FORMATTED_PHONE, SITE_NAME } from "@/data/siteData";

export const metadata = {
  title: "Privacy Policy",
  description: "Read the Privacy Policy for Water Heater Repair in Colorado Springs. Learn how phone referral inquiries, analytics, and contact information are protected.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const privacyInternalLinks = [
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

  const privacyExternalLink = {
    source: "Federal Trade Commission (FTC)",
    href: "https://www.ftc.gov/",
    label: "FTC Consumer Privacy & Telemarketing Guidelines",
    note: "Federal standards governing telephone privacy, consumer protection, and business transparency."
  };

  return (
    <div className="flex flex-col">
      <section className="bg-brand-dark text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black mb-2">Privacy Policy</h1>
          <p className="text-xs text-slate-400">Last updated: November 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm text-slate-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-2">1. Overview & Phone-Only Data Collection</h2>
            <p>
              {SITE_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates an independent plumbing connection and referral service. Because we do not collect personal information through online contact forms, the primary way you provide information is by placing a telephone call to our dispatch number at {FORMATTED_PHONE}.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-2">2. Information Received During Telephone Calls</h2>
            <p>
              When you call our dispatch line, our operators or third-party call routing partners may collect the following details solely to route your service request:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Your telephone caller ID number and name.</li>
              <li>Your residential address or neighborhood in Colorado Springs or El Paso County.</li>
              <li>Details regarding your water heater make, model, fuel type, and observed failure symptoms.</li>
              <li>Calls may be recorded or monitored for quality assurance and dispatcher training purposes.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-2">3. How Information Is Shared With Independent Contractors</h2>
            <p>
              We share the information you provide during your call with independent, third-party plumbing and water heater repair specialists in your local area so they can contact you, arrive at your property, and provide diagnostic and repair estimates. We do not sell, rent, or distribute your phone number or information to unrelated third-party marketers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-2">4. Website Cookies & Analytics</h2>
            <p>
              Our website may utilize standard web cookies and anonymous traffic analytics to evaluate page performance, browser compatibility, and user navigation. These logs do not contain personally identifiable financial or medical records.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-2">5. Contact Us Regarding Your Privacy</h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to inquire about information collected during a phone inquiry, please contact our administrative desk by calling {FORMATTED_PHONE}.
            </p>
          </div>

          {/* Mandatory Internal & External Linking Module */}
          <InternalLinkingSection
            title="Explore Related Site Resources"
            internalLinks={privacyInternalLinks}
            externalLink={privacyExternalLink}
          />
        </div>
      </section>
    </div>
  );
}
