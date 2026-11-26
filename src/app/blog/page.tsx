import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Calendar, Clock, ArrowRight, Phone, ShieldCheck, Flame } from "lucide-react";
import CallerChecklist from "@/components/CallerChecklist";
import InternalLinkingSection from "@/components/InternalLinkingSection";
import { BLOG_POSTS, PHONE_NUMBER, FORMATTED_PHONE, SITE_NAME } from "@/data/siteData";

export const metadata = {
  title: "Water Heater Troubleshooting & Guides | Colorado Springs, CO",
  description: "Read our comprehensive water heater guides, troubleshooting tips, and maintenance advice for Colorado Springs and El Paso County homeowners. Call (456) 789-0123.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  const blogInternalLinks = [
    {
      href: "/",
      label: "Water Heater Repair Colorado Springs (Home)",
      description: "Return to our homepage for immediate 24/7 emergency water heater dispatch."
    },
    {
      href: "/water-heater-services",
      label: "All 15 Water Heater Services Directory",
      description: "Explore our complete range of specialized repair, replacement, and tankless solutions."
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
      label: "Water Heater Repair FAQs (10 Answers)",
      description: "Answers to common homeowner questions regarding repair costs, noise causes, and pilot lights."
    }
  ];

  const blogExternalLink = {
    source: "U.S. Department of Energy (Energy Saver)",
    href: "https://www.energy.gov/energysaver/water-heating",
    label: "DOE Energy Saver Water Heating Guide",
    note: "Federal homeowner resources on residential water heating efficiency, maintenance schedules, and replacement standards."
  };

  return (
    <div className="flex flex-col">
      {/* Blog Hero Header */}
      <section className="bg-gradient-to-br from-brand-dark via-brand-navy to-slate-900 text-white py-14 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" /> Educational Knowledge Hub
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Water Heater Troubleshooting & Guides
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              In-depth articles, diagnostic checklists, and expert maintenance tips written specifically for homeowners facing high-altitude combustion, mineral hardness, and winter weather challenges in Colorado Springs.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-white px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-orange-500/20 transition-all"
              >
                <Phone className="w-4 h-4 animate-bounce" />
                Call Dispatch: {FORMATTED_PHONE}
              </a>
              <span className="text-xs text-slate-300 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> 10 In-Depth Homeowner Guides
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Articles Grid - 10 Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-card hover:border-brand-accent/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-brand-dark/90 text-white text-[11px] font-bold px-2.5 py-1 rounded backdrop-blur-sm">
                      {post.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {post.publishDate}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg font-extrabold text-brand-dark group-hover:text-brand-accent transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {post.snippet}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="content-link text-xs font-bold"
                  >
                    <span>Read Full 1,000-Word Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Caller Checklist */}
          <CallerChecklist />

          {/* Mandatory Internal & External Linking Module */}
          <InternalLinkingSection
            title="Explore Related Services & Regional Water Resources"
            internalLinks={blogInternalLinks}
            externalLink={blogExternalLink}
          />

        </div>
      </section>

      {/* Conversion Banner */}
      <section className="bg-brand-dark text-white py-12 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">
            Have a Water Heater Problem Not Covered in These Guides?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Call our live dispatch desk. Describe what you are seeing, hearing, or smelling, and speak directly with a licensed plumbing specialist.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-3 bg-brand-accent hover:bg-brand-accentHover text-white px-8 py-3.5 rounded-xl font-black text-lg shadow-xl shadow-orange-600/30 transition-transform hover:scale-105"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>Call For An Estimate: {FORMATTED_PHONE}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
