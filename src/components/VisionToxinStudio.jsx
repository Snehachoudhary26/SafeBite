import React, { useState } from 'react';
import { visionSampleCases } from '../data/visionSamplesData';
import { Eye, Sliders, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function VisionToxinStudio() {
  const [selectedCase, setSelectedCase] = useState(visionSampleCases[0]);
  const [showGradCam, setShowGradCam] = useState(true);

  return (
    <div className="space-y-8 text-left">
      <div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          <span>🔬</span> Computer Vision Toxin & Carcinogen Studio
        </h2>
        <p className="text-sm text-slate-700 dark:text-slate-300 mt-1 font-medium">
          Deep Vision Transformer (ViT) model analyzing RGB chromaticity, bubble turbulence, and illegal dye spectral signatures.
        </p>
      </div>

      {/* Case Selector Pills */}
      <div className="flex flex-wrap gap-2.5">
        {visionSampleCases.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedCase(item)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCase.id === item.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-white dark:bg-[#0a1426] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {item.category}: {item.title.split('(')[0]}
          </button>
        ))}
      </div>

      {/* Studio Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-white dark:bg-[#0a1426] p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
              <Eye className="w-4 h-4 text-blue-500" />
              Spectral Analysis Canvas
            </h3>

            <button
              onClick={() => setShowGradCam(!showGradCam)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all ${
                showGradCam
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/25'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{showGradCam ? 'Grad-CAM Heatmap: ON' : 'Raw RGB View'}</span>
            </button>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-950 border border-slate-800 flex items-center justify-center">
            <img
              src={selectedCase.imageUrl}
              alt={selectedCase.title}
              className="w-full h-full object-cover"
            />

            {showGradCam && (
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-600/50 via-amber-500/35 to-blue-500/30 mix-blend-color-dodge pointer-events-none flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-rose-500/40 blur-2xl animate-pulse"></div>
                <div className="absolute top-4 left-4 bg-slate-950/90 text-rose-300 text-[10px] font-mono px-3 py-1 rounded-md border border-rose-500/40">
                  Grad-CAM Saliency: Active (p &gt; 0.95)
                </div>
              </div>
            )}
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
            <span className="text-slate-500 dark:text-slate-400 block font-bold mb-1 uppercase text-[10px]">Explainability Logic (Grad-CAM):</span>
            <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-mono">{selectedCase.gradCamExplanation}</p>
          </div>
        </div>

        {/* Right Summary */}
        <div className="lg:col-span-5 bg-white dark:bg-[#0a1426] p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Diagnostic Findings</h3>
              <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30">
                Confidence: {selectedCase.confidence}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Identified Hazard</span>
              <span className="text-lg font-black text-rose-600 dark:text-rose-400">{selectedCase.prediction}</span>
            </div>

            {selectedCase.tpcEstimate !== 'N/A' && (
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                <span className="text-amber-700 dark:text-amber-300 block font-bold text-xs">Estimated TPC (Total Polar Compounds)</span>
                <span className="text-xl font-black text-amber-600 dark:text-amber-400">{selectedCase.tpcEstimate}</span>
              </div>
            )}

            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1.5">Detected Carcinogens:</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedCase.detectedCarcinogens.map((tox, i) => (
                  <span key={i} className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                    ⚠️ {tox}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Human Health Impact</span>
              <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">{selectedCase.healthImpact}</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs">
            <span className="text-emerald-700 dark:text-emerald-400 block font-bold mb-0.5">Corrective Action / Solution:</span>
            <p className="text-emerald-900 dark:text-emerald-200 font-medium">{selectedCase.safeAlternative}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
