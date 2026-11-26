import React from "react";
import { Phone, Zap, Clock } from "lucide-react";
import { PHONE_NUMBER, FORMATTED_PHONE } from "@/data/siteData";

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-brand-dark/95 backdrop-blur-md border-t border-slate-700 p-2 shadow-2xl">
      <div className="flex items-center gap-2">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex-1 bg-gradient-to-r from-brand-accent to-orange-600 hover:from-orange-600 hover:to-brand-accent text-white py-3.5 px-4 rounded-xl font-black text-sm flex items-center justify-center gap-2.5 shadow-lg active:scale-95 transition-all animate-pulse-glow"
        >
          <div className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center">
            <Phone className="w-4 h-4 text-white animate-bounce" />
          </div>
          <span>CALL NOW: {FORMATTED_PHONE}</span>
        </a>
      </div>
      <div className="flex justify-between items-center text-[10px] text-slate-300 font-semibold px-2 pt-1">
        <span className="flex items-center gap-1">
          <Zap className="w-3 h-3 text-brand-yellow" /> Instant Dispatch
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-emerald-400" /> 24/7 Live Operators
        </span>
      </div>
    </div>
  );
}
