import React, { useState, useEffect } from 'react';
import { heroSlides } from '../data/heroSlidesData';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Activity, Sparkles, Scan, Eye } from 'lucide-react';

export default function SplitHeroBanner({ setActiveTab, onOpenGrievance }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = heroSlides[currentSlideIndex];

  // Auto-advance carousel every 6 seconds unless user is hovering
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div
      className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slateDark-900 via-slateDark-950 to-slateDark-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Bold Editorial Typography */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cobalt-600/15 border border-cobalt-500/30 text-cobalt-400 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amberGold-400 animate-pulse" />
              <span>{currentSlide.tag}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              {currentSlide.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              {currentSlide.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => setActiveTab(currentSlide.ctaTab)}
                className="px-6 py-3.5 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-cobalt-600/25 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <span>{currentSlide.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab(currentSlide.secondaryTab)}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700 flex items-center justify-center gap-2 transition-all"
              >
                <span>{currentSlide.secondaryText}</span>
              </button>
            </div>

            {/* Floating Live Metrics Row */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-800/80">
              <div>
                <span className="text-[11px] text-slate-400 block">Spark Processing</span>
                <span className="text-base sm:text-lg font-black text-white">18.4k msg/s</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block">TPC Legal Limit</span>
                <span className="text-base sm:text-lg font-black text-amberGold-400">25.0% Max</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block">Model Provenance</span>
                <span className="text-base sm:text-lg font-black text-emerald-400">100% XAI</span>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Cinematic DSLR Frame with HUD Overlays */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slateDark-900 group">
              {/* High-Resolution DSLR Photograph */}
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src={currentSlide.heroImage}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Animated Green/Blue Laser Scanline Effect */}
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cobalt-400 to-transparent opacity-75 animate-scanline pointer-events-none"></div>

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slateDark-950/90 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Floating Lab Diagnostic HUD (Bottom-Left) */}
              <div className="absolute bottom-4 left-4 right-4 cap-panel p-4 rounded-xl border border-slate-700/80 shadow-lg space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Scan className="w-4 h-4 text-cobalt-400 animate-spin" />
                    <span className="text-xs font-bold text-white">{currentSlide.hudTitle}</span>
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${currentSlide.hudStatusColor}`}>
                    {currentSlide.hudStatus}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-400 text-[11px]">{currentSlide.hudMetricLabel}:</span>
                  <span className="font-mono font-black text-amberGold-400 text-sm">{currentSlide.hudMetricValue}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Minimalist Pill Carousel Controls (Capgemini-Style) */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlideIndex === idx ? 'w-6 bg-cobalt-500' : 'w-2 bg-slate-700 hover:bg-slate-600'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
