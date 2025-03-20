const ProtectionRec = (uvIndex: number) => {
  // Round 
  const roundedUVIndex = Math.round(uvIndex);

  // Default recommendations 
  const recommendations = {
    riskLevel: "",
    clothing: "",
    hat: "",
    sunglasses: "",
    fabric: "",
    additionalNotes: "",
  };

  // Set recommendations
  if (roundedUVIndex <= 2) {
    // Low UV: 0-2
    recommendations.riskLevel = "Low 🟢";
    recommendations.clothing = "Regular clothing is usually sufficient 👕👖";
    recommendations.hat = "Optional";
    recommendations.sunglasses = "Standard sunglasses with UV protection";
    recommendations.fabric = "Regular fabrics are adequate";
    recommendations.additionalNotes =
      "Minimal protection needed for most people";
  } else if (roundedUVIndex >= 3 && roundedUVIndex <= 5) {
    // Moderate UV: 3-5
    recommendations.riskLevel = "Moderate 🟡";
    recommendations.clothing =
      "Long-sleeved shirts for sensitive individuals 👚";
    recommendations.hat = "Wide-brimmed hat recommended";
    recommendations.sunglasses = "UV-protective sunglasses";
    recommendations.fabric = "Lightweight, tightly woven fabrics";
    recommendations.additionalNotes =
      "Stay in shade during midday hours if possible";
  } else if (roundedUVIndex >= 6 && roundedUVIndex <= 7) {
    // High UV: 6-7
    recommendations.riskLevel = "High 🟠";
    recommendations.clothing = "Long-sleeved shirts and pants 👕👖";
    recommendations.hat = "Wide-brimmed hat strongly recommended";
    recommendations.sunglasses = "High-quality UV-protective sunglasses";
    recommendations.fabric = "UPF-rated fabrics (30+) recommended";
    recommendations.additionalNotes = "Reduce sun exposure between 10am-4pm";
  } else if (roundedUVIndex >= 8 && roundedUVIndex <= 10) {
    // Very High UV: 8-10
    recommendations.riskLevel = "Very High 🔴";
    recommendations.clothing = "UPF-rated long sleeves and pants 🥼👖";
    recommendations.hat = "Wide-brimmed hat required";
    recommendations.sunglasses = "Wrap-around UV-protective sunglasses";
    recommendations.fabric = "UPF 50+ fabrics recommended";
    recommendations.additionalNotes = "Minimize sun exposure between 10am-4pm";
  } else if (roundedUVIndex >= 11) {
    // Extreme UV: 11+
    recommendations.riskLevel = "Extreme ⚠️";
    recommendations.clothing =
      "UPF 50+ protective clothing covering as much skin as possible 🧥👖👒";
    recommendations.hat = "Full-coverage wide-brimmed hat essential";
    recommendations.sunglasses = "High-quality wrap-around UV400 sunglasses";
    recommendations.fabric = "Densely woven UPF 50+ fabrics only";
    recommendations.additionalNotes =
      "Avoid outdoor activities during midday hours if possible";
  }

  return recommendations;
};

export default ProtectionRec;
