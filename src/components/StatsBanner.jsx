import React from 'react';
import { Shield, AlertTriangle, Users, TrendingUp } from 'lucide-react';

export default function StatsBanner() {
  const stats = [
    {
      value: "2.4M+",
      label: "Samples Analyzed Across India",
      icon: Shield,
      iconColor: "text-emerald-600 dark:text-emerald-400",
      iconBg: "bg-emerald-50 dark:bg-emerald-950/60"
    },
    {
      value: "18,392+",
      label: "Violations Detected & Reported",
      icon: AlertTriangle,
      iconColor: "text-rose-600 dark:text-rose-400",
      iconBg: "bg-rose-50 dark:bg-rose-950/60"
    },
    {
      value: "1.2M+",
      label: "Lives Impacted Through Safer Food",
      icon: Users,
      iconColor: "text-blue-600 dark:text-blue-400",
      iconBg: "bg-blue-50 dark:bg-blue-950/60"
    },
    {
      value: "95.6%",
      label: "AI Detection Accuracy Rate",
      icon: TrendingUp,
      iconColor: "text-purple-600 dark:text-purple-400",
      iconBg: "bg-purple-50 dark:bg-purple-950/60"
    }
  ];

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-slate-800">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className={`flex items-center gap-4 ${idx > 0 ? 'sm:pl-6 pt-4 sm:pt-0' : ''}`}>
                <div className={`w-14 h-14 rounded-2xl ${stat.iconBg} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-7 h-7 ${stat.iconColor}`} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {stat.label}
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
