import React from 'react';
import { ArrowRight, Sparkles, AlertTriangle, CheckCircle2, ShieldCheck, FlaskConical } from 'lucide-react';

export default function HeroExact({ setActiveTab }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 dark:from-darkBg-950 dark:via-darkBg-900 dark:to-darkBg-950 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/80 dark:border-slate-800">
      
      {/* Background Soft Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-safebite-500/10 dark:bg-safebite-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Exact Typography from Your Reference */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-safebite-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-safebite-600 dark:text-emerald-400" />
              <span>AI POWERED FOOD SAFETY PLATFORM</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08]">
              AI That Protects You From Every <span className="text-safebite-600 dark:text-safebite-500">Unsafe Bite</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              Detect toxic oils, banned dyes & adulteration in real-time. Empowering consumers, businesses & regulators with AI, Big Data & FSSAI compliance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => setActiveTab('vision')}
                className="px-7 py-3.5 rounded-full bg-safebite-600 hover:bg-safebite-700 text-white font-bold text-sm shadow-lg shadow-safebite-600/25 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <span>Scan Food Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('dart')}
                className="px-7 py-3.5 rounded-full bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm border border-slate-300 dark:border-slate-700 flex items-center justify-center gap-2 transition-all"
              >
                <span>Explore DIY Lab</span>
              </button>
            </div>

            {/* Social Proof: Avatars + 2.4M+ Users */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="User" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="User" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="User" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="User" />
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                Trusted by <span className="font-extrabold text-slate-900 dark:text-white">2.4M+ users</span> across India
              </div>
            </div>

          </div>

          {/* Right Column: Exact Smartphone Scanning Street Food Visual from Your Mockup */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Background Street Food Plate */}
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=900&auto=format&fit=crop&q=85"
                alt="Street Food Scan"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            </div>

            {/* Foreground Scanning Smartphone Card (Exact Layout from Image 1 & 2) */}
            <div className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 w-64 sm:w-72 phone-glass p-4 rounded-3xl border border-slate-700/80 shadow-2xl text-white space-y-3">
              
              {/* Card Header: Oil Quality */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-bold tracking-wider text-amber-400 uppercase">
                  <span>OIL QUALITY ANALYSIS</span>
                  <span>⚡</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-medium">TPC (Total Polar Compounds)</span>
                  <span className="text-xs font-black text-rose-400">32.6% High Risk</span>
                </div>

                {/* Progress Bar (0% to 40%) */}
                <div className="space-y-1">
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden flex">
                    <div className="h-full bg-emerald-500 w-[40%]"></div>
                    <div className="h-full bg-amber-500 w-[22.5%]"></div>
                    <div className="h-full bg-rose-500 w-[37.5%]"></div>
                  </div>
                  <div className="flex justify-between text-[8px] text-slate-400 font-mono">
                    <span>0%</span>
                    <span className="text-rose-400 font-bold">Limit 25%</span>
                    <span>40%</span>
                  </div>
                </div>
              </div>

              {/* Dye Detection with Thermal Grad-CAM */}
              <div className="p-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                  DYE DETECTION
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <div className="text-[10px] text-slate-400">Rhodamine B</div>
                    <div className="text-xs font-black text-rose-400">DETECTED</div>
                    <div className="text-[9px] text-slate-400">Confidence: 98.7%</div>
                  </div>

                  {/* Simulated Thermal Heatmap Box */}
                  <div className="w-14 h-12 rounded-xl thermal-grad border border-slate-700 shrink-0 shadow-inner flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white animate-ping"></div>
                  </div>
                </div>
              </div>

              {/* Overall Risk Badge */}
              <div className="p-2.5 rounded-2xl bg-rose-950/80 border border-rose-500/40 flex items-center gap-2.5">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
                <div>
                  <div className="text-xs font-black text-white leading-tight">High Risk</div>
                  <div className="text-[9px] text-rose-300">Unsafe for Consumption</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
