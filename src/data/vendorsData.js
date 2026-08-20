export const sampleVendors = [
  {
    id: "VND-101",
    name: "Swad Street Chaat & Pav Bhaji",
    address: "Shop 14, Main Market, Lajpat Nagar, New Delhi",
    fssaiNumber: "13322005001142",
    fssaiStatus: "VERIFIED",
    overallScore: 4.8,
    hygieneMetrics: {
      oilFreshness: "A+ (Daily RUCO Logged)",
      waterSource: "RO Purified (Tested Monthly)",
      staffHygiene: "Gloves & Caps Mandatory",
      kitchenCleanliness: "Excellent"
    },
    oilChangeFrequency: "Twice daily (Every 5 hours)",
    badges: ["SafeBite Verified", "RUCO Compliant", "Clean Street Food Hub"],
    communityReviewsCount: 142
  },
  {
    id: "VND-102",
    name: "Bawarchi Momos & Chinese Corner",
    address: "Opposite Metro Gate 2, Sector 15, Noida",
    fssaiNumber: "12723001004512",
    fssaiStatus: "PENDING_AUDIT",
    overallScore: 2.3,
    hygieneMetrics: {
      oilFreshness: "D (Reused Dark Oil Reported)",
      waterSource: "Unverified Tap Water",
      staffHygiene: "No PPE / Bare Hands",
      kitchenCleanliness: "Poor Drainage"
    },
    oilChangeFrequency: "Irregular (> 48h reported)",
    badges: ["Under Citizen Review"],
    communityReviewsCount: 89
  },
  {
    id: "VND-103",
    name: "Annapurna Dosa & Tiffin Center",
    address: "100ft Road, Indiranagar, Bengaluru",
    fssaiNumber: "11221002000891",
    fssaiStatus: "VERIFIED",
    overallScore: 4.9,
    hygieneMetrics: {
      oilFreshness: "A+ (Cold Pressed Groundnut Oil)",
      waterSource: "Commercial UV+RO",
      staffHygiene: "Full Apron & Hairnets",
      kitchenCleanliness: "Spotless Stainless Steel"
    },
    oilChangeFrequency: "Single use for frying",
    badges: ["SafeBite Gold Standard", "100% Non-Adulterated Ghee"],
    communityReviewsCount: 310
  }
];
