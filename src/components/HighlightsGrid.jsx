import React from 'react';
import { highlightsList } from '../data/highlightsData';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HighlightsGrid({ setActiveTab }) {
  return (
    <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-capBlue-600 dark:text-capBlue-400 text-xs font-extrabold uppercase tracking-wider mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Architecture & Accountability</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Scientific Highlights
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
          Deep learning models, real-time event streaming, and explainable feature attributions engineered for food safety oversight.
        </p>
      </div>

      {/* 3-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {highlightsList.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveTab(item.tabLink)}
            className="rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-capBlue-300 dark:hover:border-capBlue-700 transition-all duration-300"
          >
            <div>
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 dark:bg-slate-950/90 text-capBlue-600 dark:text-capBlue-400 border border-slate-200 dark:border-slate-800 backdrop-blur-md">
                  {item.badge}
                </span>
              </div>

              <div className="p-6 space-y-2.5">
                <span className="text-[10px] font-extrabold text-amber-600 dark:text-amber-400 uppercase tracking-wider block">
                  {item.category}
                </span>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg leading-snug group-hover:text-capBlue-600 dark:group-hover:text-capBlue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2 flex items-center gap-1.5 text-xs font-bold text-capBlue-600 dark:text-capBlue-400 group-hover:text-capBlue-500 transition-colors">
              <span>{item.actionText}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
