import React from 'react';
import { ShieldCheck, Heart, Github, ExternalLink } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="border-t border-slate-800 bg-slateDark-950/90 text-slate-400 text-xs py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <ShieldCheck className="w-5 h-5 text-cobalt-400" />
              <span>SafeBite AI</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Open-source Public Accountability & Food Safety ecosystem powered by Multi-Agent AI, Real-time Kafka Streaming, and FSSAI DART protocols.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs mb-3">AI & Big Data Architecture</h4>
            <ul className="space-y-2 text-[11px]">
              <li><button onClick={() => setActiveTab('agents')} className="hover:text-cobalt-400">Autonomous Multi-Agent Audit</button></li>
              <li><button onClick={() => setActiveTab('streaming')} className="hover:text-cobalt-400">Kafka Streaming Ingestion</button></li>
              <li><button onClick={() => setActiveTab('vision')} className="hover:text-cobalt-400">Vision Toxin & Grad-CAM Studio</button></li>
              <li><button onClick={() => setActiveTab('xai')} className="hover:text-cobalt-400">Explainable AI (TreeSHAP)</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs mb-3">Citizen & Statutory Tools</h4>
            <ul className="space-y-2 text-[11px]">
              <li><button onClick={() => setActiveTab('dart')} className="hover:text-cobalt-400">FSSAI DART Home Testing</button></li>
              <li><button onClick={() => setActiveTab('directory')} className="hover:text-cobalt-400">Verified Vendors & RUCO</button></li>
              <li><a href="https://foscos.fssai.gov.in/" target="_blank" rel="noreferrer" className="hover:text-cobalt-400 flex items-center gap-1">FSSAI FoSCoS Portal <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="https://eatrightindia.gov.in/" target="_blank" rel="noreferrer" className="hover:text-cobalt-400 flex items-center gap-1">Eat Right India <ExternalLink className="w-3 h-3" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs mb-3">Legal & Disclaimers</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              All statutory references map to the Food Safety and Standards Act, 2006. AI predictions serve as decision support tools for designated food safety authorities and citizens.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
          <p>© 2026 SafeBite Enterprise. Engineered for Public Health & Transparency.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Snehachoudhary26/SafeBite" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1 font-mono">
              <Github className="w-3.5 h-3.5" />
              <span>Snehachoudhary26/SafeBite</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
