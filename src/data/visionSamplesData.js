export const visionSampleCases = [
  {
    id: "sample-oil-1",
    title: "Commercial Reused Frying Oil (Carcinogenic TPC)",
    category: "Cooking Oil",
    imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=85",
    prediction: "CRITICAL HAZARD: Severely Degraded Oil",
    confidence: "97.4%",
    tpcEstimate: "36.8% (Statutory Max: 25%)",
    detectedCarcinogens: ["Polycyclic Aromatic Hydrocarbons (PAHs)", "Total Polar Compounds", "Aldehydes", "Trans-fat polymers"],
    healthImpact: "High risk of cellular mutation, gastrointestinal cancer, cardiovascular inflammation.",
    gradCamExplanation: "Dark brown chromaticity density, micro-foaming index, and zero light transmission trigger 97.4% degradation threshold.",
    safeAlternative: "Oil must be immediately discarded to authorized RUCO biodiesel collection."
  },
  {
    id: "sample-dye-2",
    title: "Street Fast Food Gravy (Banned Rhodamine-B)",
    category: "Artificial Dyes",
    imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=85",
    prediction: "BANNED CHEMICAL TEXTILE DYE DETECTED",
    confidence: "95.8%",
    tpcEstimate: "N/A",
    detectedCarcinogens: ["Rhodamine-B (Industrial Textile Dye)", "Synthetic Azo compounds"],
    healthImpact: "Known carcinogen, severe hepatotoxicity (liver damage), neurotoxicity in children.",
    gradCamExplanation: "Fluorescence RGB peak at λ=540nm exceeds all permitted food color standards (Carmoisine/Sunset Yellow).",
    safeAlternative: "Use natural Kashmiri chili powder or beetroot extract for coloration."
  },
  {
    id: "sample-turmeric-3",
    title: "Adulterated Turmeric Powder (Metanil Yellow)",
    category: "Spices",
    imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&auto=format&fit=crop&q=85",
    prediction: "NON-PERMITTED COAL-TAR DYE DETECTED",
    confidence: "93.2%",
    tpcEstimate: "N/A",
    detectedCarcinogens: ["Metanil Yellow", "Lead Chromate trace compounds"],
    healthImpact: "Degeneration of male reproductive cells, intestinal cancer, neurodevelopmental delays.",
    gradCamExplanation: "Unnatural hyper-saturation index detected. Fails hydrochloric acid differential test.",
    safeAlternative: "Purchase certified Agmark / FSSAI-tested whole turmeric roots."
  }
];
