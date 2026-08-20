import React, { useState } from 'react';
import { visionSampleCases } from '../data/visionSamplesData';
import { Eye, Sliders, Sparkles } from 'lucide-react';

export default function VisionToxinStudio() {
  const [selectedCase, setSelectedCase] = useState(visionSampleCases[0]);
  const [showGradCam, setShowGradCam] = useState(true);
  const [isScanning, setIsScanning] = useState(false);

  const handleSelect = (item) => {
    setIsScanning(true);
    setSelectedCase(item);
    setTimeout(() => setIsScanning(false), 450);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-rose-500/15 text-rose-400 border border-rose-500/25">🔬</span>
          Computer Vision Toxin & Carcinogen Studio
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Deep Vision Transformer (ViT) model analyzing RGB chromaticity, bubble turbulence, and illegal dye spectral signatures.
        </p>
      </div>

      {/* Case Pills */}
      <div className="flex flex-wrap gap-2">
        {visionSampleCases.map((item) => (
          <button
            key={item.id}
            onClick={() => handleSelect(item)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
              selectedCase.id === item.id
                ? 'bg-cobalt-600 text-white shadow-lg shadow-cobalt-600/25'
                : 'cap-card text-slate-300 hover:bg-slate-800'
            }`}
          >
            <span className="text-amberGold-400">{item.category}:</span>
            <span>{item.title.split('(')[0]}</span>
          </button>
        ))}
      </div>

      {/* Studio Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 cap-panel p-5 rounded-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-bold text-white text-sm flex items-center gap-2">
              <Eye className="w-4 h-4 text-cobalt-400" />
              Spectral Analysis Canvas
            </h3>

            <button
              onClick={() => setShowGradCam(!showGradCam)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                showGradCam
                  ? 'bg-cobalt-600/20 text-cobalt-300 border-cobalt-500/40'
                  : 'bg-slate-800 text-slate-400 border-slate-700'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{showGradCam ? 'Grad-CAM Heatmap: ON' : 'Raw RGB View'}</span>
            </button>
          </div>

          <div className="relative rounded-xl overflow-hidden aspect-video bg-slateDark-950 border border-slate-800 flex items-center justify-center">
            {isScanning ? (
              <div className="flex flex-col items-center gap-3 text-slate-400">
                <div className="w-8 h-8 border-2 border-cobalt-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-xs font-mono">Running ViT Convolutional Inference...</span>
              </div>
            ) : (
              <>
                <img
                  src={selectedCase.imageUrl}
                  alt={selectedCase.title}
                  className="w-full h-full object-cover"
                />

                {showGradCam && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-600/50 via-amberGold-500/30 to-cobalt-500/25 mix-blend-color-dodge pointer-events-none flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-rose-500/40 blur-2xl animate-pulse"></div>
                    <div className="absolute top-4 left-4 bg-slateDark-950/90 text-rose-300 text-[10px] font-mono px-2.5 py-1 rounded-md border border-rose-500/30">
                      Grad-CAM Saliency Region: Active (p &gt; 0.95)
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="p-3 rounded-xl bg-slateDark-900 border border-slate-800 text-xs">
            <span className="text-slate-400 block font-semibold mb-1">Explainability Logic (Grad-CAM Provenance):</span>
            <p className="text-slate-300 leading-relaxed font-mono text-[11px]">{selectedCase.gradCamExplanation}</p>
          </div>
        </div>

        {/* Right Diagnosis Panel */}
        <div className="lg:col-span-5 cap-panel p-5 rounded-2xl space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <h3 className="font-bold text-white text-sm">Biochemical Diagnostic Summary</h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 font-bold border border-rose-500/30">
                Confidence: {selectedCase.confidence}
              </span>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">Identified Anomaly</span>
                <span className="text-base font-extrabold text-rose-400">{selectedCase.prediction}</span>
              </div>

              {selectedCase.tpcEstimate !== 'N/A' && (
                <div className="p-3 rounded-xl bg-amberGold-500/10 border border-amberGold-500/20">
                  <span className="text-amberGold-300 block font-bold text-xs mb-0.5">Estimated Total Polar Compounds (TPC)</span>
                  <span className="text-lg font-black text-amberGold-400">{selectedCase.tpcEstimate}</span>
                </div>
              )}

              <div>
                <span className="text-slate-400 block text-[11px] font-semibold mb-1.5">Detected Carcinogens & Toxins:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCase.detectedCarcinogens.map((tox, i) => (
                    <span key={i} className="text-[11px] px-2 py-1 rounded-lg bg-rose-500/15 text-rose-300 border border-rose-500/25 font-mono">
                      ⚠️ {tox}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px] font-semibold mb-1">Human Health Impact</span>
                <p className="text-slate-300 leading-relaxed bg-slateDark-900 p-2.5 rounded-lg border border-slate-800">
                  {selectedCase.healthImpact}
                </p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs">
            <span className="text-emerald-400 block font-bold mb-0.5">Corrective Action / Solution:</span>
            <p className="text-emerald-200/90 text-[11px]">{selectedCase.safeAlternative}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
