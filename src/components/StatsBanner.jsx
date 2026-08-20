import React from 'react';
import { ShieldCheck, AlertTriangle, Users, TrendingUp } from 'lucide-react';

export default function StatsBanner() {
  const stats = [
    {
      value: "2.4M+",
      label: "Samples Analyzed Across India",
      icon: ShieldCheck,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10 border-blue-500/20"
    },
    {
      value: "18,392+",
      label: "Violations Detected & Reported",
      icon: AlertTriangle,
      iconColor: "text-rose-500",
      iconBg: "bg-rose-500/10 border-rose-500/20"
    },
    {
      value: "1.2M+",
      label: "Lives Impacted Through Safer Food",
      icon: Users,
      iconColor: "text-emerald-500",
      iconBg: "bg-emerald-500/10 border-emerald-500/20"
    },
    {
      value: "95.6%",
      label: "AI Detection Accuracy Rate",
      icon: TrendingUp,
      iconColor: "text-amber-500",
      iconBg: "bg-amber-500/10 border-amber-500/20"
    }
  ];

  return (
    <div className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12">
      <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#0a1426] border border-slate-200 dark:border-slate-800 shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-800/80">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className={`flex items-center gap-4 ${idx > 0 ? 'sm:pl-6 pt-4 sm:pt-0' : ''}`}>
                <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl ${item.iconBg} border flex items-center justify-center shrink-0`}>
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${item.iconColor}`} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-0.5">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
