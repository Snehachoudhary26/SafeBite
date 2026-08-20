import React, { useState } from 'react';
import { sampleVendors } from '../data/vendorsData';
import { Star, MapPin, Search, AlertTriangle } from 'lucide-react';

export default function VendorDirectory({ onOpenGrievance }) {
  const [search, setSearch] = useState('');

  const filtered = sampleVendors.filter((v) =>
    v.name.toLowerCase().includes(search.toLowerCase()) ||
    v.fssaiNumber.includes(search) ||
    v.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 text-left">
      <div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          <span>🏬</span> Verified Fast Food & Street Food Directory
        </h2>
        <p className="text-sm text-slate-700 dark:text-slate-300 mt-1 font-medium">
          Search food stalls by 14-digit FSSAI number, verify RUCO used oil disposal logs, and check crowdsourced hygiene audits.
        </p>
      </div>

      <div className="relative">
        <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by Stall Name, 14-digit FSSAI License, or Market..."
          className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white dark:bg-[#0a1426] border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 font-medium focus:outline-none focus:border-blue-500 shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((vendor) => (
          <div key={vendor.id} className="bg-white dark:bg-[#0a1426] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between space-y-4 shadow-md hover:shadow-xl transition-all">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg">{vendor.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{vendor.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-black shrink-0">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{vendor.overallScore}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                <span className="font-mono font-bold text-slate-700 dark:text-cyan-400">FSSAI: {vendor.fssaiNumber}</span>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  {vendor.fssaiStatus}
                </span>
              </div>

              <div className="space-y-2 text-xs pt-1">
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300">
                  <span className="text-slate-500">Oil Freshness:</span>
                  <span className="font-extrabold text-slate-900 dark:text-white">{vendor.hygieneMetrics.oilFreshness}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300">
                  <span className="text-slate-500">Water Source:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{vendor.hygieneMetrics.waterSource}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300">
                  <span className="text-slate-500">Staff Gloves/PPE:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{vendor.hygieneMetrics.staffHygiene}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {vendor.badges.map((b, idx) => (
                  <span key={idx} className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-300 border border-blue-200 dark:border-blue-800">
                    ✓ {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-semibold">{vendor.communityReviewsCount} Citizen Audits</span>
              <button
                onClick={onOpenGrievance}
                className="text-rose-600 dark:text-rose-400 font-bold hover:underline flex items-center gap-1"
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Flag Violation</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
