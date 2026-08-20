import React, { useState } from 'react';
import { Scan, AlertTriangle, ShieldCheck, Sparkles, Check, ChevronRight } from 'lucide-react';

export const foodScanItems = [
  {
    id: "samosa-oil",
    name: "Street Samosa & Deep Fryer Oil",
    category: "Frying Oil & Snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=85",
    riskLevel: "CRITICAL HAZARD",
    riskColor: "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/80 border-rose-200 dark:border-rose-800",
    tpcValue: "34.8% TPC",
    detectedIssue: "Cooking oil repeatedly reheated for >72 hours without replacement.",
    healthHazard: "Severe cellular toxicity, polycyclic aromatic hydrocarbons (PAHs), high cancer risk.",
    boxes: [
      { top: "35%", left: "25%", width: "45%", height: "40%", label: "CRITICAL: Reheated Oil (TPC 34.8%)", color: "border-rose-500 bg-rose-500/20 text-rose-300" }
    ]
  },
  {
    id: "manchurian-dye",
    name: "Street Red Manchurian & Momo Gravy",
    category: "Street Fast Food",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=85",
    riskLevel: "BANNED DYE DETECTED",
    riskColor: "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/80 border-rose-200 dark:border-rose-800",
    tpcValue: "N/A",
    detectedIssue: "Fluorescent textile dye Rhodamine-B used for intense red appearance.",
    healthHazard: "Severe liver damage (hepatotoxicity), cellular mutation, banned under FSSAI rules.",
    boxes: [
      { top: "30%", left: "30%", width: "40%", height: "45%", label: "ILLEGAL: Rhodamine-B Dye (96.4% Match)", color: "border-rose-500 bg-rose-500/20 text-rose-300" }
    ]
  },
  {
    id: "street-paneer",
    name: "Street Dairy Paneer & Khoya",
    category: "Dairy Staples",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&auto=format&fit=crop&q=85",
    riskLevel: "ADULTERANT CONFIRMED",
    riskColor: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/80 border-amber-200 dark:border-amber-800",
    tpcValue: "N/A",
    detectedIssue: "Potato starch and synthetic emulsifier added to fake fat content.",
    healthHazard: "Loss of essential nutrition, gastrointestinal irritation, synthetic chemical ingestion.",
    boxes: [
      { top: "25%", left: "20%", width: "55%", height: "50%", label: "WARNING: Starch Adulteration (Iodine Positive)", color: "border-amber-500 bg-amber-500/20 text-amber-300" }
    ]
  }
];

export default function InteractiveFoodScanner() {
  const [selectedFood, setSelectedFood] = useState(foodScanItems[0]);

  return (
    <div className="py-12 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs font-black uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Interactive Street Food AI Scanner</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Click Any Street Food to Inspect for Carcinogens & Toxins
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            See how our Vision AI model scans real street snacks, frying oils, and gravies with real-time bounding box detection.
          </p>
        </div>

        {/* Food Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {foodScanItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedFood(item)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                selectedFood.id === item.id
                  ? 'bg-capBlue-600 text-white shadow-lg shadow-capBlue-600/25 scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* Main Scanner Visual Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
          
          {/* Left: Food Photo with Live AI Bounding Box */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 border border-slate-800 shadow-inner group">
            <img
              src={selectedFood.image}
              alt={selectedFood.name}
              className="w-full h-full object-cover"
            />

            {/* Simulated AI Scanline */}
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-90 laser-scan pointer-events-none"></div>

            {/* Dynamic AI Bounding Boxes */}
            {selectedFood.boxes.map((box, idx) => (
              <div
                key={idx}
                className={`absolute border-2 rounded-xl flex flex-col justify-between p-2 font-mono text-[10px] font-bold ${box.color} animate-pulse`}
                style={{ top: box.top, left: box.left, width: box.width, height: box.height }}
              >
                <span className="bg-slate-950/90 px-2 py-0.5 rounded border border-rose-500/50 w-fit text-white">
                  🔍 {box.label}
                </span>
                <span className="self-end bg-rose-600 text-white text-[9px] px-1.5 py-0.5 rounded">
                  AI Confidence: 97.4%
                </span>
              </div>
            ))}
          </div>

          {/* Right: Diagnostic Analysis Details */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">{selectedFood.category}</span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">{selectedFood.name}</h3>
              <span className={`inline-block mt-2 text-xs font-black px-3 py-1 rounded-full border ${selectedFood.riskColor}`}>
                ⚠️ {selectedFood.riskLevel}
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-400 block font-bold text-[10px] uppercase mb-1">Detected Adulteration Issue</span>
                <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">{selectedFood.detectedIssue}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800">
                <span className="text-rose-600 dark:text-rose-400 block font-bold text-[10px] uppercase mb-1">Public Health Impact</span>
                <p className="text-rose-900 dark:text-rose-200 font-medium leading-relaxed">{selectedFood.healthHazard}</p>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-slate-400 font-bold block mb-1">FSSAI Legal Action Standard:</span>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-mono">
                Mandatory seizure and penalty under Section 59 of Food Safety & Standards Act, 2006.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
