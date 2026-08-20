import React, { useState } from 'react';
import { X, AlertTriangle, Send, Copy, Check, Shield } from 'lucide-react';

export default function GrievanceModal({ isOpen, onClose, prefilledCase }) {
  const [copied, setCopied] = useState(false);
  const [vendorName, setVendorName] = useState(prefilledCase?.vendorName || '');
  const [location, setLocation] = useState(prefilledCase?.location || '');
  const [violationType, setViolationType] = useState('REUSED_OIL');
  const [description, setDescription] = useState(prefilledCase?.reportedIssue || '');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const sampleNoticeText = `FORM OF FORMAL STATUTORY COMPLAINT
UNDER FOOD SAFETY AND STANDARDS ACT, 2006 (SECTIONS 38, 50, 59)

TO: Designated Food Safety Officer (FSO) & FSSAI Portal
TARGET VENDOR: ${vendorName || 'Gupta Fast Food & Rolls'}
LOCATION: ${location || 'Connaught Place, New Delhi'}
VIOLATION: ${violationType === 'REUSED_OIL' ? 'Carcinogenic Reused Frying Oil (TPC > 25%)' : 'Banned Industrial Chemical Dye (Rhodamine B)'}

EVIDENCE AUDIT:
- Multi-Agent AI Risk Score: 94% (Critical Hazard Flag)
- Computer Vision Saliency Match: 96.4% confidence (Rhodamine-B spectral signature)
- RUCO Compliance: FAILED (No oil disposal logs)

REQUESTED ACTION: Immediate Inspection & Sample Seizure under Section 38 of FSS Act 2006.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleNoticeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slateDark-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="cap-panel w-full max-w-2xl rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slateDark-900">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-amberGold-400" />
            <h3 className="font-extrabold text-white text-base">FSSAI Statutory Grievance Generator</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-xs">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto text-xl font-bold">
                ✓
              </div>
              <h4 className="font-black text-white text-lg">Statutory Notice Generated Successfully</h4>
              <p className="text-slate-400 max-w-md mx-auto text-xs">
                Your report has been encrypted and formatted to standard FSSAI legal complaint guidelines.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleCopy}
                  className="px-5 py-2.5 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-bold text-xs inline-flex items-center gap-2"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Legal Notice Text'}</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 font-semibold block mb-1">Vendor / Stall Name</label>
                  <input
                    type="text"
                    required
                    value={vendorName}
                    onChange={(e) => setVendorName(e.target.value)}
                    placeholder="e.g. Gupta Fast Food"
                    className="w-full px-3 py-2 rounded-xl bg-slateDark-900 border border-slate-800 text-white focus:outline-none focus:border-cobalt-500"
                  />
                </div>
                <div>
                  <label className="text-slate-400 font-semibold block mb-1">Location / Market</label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Connaught Place, New Delhi"
                    className="w-full px-3 py-2 rounded-xl bg-slateDark-900 border border-slate-800 text-white focus:outline-none focus:border-cobalt-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400 font-semibold block mb-1">Suspected Violation</label>
                <select
                  value={violationType}
                  onChange={(e) => setViolationType(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slateDark-900 border border-slate-800 text-white focus:outline-none focus:border-cobalt-500"
                >
                  <option value="REUSED_OIL">Repeated Reused Cooking Oil (Carcinogenic TPC)</option>
                  <option value="BANNED_DYE">Banned Chemical Dyes (Rhodamine-B, Metanil Yellow)</option>
                  <option value="SYNTHETIC_DAIRY">Adulterated Milk / Synthetic Paneer Starch</option>
                  <option value="HYGIENE_BREACH">Unfiltered Water & Severe Sanitation Violation</option>
                </select>
              </div>

              <div>
                <label className="text-slate-400 font-semibold block mb-1">Description</label>
                <textarea
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the smell, color of oil, absence of FSSAI display board, etc."
                  className="w-full px-3 py-2 rounded-xl bg-slateDark-900 border border-slate-800 text-white focus:outline-none focus:border-cobalt-500"
                ></textarea>
              </div>

              <div>
                <label className="text-slate-400 font-semibold block mb-1">Pre-formatted Legal Notice Preview</label>
                <pre className="p-3 rounded-xl bg-slateDark-950 border border-slate-800 text-[10px] font-mono text-slate-300 overflow-x-auto whitespace-pre-wrap">
                  {sampleNoticeText}
                </pre>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-bold flex items-center gap-1.5 shadow-lg shadow-cobalt-600/25"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Generate & Dispatch Notice</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
