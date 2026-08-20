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
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-cobalt-600/15 text-cobalt-400 border border-cobalt-500/25">🏬</span>
          Verified Fast Food & Street Food Directory
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Search food stalls by 14-digit FSSAI number, verify RUCO used oil disposal logs, and check crowdsourced hygiene audits.
        </p>
      </div>

      {/* Search bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by Vendor Name, FSSAI License Number (e.g. 13322005001142), or Market..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slateDark-900 border border-slate-800 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cobalt-500"
        />
      </div>

      {/* Vendors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((vendor) => (
          <div key={vendor.id} className="cap-panel p-5 rounded-2xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-extrabold text-white text-base">{vendor.name}</h3>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{vendor.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-amberGold-500/15 border border-amberGold-500/30 text-amberGold-300 text-xs font-bold shrink-0">
                  <Star className="w-3.5 h-3.5 fill-amberGold-400 text-amberGold-400" />
                  <span>{vendor.overallScore}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-slateDark-900 border border-slate-800">
                <span className="text-slate-400 font-mono text-[11px]">FSSAI: {vendor.fssaiNumber}</span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    vendor.fssaiStatus === 'VERIFIED'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-amberGold-500/20 text-amberGold-300 border border-amberGold-500/30'
                  }`}
                >
                  {vendor.fssaiStatus}
                </span>
              </div>

              {/* Hygiene Metrics */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Oil Freshness:</span>
                  <span className="font-bold text-white">{vendor.hygieneMetrics.oilFreshness}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Water Source:</span>
                  <span className="text-slate-200">{vendor.hygieneMetrics.waterSource}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Staff PPE / Gloves:</span>
                  <span className="text-slate-200">{vendor.hygieneMetrics.staffHygiene}</span>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {vendor.badges.map((b, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-cobalt-500/15 text-cobalt-300 border border-cobalt-500/25 font-medium">
                    ✓ {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400 text-[11px]">{vendor.communityReviewsCount} Citizen Audits</span>
              <button
                onClick={onOpenGrievance}
                className="text-rose-400 hover:text-rose-300 text-xs font-semibold flex items-center gap-1"
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Flag Issue</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
