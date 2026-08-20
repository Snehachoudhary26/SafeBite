import React from 'react';
import { ArrowRight, FlaskConical, AlertTriangle, Droplet, Radio, Sparkles } from 'lucide-react';

export default function HeroReferenceMaster({ setActiveTab }) {
  return (
    <div className="relative overflow-hidden pt-8 pb-20 lg:pt-12 lg:pb-28 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Left Column + Center Scientist Image + Right 4 HUD Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* 1. Left Typography Column (Matching Image 1) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/30 text-blue-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400" />
              <span>AI POWERED FOOD SAFETY PLATFORM</span>
            </div>

            {/* Headline with guaranteed solid contrast in both Light & Dark modes */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.08]">
              AI That Protects You From Every <span className="text-blue-600 dark:text-blue-400">Unsafe Bite.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-800 dark:text-slate-300 leading-relaxed font-medium">
              Detect toxic oils, banned dyes & adulteration in real-time using AI, Big Data & Computer Vision. For a safer India.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => setActiveTab('vision')}
                className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <span>Scan Food Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('dart')}
                className="px-7 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-200 font-bold text-sm border border-slate-300 dark:border-slate-700 flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <FlaskConical className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                <span>Explore DIY Lab</span>
              </button>
            </div>

            {/* Social Proof Avatars */}
            <div className="flex items-center gap-3 pt-3">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="User" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="User" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="User" />
              </div>
              <div className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                Trusted by <span className="font-extrabold text-blue-600 dark:text-cyan-400">2.4M+ users</span> across India
              </div>
            </div>

          </div>

          {/* 2. Center & Right Columns (Food Scientist with Noodles + 4 HUD Cards) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Center: Scientist Inspecting Noodles Photo (matching Image 1) */}
            <div className="md:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700/80 bg-slate-900 aspect-[4/5] sm:aspect-square md:aspect-[4/5]">
              <img
                src="https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Food Scientist Testing Noodles"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            </div>

            {/* Right: 4 Stacked Live Diagnostic HUD Cards (matching Image 1 exactly) */}
            <div className="md:col-span-5 space-y-3">
              
              {/* CARD 1: Oil Quality Analysis */}
              <div className="p-3.5 rounded-2xl hud-panel-dark dark:hud-panel-dark hud-panel-light shadow-xl text-left space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-amber-500 dark:text-amber-400 font-bold text-[10px] uppercase tracking-wider">
                    <Droplet className="w-3.5 h-3.5" />
                    <span>OIL QUALITY ANALYSIS</span>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] text-slate-700 dark:text-slate-300 font-medium">TPC (Total Polar Compounds)</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-rose-500">32.6%</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-400">High Risk</span>
                  </div>
                </div>

                {/* Progress bar 0% to 40% */}
                <div className="space-y-0.5">
                  <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden flex">
                    <div className="h-full bg-emerald-500 w-[35%]"></div>
                    <div className="h-full bg-amber-500 w-[27.5%]"></div>
                    <div className="h-full bg-rose-500 w-[37.5%]"></div>
                  </div>
                  <div className="flex justify-between text-[8px] text-slate-500 dark:text-slate-400 font-mono">
                    <span>0%</span>
                    <span>40%</span>
                  </div>
                </div>

                {/* 3 Sub-Metrics */}
                <div className="grid grid-cols-3 gap-1 pt-1 border-t border-slate-200 dark:border-slate-800 text-[10px]">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block text-[8px]">Viscosity</span>
                    <span className="font-bold text-slate-900 dark:text-white">38.7 cP</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block text-[8px]">Smoke Point</span>
                    <span className="font-bold text-slate-900 dark:text-white">176°C</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block text-[8px]">Dark Index</span>
                    <span className="font-bold text-slate-900 dark:text-white">0.87</span>
                  </div>
                </div>
              </div>

              {/* CARD 2: Dye Detection with Rainbow Heatmap */}
              <div className="p-3 rounded-2xl hud-panel-dark dark:hud-panel-dark hud-panel-light shadow-xl text-left flex items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-1.5 text-blue-600 dark:text-cyan-400 font-bold text-[10px] uppercase tracking-wider mb-1">
                    <FlaskConical className="w-3.5 h-3.5" />
                    <span>DYE DETECTION</span>
                  </div>
                  <div className="text-[10px] text-slate-600 dark:text-slate-400">Rhodamine B</div>
                  <div className="text-xs font-black text-rose-500">DETECTED</div>
                  <div className="text-[9px] text-slate-500 dark:text-slate-400">Confidence: 98.7%</div>
                </div>

                {/* Thermal Rainbow Box */}
                <div className="w-14 h-12 rounded-xl thermal-heatmap-box border border-slate-700 shadow-inner shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white animate-ping"></div>
                </div>
              </div>

              {/* CARD 3: Overall Risk */}
              <div className="p-3 rounded-2xl bg-rose-950/80 dark:bg-rose-950/80 bg-rose-50 border border-rose-500/40 text-left flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0" />
                <div>
                  <div className="text-xs font-black text-rose-600 dark:text-rose-300">High Risk</div>
                  <div className="text-[10px] text-rose-700 dark:text-rose-200 font-medium">Unsafe for Consumption</div>
                </div>
              </div>

              {/* CARD 4: Live Kafka Telemetry */}
              <div className="p-3 rounded-2xl hud-panel-dark dark:hud-panel-dark hud-panel-light shadow-xl text-left space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-bold">
                  <span className="text-emerald-500 dark:text-emerald-400 flex items-center gap-1">
                    <Radio className="w-3 h-3 animate-pulse" />
                    LIVE KAFKA TELEMETRY
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                    • Live
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1 text-[10px] font-mono pt-1">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block text-[8px]">Events</span>
                    <span className="font-bold text-slate-900 dark:text-white">8,392</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block text-[8px]">Latency</span>
                    <span className="font-bold text-slate-900 dark:text-white">120 ms</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block text-[8px]">Sources</span>
                    <span className="font-bold text-slate-900 dark:text-white">98</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
