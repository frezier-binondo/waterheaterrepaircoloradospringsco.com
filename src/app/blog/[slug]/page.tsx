import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  BookOpen,
  Calendar,
  Clock,
  Phone,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  HelpCircle,
  Flame,
  Wrench,
  Sparkles
} from "lucide-react";
import CallerChecklist from "@/components/CallerChecklist";
import InternalLinkingSection from "@/components/InternalLinkingSection";
import { BLOG_POSTS_DETAILED } from "@/data/blogData";
import { PHONE_NUMBER, FORMATTED_PHONE, SERVICES, LOCATIONS } from "@/data/siteData";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(BLOG_POSTS_DETAILED).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS_DETAILED[params.slug];
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.metaTitle} | Water Heater Tips`,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: [{ url: post.imageUrl }],
    },
  };
}

export default function SingleBlogPostPage({ params }: Props) {
  const post = BLOG_POSTS_DETAILED[params.slug];

  if (!post) {
    notFound();
  }

  // 5 distinct internal links for this blog post
  const randomService1 = SERVICES[0]; // water-heater-repair
  const randomService2 = SERVICES[1]; // emergency-water-heater-repair
  const randomService3 = SERVICES[2]; // tankless-water-heater-repair
  const randomLocation = LOCATIONS[0]; // fountain-co

  const internalLinks = [
    {
      href: "/",
      label: "Water Heater Repair Colorado Springs (Home)",
      description: "Return to our central dispatch hub for emergency 24/7 water heater service."
    },
    {
      href: "/water-heater-services",
      label: "All 15 Water Heater Services Directory",
      description: "Review our full catalog of specialized repair, replacement, and tankless solutions."
    },
    {
      href: `/${randomService1.slug}`,
      label: `${randomService1.name} in Colorado Springs`,
      description: randomService1.shortDesc
    },
    {
      href: `/${randomService2.slug}`,
      label: `${randomService2.name} 24/7 Dispatch`,
      description: randomService2.shortDesc
    },
    {
      href: `/locations/${randomLocation.slug}`,
      label: `Water Heater Services in ${randomLocation.name}`,
      description: `Local dispatch coverage, water hardness profiles, and repair availability in ${randomLocation.name}.`
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Blog Article Hero */}
      <section className="bg-gradient-to-br from-brand-dark via-brand-navy to-slate-900 text-white py-14 lg:py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-4">
            
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-slate-300 mb-2">
              <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-brand-accent transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-brand-yellow font-medium truncate max-w-xs">{post.title}</span>
            </nav>

            <div className="flex items-center gap-3">
              <span className="bg-brand-accent/20 text-brand-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {post.publishDate}
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed pt-2">
              {post.excerpt}
            </p>

            {/* Emergency Phone Call Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-brand-accentHover text-white px-7 py-3.5 rounded-xl font-black text-base shadow-xl shadow-orange-600/30 transition-transform hover:scale-105"
              >
                <Phone className="w-5 h-5 animate-bounce" />
                <span>Call Hotline: {FORMATTED_PHONE}</span>
              </a>
              <div className="text-xs text-slate-300 space-y-0.5">
                <div className="font-semibold text-emerald-400">Same-Day Diagnostic Dispatch</div>
                <div>Serving Colorado Springs, Fountain, Manitou & Monument</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main 1000-Word Article Body */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Featured Article Image */}
          <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl mb-12 border border-slate-200">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-4 text-white text-xs font-semibold drop-shadow">
              Expert Homeowner Guide • Colorado Springs Water Heater Insights
            </div>
          </div>

          {/* Article Sections (1,000+ words) */}
          <article className="prose prose-slate max-w-none space-y-10 text-slate-700 leading-relaxed">
            {post.sections.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-base leading-relaxed text-slate-700">
                    {p}
                  </p>
                ))}
                {sec.bullets && (
                  <ul className="space-y-2 pl-4 border-l-2 border-brand-accent/30 my-4">
                    {sec.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="text-sm text-slate-700 font-medium">
                        • {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </article>

          {/* In-Article Callout Box */}
          <div className="my-12 p-6 sm:p-8 bg-gradient-to-br from-orange-50 to-amber-50/50 rounded-2xl border border-orange-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-brand-accent font-black text-sm uppercase tracking-wider">
                <Flame className="w-5 h-5" /> Need Live Professional Advice?
              </div>
              <h3 className="text-xl font-extrabold text-brand-dark">
                Don&apos;t Risk DIY Safety Hazards with Gas or 240V Electricity
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Water heater troubleshooting involves high water pressure, combustible natural gas, and 240V high-amp circuits. Dispatched network technicians carry diagnostic tools to test and repair systems safely.
              </p>
            </div>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all shrink-0"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              {FORMATTED_PHONE}
            </a>
          </div>

          {/* Caller Checklist Component */}
          <CallerChecklist />

          {/* Article-Specific FAQs */}
          <div className="my-12 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-4">
              Frequently Asked Questions About This Topic
            </h2>
            <div className="space-y-3">
              {post.faqs.map((faq, idx) => (
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
            title="Explore Related Services & Authoritative References"
            internalLinks={internalLinks}
            externalLink={post.externalLink}
          />

          {/* Bottom Call Card */}
          <div className="bg-brand-dark text-white rounded-2xl p-8 text-center space-y-4 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-black">
              Experiencing This Water Heater Problem Right Now?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Call our direct dispatch desk to connect with an on-duty technician in Colorado Springs for fast diagnostic inspection.
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
