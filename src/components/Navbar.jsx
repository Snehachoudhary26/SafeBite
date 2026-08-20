import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import { ShieldCheck, Sun, Moon, Menu, X, AlertTriangle, Sparkles, User, LogOut } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenGrievance, onOpenAuth, user, onLogout }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'agents', label: 'Multi-Agent AI' },
    { id: 'streaming', label: 'Kafka Telemetry' },
    { id: 'vision', label: 'Vision Toxin Lab' },
    { id: 'xai', label: 'Explainable AI' },
    { id: 'dart', label: 'DART DIY Lab' },
    { id: 'directory', label: 'Certified Vendors' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#060d1d]/90 dark:bg-[#060d1d]/90 bg-white/95 border-b border-slate-200 dark:border-slate-800/80 backdrop-blur-md transition-colors">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo Matching Image 1 */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/25">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">SafeBite</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-600 dark:text-cyan-400 font-extrabold border border-blue-500/30">
                  AI Lab
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Food Safety & Public Accountability Hub</p>
            </div>
          </div>

          {/* Nav Items Matching Image 1 */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right Action Utilities Matching Image 1 */}
          <div className="flex items-center gap-3">
            {/* Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
              title="Toggle Light/Dark Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {user ? (
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                <User className="w-4 h-4 text-blue-500" />
                <span className="font-bold text-slate-800 dark:text-slate-200">{user.name}</span>
                <button onClick={onLogout} title="Sign Out" className="text-slate-400 hover:text-rose-500 ml-1">
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 transition-all"
              >
                Sign In
              </button>
            )}

            <button
              onClick={onOpenGrievance}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all active:scale-95"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Report Toxin</span>
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#060d1d] px-4 py-4 space-y-1.5 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setMobileOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
