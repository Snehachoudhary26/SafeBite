import React from 'react';
import { ShieldCheck, AlertTriangle, Users, TrendingUp, ChevronDown } from 'lucide-react';

export default function StatsBanner() {
  const stats = [
    {
      value: "2.4M+",
      label: "Samples Analyzed Across India",
      icon: ShieldCheck,
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/10 border-blue-500/20"
    },
    {
      value: "18,392+",
      label: "Violations Detected & Reported",
      icon: AlertTriangle,
      iconColor: "text-rose-400",
      iconBg: "bg-rose-500/10 border-rose-500/20"
    },
    {
      value: "1.2M+",
      label: "Lives Impacted Through Safer Food",
      icon: Users,
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/10 border-emerald-500/20"
    },
    {
      value: "95.6%",
      label: "AI Detection Accuracy Rate",
      icon: TrendingUp,
      iconColor: "text-amber-400",
      iconBg: "bg-amber-500/10 border-amber-500/20"
    }
  ];

  return (
    <div className="relative z-20 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14">
      <div className="rounded-3xl p-6 sm:p-8 bg-[#0a1426]/95 backdrop-blur-md border border-slate-800 shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className={`flex items-center gap-4 ${idx > 0 ? 'sm:pl-6 pt-4 sm:pt-0' : ''}`}>
                <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl ${item.iconBg} border flex items-center justify-center shrink-0`}>
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${item.iconColor}`} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll Cue matching Reference Image */}
        <div className="pt-4 text-center">
          <span className="text-[11px] text-slate-400 font-medium inline-flex items-center gap-1">
            Scroll to explore <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </span>
        </div>
      </div>
    </div>
  );
}
