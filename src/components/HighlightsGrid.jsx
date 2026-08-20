import React from 'react';
import { highlightsList } from '../data/highlightsData';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HighlightsGrid({ setActiveTab }) {
  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-cobalt-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amberGold-400" />
            <span>Featured Pillars</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">System Highlights</h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 max-w-md">
          Groundbreaking scientific methodologies combining AI computer vision, autonomous legal reasoning, and public accountability.
        </p>
      </div>

      {/* 3-Column Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {highlightsList.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveTab(item.tabLink)}
            className="cap-card rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between group"
          >
            <div>
              {/* Crisp Photography */}
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-slateDark-950/80 text-cobalt-300 border border-cobalt-500/30 backdrop-blur-md">
                  {item.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-2">
                <span className="text-[11px] font-semibold text-amberGold-400 uppercase tracking-wide block">
                  {item.category}
                </span>
                <h3 className="font-extrabold text-white text-base sm:text-lg leading-snug group-hover:text-cobalt-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Action link */}
            <div className="px-5 pb-5 pt-2 flex items-center gap-1.5 text-xs font-bold text-cobalt-400 group-hover:text-cobalt-300 transition-colors">
              <span>{item.actionText}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
