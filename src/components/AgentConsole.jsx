import React, { useState } from 'react';
import { agentsList, sampleInvestigationCases } from '../data/agentsData';
import { Terminal, FileText, Send, RefreshCw, Sparkles, CheckCircle } from 'lucide-react';

export default function AgentConsole({ onGenerateNotice }) {
  const [selectedCase] = useState(sampleInvestigationCases[0]);
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
    }, 700);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-capBlue-50 dark:bg-capBlue-950 text-capBlue-600 dark:text-capBlue-400 border border-capBlue-200 dark:border-capBlue-800">🤖</span>
            Autonomous Multi-Agent Accountability Network
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Four specialized AI agents cross-examine evidence, toxicological hazard levels, and legal statutes in real time.
          </p>
        </div>

        <button
          onClick={runSimulation}
          disabled={isSimulating}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-capBlue-600 hover:bg-capBlue-500 disabled:opacity-50 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-capBlue-600/20 transition-all active:scale-95"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
          <span>{isSimulating ? 'Agents Deliberating...' : 'Re-Run Live AI Deliberation'}</span>
        </button>
      </div>

      {/* 4 Agent Nodes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {agentsList.map((agent) => (
          <div key={agent.id} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-3xl">{agent.avatar}</div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                Active Node
              </span>
            </div>
            <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">{agent.name}</h3>
            <p className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold">{agent.role}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{agent.description}</p>
          </div>
        ))}
      </div>

      {/* Case Dossier & Live Stream Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Active Dossier Info */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
              <FileText className="w-4 h-4 text-capBlue-600" />
              Active Investigation Dossier
            </h3>
            <span className="text-xs font-mono text-slate-400">{selectedCase.id}</span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Vendor Name</span>
              <span className="font-bold text-slate-900 dark:text-white text-sm">{selectedCase.vendorName}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Location & Market</span>
              <span className="text-slate-700 dark:text-slate-300 font-medium">{selectedCase.location}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">FSSAI License #</span>
              <span className="font-mono text-capBlue-600 dark:text-capBlue-400 font-bold">{selectedCase.fssaiLicense}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-400 block text-[10px] font-bold uppercase mb-1">Citizen & IoT Flag</span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{selectedCase.reportedIssue}</p>
            </div>
          </div>

          <div className="pt-2">
            <div className="flex items-center justify-between mb-1.5 text-xs">
              <span className="text-slate-500 dark:text-slate-400 font-bold">Synthesized Risk Score:</span>
              <span className="font-black text-rose-600 dark:text-rose-400 text-sm">{selectedCase.riskScore}% CRITICAL</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-rose-600 rounded-full transition-all duration-500"
                style={{ width: `${selectedCase.riskScore}%` }}
              ></div>
            </div>
          </div>

          <button
            onClick={() => onGenerateNotice(selectedCase)}
            className="w-full py-3 rounded-xl bg-capBlue-600 hover:bg-capBlue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Generate FSSAI Statutory Notice</span>
          </button>
        </div>

        {/* Right: Live Agent Step Deliberations */}
        <div className="lg:col-span-2 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-amber-500" />
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Agent Deliberation & Provenance Chain</h3>
            </div>
            <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">
              Step {Math.min(activeStep, 4)} / 4
            </span>
          </div>

          <div className="space-y-3.5 flex-1 overflow-y-auto max-h-[390px] pr-1">
            {selectedCase.aiDeliberation.map((delib, idx) => {
              const agentMeta = agentsList.find((a) => a.id === delib.agent);
              const isVisible = idx < activeStep;

              if (!isVisible) {
                return (
                  <div key={idx} className="p-3.5 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-400 text-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-pulse"></span>
                    <span>Waiting for {agentMeta?.name} evaluation...</span>
                  </div>
                );
              }

              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2 animate-in fade-in duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{agentMeta?.avatar}</span>
                      <span className="font-bold text-slate-900 dark:text-white text-xs">{agentMeta?.name}</span>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        delib.status.includes('CRITICAL') || delib.status.includes('VIOLATION')
                          ? 'bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800'
                          : 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                      }`}
                    >
                      {delib.status}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-700 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
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
