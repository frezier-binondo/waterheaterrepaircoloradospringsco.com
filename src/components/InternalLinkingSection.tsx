import React from "react";
import Link from "next/link";
import { ExternalLink, Link2, ArrowRight } from "lucide-react";

export interface InternalLinkItem {
  href: string;
  label: string;
  description?: string;
}

export interface ExternalLinkItem {
  href: string;
  label: string;
  source: string;
  note?: string;
}

interface Props {
  title?: string;
  internalLinks: InternalLinkItem[];
  externalLink: ExternalLinkItem;
}

export default function InternalLinkingSection({
  title = "Related Services & Regional Service Areas",
  internalLinks,
  externalLink,
}: Props) {
  return (
    <section className="my-12 p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Link2 className="w-5 h-5 text-brand-blue" />
        <h3 className="text-xl font-bold text-brand-dark">{title}</h3>
      </div>
      <p className="text-sm text-slate-600 mb-6">
        Explore interconnected repair solutions, municipal coverage zones, and authoritative energy standards:
      </p>

      {/* Internal Links Grid (at least 5 internal links) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {internalLinks.map((item, idx) => (
          <div
            key={idx}
            className="p-4 bg-white rounded-xl border border-slate-200/80 hover:border-brand-blue/40 transition-all hover:shadow-md"
          >
            <Link href={item.href} className="content-link group text-sm block mb-1">
              <span>{item.label}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            {item.description && (
              <p className="text-xs text-slate-500 leading-relaxed mt-1">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Authoritative External Link */}
      <div className="pt-4 border-t border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-blue-50/70 p-4 rounded-xl border border-blue-100">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue">
              Official Safety & Energy Reference
            </span>
            <div className="text-sm font-semibold text-slate-800">
              Source: <span className="font-bold text-slate-900">{externalLink.source}</span>
            </div>
            {externalLink.note && (
              <p className="text-xs text-slate-600 mt-0.5">{externalLink.note}</p>
            )}
          </div>
          <a
            href={externalLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="content-link text-xs shrink-0 inline-flex items-center gap-1.5"
          >
            <span>{externalLink.label}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
