import React, { useState } from 'react';
import { ShieldCheck, Cpu, Activity, Eye, Brain, FlaskConical, Store, Menu, X, AlertTriangle } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenGrievance }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'agents', label: 'AI Multi-Agent', icon: Cpu, badge: 'Active' },
    { id: 'streaming', label: 'Kafka Telemetry', icon: Activity, badge: 'Live' },
    { id: 'vision', label: 'Vision Toxin Lab', icon: Eye },
    { id: 'xai', label: 'Explainable AI', icon: Brain },
    { id: 'dart', label: 'DART Home Tests', icon: FlaskConical },
    { id: 'directory', label: 'Certified Vendors', icon: Store }
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 cap-panel border-b border-slate-800 bg-slateDark-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('agents')}>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-cobalt-700 via-cobalt-600 to-amberGold-500 flex items-center justify-center shadow-lg shadow-cobalt-600/30 text-white font-black">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white">SafeBite</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cobalt-500/15 text-cobalt-400 font-bold border border-cobalt-500/30">
                  Enterprise AI
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Food Safety & Public Accountability Hub</p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`relative px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'bg-cobalt-600/20 text-cobalt-400 border border-cobalt-500/40 shadow-sm'
                      : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cobalt-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 font-bold animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Action & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenGrievance}
              className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-amberGold-600 to-rose-600 hover:from-amberGold-500 hover:to-rose-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-amberGold-600/20 transition-all active:scale-95"
            >
              <AlertTriangle className="w-4 h-4 animate-bounce" />
              <span>Report Toxin</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slateDark-950/98 px-4 pt-3 pb-6 space-y-1.5 animate-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
                  isActive
                    ? 'bg-cobalt-600/25 text-cobalt-400 border border-cobalt-500/40 font-bold'
                    : 'text-slate-300 hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-cobalt-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
