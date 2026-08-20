export const xaiRiskModelDetails = {
  modelArchitecture: "XGBoost + Gradient Boosted Trees with TreeSHAP Feature Explainer",
  trainingDatasetSize: "2.4 Million FSSAI Inspection & Lab Records (2018-2026)",
  overallAccuracy: "94.6%",
  fairnessAuditStatus: "Zero Demographic Bias Certified (Fairness Metric: Equalized Odds 0.98)"
};

export const sampleShapFeatures = [
  { feature: "Missing Oil Change Log (> 48 Hours)", contribution: "+34.5%", impact: "HIGH_RISK", description: "Longer oil heating without replacement drastically spikes carcinogenic TPC levels." },
  { feature: "Computer Vision Toxic Dye Anomaly", contribution: "+28.2%", impact: "HIGH_RISK", description: "Color saturation exceeds organic food thresholds indicating banned chemical dyes." },
  { feature: "Raw Mandi Oil Price Surge (+35% Local)", contribution: "+18.0%", impact: "MODERATE_RISK", description: "Economic pressure causes vendors to blend cheaper toxic non-edible adulterants." },
  { feature: "Past Positive FSSAI Hygiene Audit", contribution: "-12.4%", impact: "PROTECTIVE", description: "Vendor has a verified clean history in past 6 months reducing baseline suspicion." },
  { feature: "FSSAI Mandatory Display Board Present", contribution: "-6.3%", impact: "PROTECTIVE", description: "Valid QR code and license prominently visible." }
];
