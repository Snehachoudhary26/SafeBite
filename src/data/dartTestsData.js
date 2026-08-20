export const dartTests = [
  {
    id: "milk-starch",
    category: "Dairy",
    title: "Testing Starch / Detergent in Milk",
    icon: "🥛",
    timeRequired: "2 Minutes",
    difficulty: "Very Easy",
    requiredMaterials: "5ml Milk sample, Iodine Tincture (available at medical store) or plain warm water.",
    stepByStep: [
      "Take 5 ml of milk in a transparent cup or test tube.",
      "Boil the milk thoroughly and let it cool down to room temperature.",
      "Add 2 to 3 drops of Iodine tincture solution.",
      "Observe the color change immediately."
    ],
    passIndicator: "Milk turns yellowish/light brown (Natural Iodine color). Pure milk containing no added starch.",
    failIndicator: "Milk turns intense Blue or Dark Violet. Indicates presence of added starch, potato paste, or flour used to artificially increase thickness."
  },
  {
    id: "honey-sugar",
    category: "Honey & Sweets",
    title: "Testing Invert Sugar & Water in Honey",
    icon: "🍯",
    timeRequired: "1 Minute",
    difficulty: "Easy",
    requiredMaterials: "Glass of clean water, 1 teaspoon of honey.",
    stepByStep: [
      "Fill a transparent glass with room-temperature water.",
      "Drop a teaspoon of honey into the water without stirring.",
      "Observe how the honey travels to the bottom."
    ],
    passIndicator: "Pure honey stays intact, does not dissolve readily, and settles at the bottom like a thick lump.",
    failIndicator: "Honey starts dispersing and dissolving into water immediately on contact, indicating high-fructose corn syrup or sugar water adulteration."
  },
  {
    id: "turmeric-lead",
    category: "Spices",
    title: "Detecting Metanil Yellow / Lead Chromate in Turmeric",
    icon: "🟡",
    timeRequired: "3 Minutes",
    difficulty: "Moderate",
    requiredMaterials: "Warm water, Turmeric powder, few drops of concentrated lemon juice or Hydrochloric Acid.",
    stepByStep: [
      "Add a teaspoon of turmeric powder to a glass of warm water.",
      "Let the mixture settle for 15 minutes.",
      "Add a few drops of acid (or lemon juice)."
    ],
    passIndicator: "Pure turmeric settles slowly at the bottom leaving a light yellow clear water layer. Redness disappears when diluted.",
    failIndicator: "Water remains cloudy dark yellow. If acid turns it deep magenta/pink and it stays magenta even after adding water, synthetic cancer-causing Metanil Yellow is present."
  },
  {
    id: "oil-argemone",
    category: "Edible Oils",
    title: "Detecting Toxic Argemone Oil in Mustard/Edible Oil",
    icon: "🛢️",
    timeRequired: "3 Minutes",
    difficulty: "Moderate",
    requiredMaterials: "5ml Oil sample, 5ml Nitric Acid (performed in well ventilated area).",
    stepByStep: [
      "Take 5 ml of cooking oil in a glass container.",
      "Add 5 ml of concentrated Nitric Acid carefully.",
      "Shake gently and allow it to stand for 5 minutes."
    ],
    passIndicator: "No color change in the acid layer. Oil is safe and pure.",
    failIndicator: "Development of a reddish-brown color in the acid layer indicates presence of toxic Argemone oil (which causes epidemic dropsy and glaucoma)."
  }
];
