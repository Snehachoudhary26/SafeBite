import React, { useState } from 'react';
import { dartTests } from '../data/dartTestsData';
import { Clock, CheckCircle2, XCircle, Search } from 'lucide-react';

export default function DartLab() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const filteredTests = dartTests.filter((test) => {
    const matchesSearch = test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          test.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'ALL' || test.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amberGold-500/15 text-amberGold-400 border border-amberGold-500/25">🧪</span>
          FSSAI DART (Detect Adulteration with Rapid Test) Interactive Lab
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Perform quick 2-minute scientific tests at home using common household items to identify adulterated milk, honey, spices, and cooking oils.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tests (e.g. Milk, Honey, Turmeric, Oil)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slateDark-900 border border-slate-800 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cobalt-500"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {['ALL', 'Dairy', 'Honey', 'Spices', 'Oils'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-cobalt-600 text-white font-bold'
                  : 'bg-slateDark-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Test Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredTests.map((test) => (
          <div key={test.id} className="cap-panel p-5 rounded-2xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{test.icon}</span>
                  <div>
                    <span className="text-[10px] font-bold text-cobalt-400 uppercase tracking-wider">{test.category}</span>
                    <h3 className="font-extrabold text-white text-sm sm:text-base leading-tight">{test.title}</h3>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-slate-800 text-slate-300 flex items-center gap-1 shrink-0">
                  <Clock className="w-3 h-3 text-amberGold-400" />
                  {test.timeRequired}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slateDark-900 border border-slate-800 text-xs">
                <span className="text-slate-400 block font-semibold mb-1">Required Items:</span>
                <p className="text-slate-300 font-mono text-[11px]">{test.requiredMaterials}</p>
              </div>

              <div className="space-y-1.5 text-xs">
                <span className="text-slate-400 font-semibold block">Step-by-Step Instructions:</span>
                <ol className="list-decimal list-inside space-y-1 text-slate-300 text-[11px]">
                  {test.stepByStep.map((step, idx) => (
                    <li key={idx} className="leading-relaxed">{step}</li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Pass/Fail Indicator Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Pass (Pure)</span>
                </div>
                <p className="text-emerald-200/90 text-[10px] leading-tight">{test.passIndicator}</p>
              </div>

              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-1">
                <div className="flex items-center gap-1.5 text-rose-400 font-bold text-[11px]">
                  <XCircle className="w-3.5 h-3.5" />
                  <span>Fail (Adulterated)</span>
                </div>
                <p className="text-rose-200/90 text-[10px] leading-tight">{test.failIndicator}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
