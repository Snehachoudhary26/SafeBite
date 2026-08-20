import React, { useState } from 'react';
import { agentsList, sampleInvestigationCases } from '../data/agentsData';
import { Shield, Terminal, FileText, Send, RefreshCw, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AgentConsole({ onGenerateNotice }) {
  const [selectedCase, setSelectedCase] = useState(sampleInvestigationCases[0]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeStep, setActiveStep] = useState(4);

  const runSimulation = () => {
    setIsSimulating(true);
    setActiveStep(0);
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      setActiveStep(step);
      if (step >= 4) {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 750);
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-cobalt-600/15 text-cobalt-400 border border-cobalt-500/25">🤖</span>
            Autonomous Multi-Agent Accountability Network
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Four specialized AI agents cross-examine evidence, toxicological hazard levels, and legal statutes in real time.
          </p>
        </div>

        <button
          onClick={runSimulation}
          disabled={isSimulating}
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 disabled:opacity-50 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-cobalt-600/20 transition-all active:scale-95"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
          <span>{isSimulating ? 'Agents Deliberating...' : 'Re-Run Live AI Deliberation'}</span>
        </button>
      </div>

      {/* 4 Agent Nodes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {agentsList.map((agent) => (
          <div key={agent.id} className="cap-card p-4 rounded-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl">{agent.avatar}</div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${agent.badgeColor}`}>
                Active Node
              </span>
            </div>
            <h3 className="font-bold text-white text-sm">{agent.name}</h3>
            <p className="text-[11px] text-amberGold-400 font-medium mb-1.5">{agent.role}</p>
            <p className="text-xs text-slate-400 leading-relaxed">{agent.description}</p>
          </div>
        ))}
      </div>

      {/* Case Dossier & Live Stream Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Active Dossier Info */}
        <div className="cap-panel p-5 rounded-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-bold text-white text-sm flex items-center gap-2">
              <FileText className="w-4 h-4 text-cobalt-400" />
              Active Investigation Dossier
            </h3>
            <span className="text-xs font-mono text-slate-400">{selectedCase.id}</span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <span className="text-slate-400 block text-[11px]">Vendor Name</span>
              <span className="font-bold text-white text-sm">{selectedCase.vendorName}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Location & Market</span>
              <span className="text-slate-200">{selectedCase.location}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">FSSAI License #</span>
              <span className="font-mono text-cobalt-400 font-bold">{selectedCase.fssaiLicense}</span>
            </div>
            <div className="p-3 rounded-xl bg-slateDark-900 border border-slate-800">
              <span className="text-slate-400 block text-[11px] font-semibold mb-1">Citizen & IoT Flag</span>
              <p className="text-slate-200 leading-relaxed">{selectedCase.reportedIssue}</p>
            </div>
          </div>

          <div className="pt-2">
            <div className="flex items-center justify-between mb-1 text-xs">
              <span className="text-slate-400">Synthesized Risk Score:</span>
              <span className="font-black text-rose-400 text-base">{selectedCase.riskScore}% CRITICAL</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amberGold-500 to-rose-600 rounded-full transition-all duration-500"
                style={{ width: `${selectedCase.riskScore}%` }}
              ></div>
            </div>
          </div>

          <button
            onClick={() => onGenerateNotice(selectedCase)}
            className="w-full py-2.5 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-cobalt-600/20"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Generate FSSAI Statutory Notice</span>
          </button>
        </div>

        {/* Right: Live Agent Step Deliberations */}
        <div className="lg:col-span-2 cap-panel p-5 rounded-2xl flex flex-col">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-amberGold-400" />
              <h3 className="font-bold text-white text-sm">Agent Deliberation & Provenance Chain</h3>
            </div>
            <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
              Step {Math.min(activeStep, 4)} / 4
            </span>
          </div>

          <div className="space-y-3 flex-1 overflow-y-auto max-h-[380px] pr-1">
            {selectedCase.aiDeliberation.map((delib, idx) => {
              const agentMeta = agentsList.find((a) => a.id === delib.agent);
              const isVisible = idx < activeStep;

              if (!isVisible) {
                return (
                  <div key={idx} className="p-3 rounded-xl border border-dashed border-slate-800 bg-slateDark-950/40 text-slate-500 text-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-700 animate-pulse"></span>
                    <span>Waiting for {agentMeta?.name} evaluation...</span>
                  </div>
                );
              }

              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slateDark-900 border border-slate-800 space-y-1.5 animate-in fade-in slide-in-from-bottom-2 duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{agentMeta?.avatar}</span>
                      <span className="font-bold text-white text-xs">{agentMeta?.name}</span>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        delib.status.includes('CRITICAL') || delib.status.includes('VIOLATION')
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                          : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      }`}
                    >
                      {delib.status}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-300 leading-relaxed bg-slateDark-950 p-2.5 rounded-lg border border-slate-800">
                    {delib.log}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
