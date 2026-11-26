import React from "react";
import { AlertTriangle, Phone, Flame, ShieldAlert } from "lucide-react";
import { PHONE_NUMBER, FORMATTED_PHONE } from "@/data/siteData";

export default function EmergencyBanner() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-brand-accent to-orange-600 text-white py-3.5 px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-5 h-5 text-yellow-300 animate-pulse" />
          </div>
          <div>
            <span className="font-extrabold text-sm uppercase tracking-wide text-yellow-200 block md:inline md:mr-2">
              EMERGENCY WATER HEATER LEAK OR GAS SMELL?
            </span>
            <span className="text-xs text-white/95">
              Shut off the cold water intake valve or gas supply line, and call our emergency dispatch line immediately.
            </span>
          </div>
        </div>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="bg-white hover:bg-slate-100 text-brand-dark px-4 py-2 rounded-lg font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-sm transition-transform hover:scale-105 shrink-0"
        >
          <Phone className="w-4 h-4 text-brand-accent" />
          Call 24/7: {FORMATTED_PHONE}
        </a>
      </div>
    </div>
  );
}
