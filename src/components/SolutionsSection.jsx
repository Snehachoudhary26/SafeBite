import React from 'react';
import { Droplet, Beaker, Activity, FlaskConical, ArrowRight } from 'lucide-react';

export default function SolutionsSection({ setActiveTab }) {
  const solutions = [
    {
      id: "vision",
      tag: "Oil Quality Analysis",
      description: "Detect TPC, viscosity, smoke point & more using computer vision.",
      icon: Droplet,
      iconColor: "text-emerald-600 dark:text-emerald-400",
      iconBg: "bg-emerald-50 dark:bg-emerald-950/60",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "vision",
      tag: "Dye Detection (CV + XAI)",
      description: "Identify banned & harmful dyes with Grad-CAM heatmaps & explainable AI.",
      icon: Beaker,
      iconColor: "text-rose-600 dark:text-rose-400",
      iconBg: "bg-rose-50 dark:bg-rose-950/60",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "streaming",
      tag: "Real-Time Monitoring",
      description: "Live Kafka streams & multi-source data for instant violation alerts.",
      icon: Activity,
      iconColor: "text-blue-600 dark:text-blue-400",
      iconBg: "bg-blue-50 dark:bg-blue-950/60",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "dart",
      tag: "DIY Food Lab (DART)",
      description: "Step-by-step visual guides for testing food adulteration at home.",
      icon: FlaskConical,
      iconColor: "text-purple-600 dark:text-purple-400",
      iconBg: "bg-purple-50 dark:bg-purple-950/60",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header Matching Mockup */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-safebite-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            SMART SOLUTIONS FOR A SAFER TOMORROW
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-3">
            Advanced AI. Real Impact. <br />
            End-to-End <span className="text-safebite-600 dark:text-safebite-500">Food Safety</span>.
          </h2>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
          From real-time detection to DIY testing & compliance — our AI ecosystem ensures every bite is safe, traceable & transparent.
        </p>
      </div>

      {/* 4 Cards Grid Matching Mockup */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((sol, idx) => {
          const Icon = sol.icon;
          return (
            <div
              key={idx}
              onClick={() => setActiveTab(sol.id)}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between cursor-pointer hover:shadow-xl hover:border-safebite-500 dark:hover:border-safebite-500 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl ${sol.iconBg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${sol.iconColor}`} />
                  </div>
                  <div className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-safebite-600 group-hover:border-safebite-600 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                    {sol.tag}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2">
                    {sol.description}
                  </p>
                </div>
              </div>

              {/* Photo preview */}
              <div className="mt-6 aspect-video rounded-2xl overflow-hidden relative">
                <img src={sol.image} alt={sol.tag} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
