import React from 'react';
import { xaiRiskModelDetails, sampleShapFeatures } from '../data/xaiData';
import { Brain, BarChart2, Info } from 'lucide-react';

export default function XAIInspector() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-cobalt-600/15 text-cobalt-400 border border-cobalt-500/25">🧠</span>
          Explainable AI (XAI) & Mathematical Accountability
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          No "Black Box" algorithms. SafeBite uses TreeSHAP feature attributions so inspectors, vendors, and citizens see the exact rationale behind every prediction.
        </p>
      </div>

      {/* Model Specs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="cap-card p-4 rounded-xl">
          <div className="text-xs text-slate-400">Architecture</div>
          <div className="font-bold text-white text-sm mt-1">{xaiRiskModelDetails.modelArchitecture}</div>
        </div>
        <div className="cap-card p-4 rounded-xl">
          <div className="text-xs text-slate-400">Training Provenance</div>
          <div className="font-bold text-emerald-400 text-sm mt-1">{xaiRiskModelDetails.trainingDatasetSize}</div>
        </div>
        <div className="cap-card p-4 rounded-xl">
          <div className="text-xs text-slate-400">Demographic Fairness Metric</div>
          <div className="font-bold text-cobalt-400 text-sm mt-1">Equalized Odds 0.98 (Zero Bias)</div>
        </div>
      </div>

      {/* SHAP Feature Waterfall */}
      <div className="cap-panel p-5 sm:p-6 rounded-2xl space-y-5">
        <div className="border-b border-slate-800 pb-3">
          <h3 className="font-bold text-white text-base flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-cobalt-400" />
            SHAP Feature Attribution Breakdown (Sample High-Risk Vendor)
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Base Risk: 20.0% ➔ Synthesized Final Risk: <span className="text-rose-400 font-bold">84% (High Priority Audit Flag)</span>
          </p>
        </div>

        <div className="space-y-3.5">
          {sampleShapFeatures.map((item, idx) => {
            const isRisk = item.impact.includes('RISK');
            return (
              <div key={idx} className="p-3.5 rounded-xl bg-slateDark-900 border border-slate-800 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-bold text-white text-xs sm:text-sm">{item.feature}</span>
                  <span
                    className={`font-mono text-xs font-extrabold px-2.5 py-0.5 rounded-full w-fit ${
                      isRisk
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    }`}
                  >
                    SHAP Impact: {item.contribution}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Human In The Loop Notice */}
        <div className="p-4 rounded-xl bg-cobalt-950/50 border border-cobalt-500/30 text-xs text-cobalt-200 flex items-start gap-3">
          <Info className="w-5 h-5 text-cobalt-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block text-white mb-0.5">Human-in-the-Loop (HITL) Statutory Safeguard</span>
            AI predictions above 80% risk automatically trigger a physical inspection ticket for an FSSAI Food Safety Officer (FSO). No automated penalties or closures can be executed without physical lab corroboration.
          </div>
        </div>
      </div>
    </div>
  );
}
