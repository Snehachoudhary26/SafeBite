export const initialKafkaStream = [
  { id: "EVT-901", timestamp: "13:35:04", source: "IoT-Fryer-Sensor-44", metric: "TPC: 28.4%", temp: "198°C", status: "ALERT", zone: "Sector 18, Noida" },
  { id: "EVT-902", timestamp: "13:35:08", source: "Citizen-App-Upload", metric: "Photo: Rhodamine-B Flag", temp: "N/A", status: "WARNING", zone: "Indiranagar, Bengaluru" },
  { id: "EVT-903", timestamp: "13:35:12", source: "Mandi-Price-Feed", metric: "Mustard Oil: +38.5%", temp: "N/A", status: "RISK_SURGE", zone: "North India Wholesale" },
  { id: "EVT-904", timestamp: "13:35:16", source: "IoT-Fryer-Sensor-12", metric: "TPC: 14.1%", temp: "172°C", status: "NORMAL", zone: "Bandra West, Mumbai" },
  { id: "EVT-905", timestamp: "13:35:20", source: "RUCO-Oil-Disposal", metric: "35L Sent to Bio-Diesel", temp: "N/A", status: "COMPLIANT", zone: "Cyber Hub, Gurugram" }
];

export const sparkBatchMetrics = {
  totalEventsProcessed24h: "1,420,850",
  activeSensorsOnline: "3,892",
  highRiskHotspotsDetected: "14",
  rucoOilDivertedLiters: "48,200 L",
  sparkThroughput: "18,400 msg/sec",
  latencyMs: "42 ms"
};

export const cityRiskHotspots = [
  { city: "Delhi NCR", riskLevel: "HIGH", hotspots: "Old Delhi, Chandni Chowk, Laxmi Nagar", topViolations: "Reused Oil TPC > 30%, Banned Dyes" },
  { city: "Mumbai", riskLevel: "MODERATE", hotspots: "Dadar Market, Kurla West", topViolations: "Uncovered Food, Missing Water Test Logs" },
  { city: "Bengaluru", riskLevel: "LOW-MODERATE", hotspots: "Majestic, Electronic City Phase 1", topViolations: "Unlicensed Cloud Kitchens" },
  { city: "Kolkata", riskLevel: "HIGH", hotspots: "Sealdah, Gariahat", topViolations: "Metanil Yellow in Street Biryani & Sweets" }
];
