import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import { Shield, Cpu, Activity, Eye, Brain, Sparkles, Store, Menu, X, AlertTriangle, User, LogOut, Sun, Moon } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenGrievance, user, onOpenAuth, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { id: 'agents', label: 'Multi-Agent AI', icon: Cpu },
    { id: 'streaming', label: 'Kafka Telemetry', icon: Activity },
    { id: 'vision', label: 'Vision Toxin Lab', icon: Eye },
    { id: 'xai', label: 'Explainable AI', icon: Brain },
    { id: 'dart', label: 'DART Tests', icon: Sparkles },
    { id: 'directory', label: 'Certified Vendors', icon: Store }
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('agents')}>
            <div className="w-10 h-10 rounded-xl bg-capBlue-600 dark:bg-capBlue-500 flex items-center justify-center shadow-md shadow-capBlue-600/20 text-white font-black">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">SafeBite</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-capBlue-50 dark:bg-capBlue-900/40 text-capBlue-600 dark:text-capBlue-400 font-bold border border-capBlue-200 dark:border-capBlue-700">
                  AI Lab
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">Food Safety & Public Accountability Hub</p>
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
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-capBlue-50 dark:bg-capBlue-950/70 text-capBlue-600 dark:text-capBlue-400 border border-capBlue-200 dark:border-capBlue-800'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-capBlue-600 dark:text-capBlue-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Utilities & Light/Dark Switcher */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Sun/Moon Toggle Button (Capgemini Style) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              title={isDark ? "Switch to Clean Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {user ? (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                <User className="w-4 h-4 text-capBlue-600 dark:text-capBlue-400" />
                <span className="font-bold text-slate-800 dark:text-slate-200 hidden sm:inline">{user.name}</span>
                <button onClick={onLogout} title="Sign Out" className="text-slate-400 hover:text-rose-500 ml-1">
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-bold transition-all"
              >
                Sign In
              </button>
            )}

            <button
              onClick={onOpenGrievance}
              className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-rose-600/20 transition-all active:scale-95"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Report Toxin</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-3 pb-6 space-y-1.5 shadow-xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full px-4 py-3 rounded-xl text-sm font-bold flex items-center gap-3 ${
                  isActive
                    ? 'bg-capBlue-50 dark:bg-capBlue-950 text-capBlue-600 dark:text-capBlue-400 border border-capBlue-200 dark:border-capBlue-800'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-capBlue-600 dark:text-capBlue-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
