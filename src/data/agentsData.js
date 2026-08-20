export const agentsList = [
  {
    id: "auditor",
    name: "Evidence Auditor Agent",
    role: "Provenance & Metadata Verifier",
    avatar: "🔬",
    badgeColor: "bg-cobalt-500/10 text-cobalt-400 border-cobalt-500/25",
    description: "Verifies image EXIF timestamps, GPS coordinates, and filters out synthetic/duplicate report spam."
  },
  {
    id: "toxicologist",
    name: "Biochemical & Tox Agent",
    role: "Hazard & Carcinogen Assessment",
    avatar: "🧪",
    badgeColor: "bg-amberGold-500/10 text-amberGold-400 border-amberGold-500/25",
    description: "Evaluates Total Polar Compounds (TPC), Rhodamine-B, and acute vs. chronic liver toxicity."
  },
  {
    id: "legal",
    name: "Legal Compliance Agent",
    role: "FSSAI Statutory Mapping",
    avatar: "⚖️",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/25",
    description: "Maps violations to Section 38 (Seizure) and Section 59 (Unsafe Food Penalty) of FSS Act, 2006."
  },
  {
    id: "xai",
    name: "XAI Arbiter Agent",
    role: "Explainability & Human Safeguard",
    avatar: "🧠",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    description: "Decomposes risk with TreeSHAP feature attributions for transparent human-in-the-loop validation."
  }
];

export const sampleInvestigationCases = [
  {
    id: "CASE-2026-8901",
    vendorName: "Gupta Fast Food & Rolls",
    location: "Connaught Place, New Delhi",
    fssaiLicense: "13320004000189",
    reportedIssue: "Dark foaming oil in continuous reuse (>72h) + unnatural neon-red Manchurian gravy.",
    imageType: "REHEATED_OIL_AND_DYE",
    aiDeliberation: [
      {
        agent: "auditor",
        step: 1,
        status: "VERIFIED",
        log: "EXIF Timestamp: 2026-08-20 12:44 IST | GPS geohash matched at Connaught Place. Image pixel noise profile confirms authentic DSLR/camera capture (no synthetic diffusion detected)."
      },
      {
        agent: "toxicologist",
        step: 2,
        status: "CRITICAL HAZARD",
        log: "Viscosity Index: 4.8x normal | Total Polar Compounds (TPC) calculated at 34.2% (FSSAI statutory maximum is 25%). Rhodamine-B fluorescent spectral signature confirmed at 96.4% confidence."
      },
      {
        agent: "legal",
        step: 3,
        status: "VIOLATION IDENTIFIED",
        log: "Statutory Infractions: FSS Act 2006 Sec 59 (Unsafe Food Causing Severe Injury), Sec 38 (Empowering Food Safety Officer for Immediate Sample Seizure), and National RUCO non-compliance."
      },
      {
        agent: "xai",
        step: 4,
        status: "NOTICE DISPATCH READY",
        log: "Synthesized inspection brief generated with cryptographic hash. Sent with high priority to District Food Safety Officer for physical sample verification."
      }
    ],
    riskScore: 94,
    recommendedAction: "Immediate Seizure & Sample Lab Testing under FSS Act Section 38"
  },
  {
    id: "CASE-2026-8902",
    vendorName: "Sri Krishna Sweets & Dairy",
    location: "T. Nagar, Chennai",
    fssaiLicense: "12421008000452",
    reportedIssue: "Suspected synthetic starch adulteration in festive paneer and khoya.",
    imageType: "DAIRY_STARCH",
    aiDeliberation: [
      {
        agent: "auditor",
        step: 1,
        status: "VERIFIED",
        log: "Citizen Iodine drop assay test video analyzed. Authenticated with 3 independent customer complaints recorded in 24h."
      },
      {
        agent: "toxicologist",
        step: 2,
        status: "ADULTERANT CONFIRMED",
        log: "Intense Blue-Violet iodine complex reaction detected in image RGB spectrum. High level of potato starch/detergent emulsifier identified."
      },
      {
        agent: "legal",
        step: 3,
        status: "VIOLATION IDENTIFIED",
        log: "FSS Act 2006 Sec 51 (Penalty for Sub-standard Food) and Sec 52 (Misbranded Food). Statutory penalty INR 5,00,000 applicable."
      },
      {
        agent: "xai",
        step: 4,
        status: "NOTICE DISPATCH READY",
        log: "Case filed in Regional Mobile Testing Queue ('Food Safety on Wheels' deployment)."
      }
    ],
    riskScore: 88,
    recommendedAction: "Mandatory Mobile Lab Batch Inspection"
  }
];
