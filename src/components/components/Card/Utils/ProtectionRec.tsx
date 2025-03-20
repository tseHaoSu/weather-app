// Define the structure for protection recommendations
type ProtectionRecommendations = {
  riskLevel: string;
  clothing: string;
  hat: string;
  sunglasses: string;
  spf: string;
  fabric: string;
  additionalNotes: string;
};

export type SkinToneType =
  | "Type I"
  | "Type II"
  | "Type III"
  | "Type IV"
  | "Type V"
  | "Type VI";

const ProtectionRec = (
  skinTone: SkinToneType,
  uvIndex: number
): ProtectionRecommendations => {
  // **1. Validate input values**
  const skinToneMap = {
    'Type I': 1,
    'Type II': 2,
    'Type III': 3,
    'Type IV': 4,
    'Type V': 5,
    'Type VI': 6
  };

  const skinToneValue = skinToneMap[skinTone];

  //validate
  if (!skinToneValue) {
    throw new Error(
      "Invalid input: Skin tone must be either Roman numerals I-VI or 'Type I' through 'Type VI'."
    );
  }
  if (uvIndex < 0) {
    throw new Error("Invalid input: UV index must be 0 or higher.");
  }

  // Round UV index for consistent categorization
  const roundedUVIndex = Math.round(uvIndex);

  // **2. Calculate skin sensitivity**
  const sensitivityFactor = 8 - skinToneValue;

  // **3. Compute protection levels**
  const clothingLevel = Math.min(
    2,
    Math.floor((roundedUVIndex * sensitivityFactor) / 15)
  );
  const spfLevel = Math.min(
    3,
    Math.floor((roundedUVIndex * sensitivityFactor) / 10)
  );

  // **4. Determine recommendations based on UV level and skin sensitivity**
  const recommendations: ProtectionRecommendations = {
    riskLevel: "",
    clothing: "",
    hat: "",
    sunglasses: "",
    spf: "",
    fabric: "",
    additionalNotes: "",
  };

  // **5. Define SPF recommendations**
  const SPF_RECOMMENDATIONS = [
    "No sunscreen needed",
    "Use SPF 15",
    "Use SPF 30",
    "Use SPF 50+",
  ];

  // **6. Determine hat recommendation**
  let hatRecommendation = "No hat needed";
  if (roundedUVIndex >= 3 && roundedUVIndex <= 5 && sensitivityFactor >= 5) {
    hatRecommendation = "Regular hat recommended 🧢";
  } else if (roundedUVIndex >= 3 && roundedUVIndex <= 5) {
    hatRecommendation = "Hat optional";
  } else if (roundedUVIndex >= 6 && roundedUVIndex <= 7) {
    hatRecommendation = "Wide-brimmed hat strongly recommended 🎩";
  } else if (roundedUVIndex >= 8 && roundedUVIndex <= 10) {
    hatRecommendation = "Wide-brimmed hat required 🏕️";
  } else if (roundedUVIndex >= 11) {
    hatRecommendation = "Full-coverage wide-brimmed hat essential 🧥🎩";
  }

  // **7. Determine UV risk level and other recommendations**
  if (roundedUVIndex <= 2) {
    // Low UV: 0-2
    recommendations.riskLevel = "Low 🟢";
    recommendations.clothing =
      clothingLevel === 0
        ? "Regular clothing is sufficient 👕👖"
        : "Light protective clothing recommended 👚";
    recommendations.hat = hatRecommendation;
    recommendations.sunglasses = "Standard sunglasses with UV protection";
    recommendations.spf =
      SPF_RECOMMENDATIONS[Math.max(spfLevel, skinToneValue <= 3 ? 1 : 0)];
    recommendations.fabric = "Regular fabrics are adequate";
    recommendations.additionalNotes =
      "Minimal protection needed for most people.";
  } else if (roundedUVIndex <= 5) {
    // Moderate UV: 3-5
    recommendations.riskLevel = "Moderate 🟡";
    recommendations.clothing =
      clothingLevel <= 1
        ? "Long-sleeved shirts for sensitive individuals 👚"
        : "Long-sleeved shirts and pants recommended 👕👖";
    recommendations.hat = hatRecommendation;
    recommendations.sunglasses = "UV-protective sunglasses 🕶️";
    recommendations.spf = SPF_RECOMMENDATIONS[Math.max(spfLevel, 1)];
    recommendations.fabric =
      "Lightweight, tightly woven fabrics" +
      (skinToneValue <= 3 ? ", UPF-rated if possible" : "");
    recommendations.additionalNotes =
      "Stay in shade during midday hours if possible.";
  } else if (roundedUVIndex <= 7) {
    // High UV: 6-7
    recommendations.riskLevel = "High 🟠";
    recommendations.clothing = "Long-sleeved shirts and pants 👕👖";
    recommendations.hat = hatRecommendation;
    recommendations.sunglasses = "High-quality UV-protective sunglasses 🕶️🔥";
    recommendations.spf = SPF_RECOMMENDATIONS[Math.max(spfLevel, 2)];
    recommendations.fabric = `UPF-rated fabrics (${
      skinToneValue <= 3 ? "50+" : "30+"
    }) recommended`;
    recommendations.additionalNotes = "Reduce sun exposure between 10am-4pm.";
  } else if (roundedUVIndex <= 10) {
    // Very High UV: 8-10
    recommendations.riskLevel = "Very High 🔴";
    recommendations.clothing = "UPF-rated long sleeves and pants 🥼👖";
    recommendations.hat = hatRecommendation;
    recommendations.sunglasses = "Wrap-around protective sunglasses 🥽";
    recommendations.spf = SPF_RECOMMENDATIONS[3]; // Always highest SPF
    recommendations.fabric = "UPF 50+ fabrics recommended";
    recommendations.additionalNotes = "Minimize sun exposure between 10am-4pm.";
  } else {
    // Extreme UV: 11+
    recommendations.riskLevel = "Extreme ⚠️";
    recommendations.clothing =
      "UPF 50+ protective clothing covering as much skin as possible 🧥👖👒";
    recommendations.hat = hatRecommendation;
    recommendations.sunglasses =
      "High-quality wrap-around UV400 sunglasses 🥽⚠️";
    recommendations.spf = SPF_RECOMMENDATIONS[3]; // Always highest SPF
    recommendations.fabric = "Densely woven UPF 50+ fabrics only";
    recommendations.additionalNotes =
      "Avoid outdoor activities during midday hours if possible.";
  }

  return recommendations;
};

export default ProtectionRec;
