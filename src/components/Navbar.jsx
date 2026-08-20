import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import { ShieldCheck, Sun, Moon, Menu, X, ChevronDown, Sparkles } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenGrievance, onOpenAuth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-darkBg-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Matching Reference */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 rounded-xl bg-safebite-600 flex items-center justify-center text-white shadow-md shadow-safebite-600/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">SafeBite</span>
                <span className="text-xl font-black text-safebite-600 dark:text-safebite-500">AI</span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium tracking-tight -mt-1">Food Safety. Every Bite.</p>
            </div>
          </div>

          {/* Nav Links Matching Reference */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold">
            <button
              onClick={() => setActiveTab('home')}
              className={`transition-colors relative py-1 ${
                activeTab === 'home'
                  ? 'text-safebite-600 dark:text-safebite-500 font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Home
              {activeTab === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-safebite-600 rounded-full"></span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('vision')}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Solutions</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setActiveTab('dart')}
              className={`transition-colors py-1 ${
                activeTab === 'dart' ? 'text-safebite-600 dark:text-safebite-500 font-bold' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              DIY Lab
            </button>

            <button
              onClick={() => setActiveTab('agents')}
              className={`transition-colors py-1 ${
                activeTab === 'agents' ? 'text-safebite-600 dark:text-safebite-500 font-bold' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Compliance
            </button>

            <button
              onClick={() => setActiveTab('streaming')}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Resources</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setActiveTab('directory')}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              About Us
            </button>
          </div>

          {/* Right Utilities Matching Reference */}
          <div className="flex items-center gap-3">
            {/* Theme Sun/Moon Switch */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              title={isDark ? "Switch to Clean Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            <button
              onClick={onOpenAuth}
              className="px-4 py-2 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Sign In
            </button>

            <button
              onClick={onOpenGrievance}
              className="px-5 py-2.5 rounded-full bg-safebite-600 hover:bg-safebite-700 text-white text-sm font-bold shadow-md shadow-safebite-600/20 transition-all active:scale-95"
            >
              Get Started
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-darkBg-950 px-4 py-4 space-y-2">
          {['home', 'vision', 'dart', 'agents', 'streaming', 'directory'].map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setMobileMenuOpen(false); }}
              className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 capitalize"
            >
              {tab === 'home' ? 'Home' : tab === 'vision' ? 'Solutions (AI Scanner)' : tab === 'dart' ? 'DIY Food Lab' : tab === 'agents' ? 'Compliance & Multi-Agent' : tab === 'streaming' ? 'Real-Time Telemetry' : 'About & Directory'}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
