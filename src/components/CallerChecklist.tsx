import React from "react";
import { CheckCircle2, Phone, AlertCircle, HelpCircle } from "lucide-react";
import { PHONE_NUMBER, FORMATTED_PHONE } from "@/data/siteData";

export default function CallerChecklist() {
  return (
    <section className="my-10 bg-gradient-to-br from-slate-50 to-orange-50/40 rounded-2xl p-6 sm:p-8 border border-orange-100 shadow-sm">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-orange-200/60">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-brand-accent bg-orange-100 px-3 py-1 rounded-full inline-block mb-1">
              Speed Up Your Call
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-brand-dark">
              What Callers Should Have Ready Before Calling
            </h3>
          </div>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-md transition-all self-start sm:self-auto shrink-0"
          >
            <Phone className="w-4 h-4 animate-bounce" />
            {FORMATTED_PHONE}
          </a>
        </div>

        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          Because this is a dedicated phone dispatch service, having the following 5 details handy enables the technician to arrive with the exact replacement heating elements, thermocouple, gas valves, or sized replacement tank:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center font-bold text-sm shrink-0">
              1
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Equipment Brand & Model</h4>
              <p className="text-xs text-slate-600 mt-1">
                Check the manufacturer rating plate (usually Rheem, Bradford White, A. O. Smith, State, Rinnai, or Navien).
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center font-bold text-sm shrink-0">
              2
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Fuel & Energy Type</h4>
              <p className="text-xs text-slate-600 mt-1">
                Is your unit Natural Gas (Colorado Springs Utilities), Electric (240V), Liquid Propane (LP), or Tankless?
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center font-bold text-sm shrink-0">
              3
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Approximate Tank Capacity & Age</h4>
              <p className="text-xs text-slate-600 mt-1">
                Typical residential tanks are 40, 50, or 75 gallons. Tank age can be deciphered from serial number date codes.
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center font-bold text-sm shrink-0">
              4
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Primary Observed Symptoms</h4>
              <p className="text-xs text-slate-600 mt-1">
                No hot water at all, lukewarm water, pilot won&apos;t ignite, pooling water at base, or rumbling kettle sounds.
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex items-start gap-3 md:col-span-2">
            <div className="w-8 h-8 rounded-full bg-orange-100 text-brand-accent flex items-center justify-center font-bold text-sm shrink-0">
              5
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Location In Your Home & Accessibility</h4>
              <p className="text-xs text-slate-600 mt-1">
                Is the water heater in an unfinished basement, crawlspace, garage, attic, or utility closet? Ensure the pathway is cleared for fast inspection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
