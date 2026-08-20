import React, { useState, useEffect } from 'react';
import { heroSlides } from '../data/heroSlidesData';
import { ChevronLeft, ChevronRight, ArrowRight, Activity, Sparkles, AlertTriangle } from 'lucide-react';

export default function SplitHeroBanner({ setActiveTab }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = heroSlides[currentIndex];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs font-black tracking-wide uppercase">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>{currentSlide.tag}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              {currentSlide.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              {currentSlide.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => setActiveTab(currentSlide.ctaTab)}
                className="px-6 py-3.5 rounded-xl bg-capBlue-600 hover:bg-capBlue-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-capBlue-600/20 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <span>{currentSlide.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab(currentSlide.secondaryTab)}
                className="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm border border-slate-300 dark:border-slate-700 flex items-center justify-center gap-2 transition-all"
              >
                <span>{currentSlide.secondaryText}</span>
              </button>
            </div>

            {/* Micro Stats */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Throughput</span>
                <span className="text-base sm:text-lg font-black text-slate-900 dark:text-white">18.4k msg/s</span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">TPC Threshold</span>
                <span className="text-base sm:text-lg font-black text-rose-600 dark:text-rose-400">25.0% Max</span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Accountability</span>
                <span className="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400">100% XAI</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Food Preparation & AI Scan HUD */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 group">
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  key={currentSlide.id}
                  src={currentSlide.heroImage}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Laser scanline overlay */}
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-80 laser-scan pointer-events-none"></div>

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Food Diagnostic HUD overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-rose-600 dark:text-rose-400 animate-pulse" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white">{currentSlide.hudTitle}</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800">
                    {currentSlide.hudBadge}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <div>
                    <span className="text-slate-400 text-[10px] block">{currentSlide.metric1Label}</span>
                    <span className="font-mono font-black text-rose-600 dark:text-rose-400 text-sm">{currentSlide.metric1}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">{currentSlide.metric2Label}</span>
                    <span className="font-mono font-black text-slate-900 dark:text-cyan-400 text-sm">{currentSlide.metric2}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
            className="p-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-sm"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-capBlue-600' : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % heroSlides.length)}
            className="p-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-sm"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
