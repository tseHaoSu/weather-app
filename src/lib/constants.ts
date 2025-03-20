export const locationCoordinates: {
  [key: string]: { lat: number; lng: number };
} = {
  Sydney: { lat: -33.8688, lng: 151.2093 },
  Melbourne: { lat: -37.8136, lng: 144.9631 },
  Brisbane: { lat: -27.4698, lng: 153.0251 },
  Perth: { lat: -31.9505, lng: 115.8605 },
  Adelaide: { lat: -34.9285, lng: 138.6007 },
  "Gold Coast": { lat: -28.0167, lng: 153.4 },
  Canberra: { lat: -35.2809, lng: 149.13 },
  Newcastle: { lat: -32.9283, lng: 151.7817 },
  Wollongong: { lat: -34.4331, lng: 150.8831 },
  Hobart: { lat: -42.8821, lng: 147.3272 },
  Darwin: { lat: -12.4634, lng: 130.8456 },
  Cairns: { lat: -16.9186, lng: 145.7781 },
  "Alice Springs": { lat: -23.698, lng: 133.8807 },
};

export const UVlevels: {
  [key: number]: { level: string; risk: string };
} = {
  0: { level: "Low", risk: "Minimal" },
  1: { level: "Low", risk: "Minimal" },
  2: { level: "Low", risk: "Minimal" },
  3: { level: "Moderate", risk: "Low" },
  4: { level: "Moderate", risk: "Low" },
  5: { level: "Moderate", risk: "Low" },
  6: { level: "High", risk: "Moderate" },
  7: { level: "High", risk: "Moderate" },
  8: { level: "Very High", risk: "High" },
  9: { level: "Very High", risk: "High" },
  10: { level: "Very High", risk: "High" },
  11: { level: "Extreme", risk: "Very High" },
  12: { level: "Extreme", risk: "Very High" },
};

export const UVProtectionTips: {
  [key: number]: { tip: string };
} = {
  1: {
    tip: "Apply broad-spectrum SPF 30+ sunscreen every 2 hours",
  },
  2: {
    tip: "Wear protective clothing, wide-brimmed hats and sunglasses",
  },
  3: {
    tip: "Seek shade during peak hours (10AM-4PM)",
  },
  4: {
    tip: "Check the UV index daily and plan activities accordingly",
  },
  5: {
    tip: "Stay hydrated when exposed to sun for extended periods",
  },
};

export const UVIndexFactor: { [key: number]: number } = {
  0: 0.3,
  1: 0.3,
  2: 0.3,
  3: 0.6,
  4: 0.6,
  5: 0.6,
  6: 0.85,
  7: 0.85,
  8: 1.0,
  9: 1.0,
  10: 1.0,
  11: 1.0,
  12: 1.0,
};

export const SkinToneFactor: { [key: string]: number } = {
  "Type I": 1,
  "Type II": 1,
  "Type III": 1,
  "Type IV": 0.85,
  "Type V": 0.85,
  "Type VI": 0.75,
};

 export const uvColors: { [key: number]: string } = {
  0: "#299501", // Low - Green
  1: "#299501", // Low - Green
  2: "#87CF30", // Low - Light Green
  3: "#FFFF00", // Moderate - Yellow
  4: "#FFFF00", // Moderate - Yellow
  5: "#FFCC00", // Moderate - Yellow-Orange
  6: "#FFA500", // High - Orange
  7: "#FFA500", // High - Orange
  8: "#FF4D00", // Very High - Red-Orange
  9: "#FF0000", // Very High - Red
  10: "#CC00FF", // Extreme - Purple
  11: "#9000CC", // Extreme - Dark Purple
  12: "#660099", // Extreme - Dark Purple
};

export const DEFAULT_COORDINATES = { lat: -33.8688, lng: 151.2093 }; // Sydney
export const DEFAULT_UV_INDEX = 5;

export const skinTypeColors: { [key: string]: string } = {
  "Type I": "#ffe4d1", // Very fair
  "Type II": "#f5d4b9", // Fair
  "Type III": "#e6be9c", // Medium
  "Type IV": "#bc8a5f", // Olive
  "Type V": "#8b5a2b", // Brown
  "Type VI": "#4a2d0f", // Dark brown/black
};


export const UVPreventionTips: { [key: string]: string } = {
  "Wear Sunscreen":
    "Apply broad-spectrum SPF 30+ sunscreen generously 15 minutes before going outside and reapply every 2 hours. Don't forget commonly missed areas like ears, feet, back of neck, and scalp (if hair is thinning). Choose water-resistant formulas for swimming or sweating and remember that no sunscreen is completely waterproof. Different skin types may require different formulations, with mineral sunscreens (zinc oxide, titanium dioxide) being better for sensitive skin. For children under 6 months, consult a pediatrician before applying sunscreen.",

  "Seek Shade":
    "Stay in the shade during peak UV hours (10am-4pm), especially when the UV index is 3 or higher. Remember that UV rays can still reach you under trees and umbrellas through reflection and scattering. Beach umbrellas block direct UV but not reflected rays from sand, which can reflect up to 20% of UV radiation. Solid shade structures like pavilions offer better protection. Even on cloudy days, up to 80% of UV rays can penetrate cloud cover, so shade remains important regardless of cloud conditions. Consider portable shade options when planning extended outdoor activities.",

  "Cover Up":
    "Wear protective clothing including wide-brimmed hats, UV-blocking sunglasses, and long-sleeved shirts when possible. Look for clothing with UPF (Ultraviolet Protection Factor) ratings of 30+ for reliable protection. A wide-brimmed hat (3+ inches) protects your face, ears, and neck more effectively than baseball caps. Sunglasses should block 99-100% of UVA and UVB radiation to protect against cataracts and other eye damage. Dark and bright-colored fabrics generally provide better UV protection than light colors, while densely woven fabrics offer better protection than loose weaves. Consider UV-protective arm sleeves and neck gaiters for activities like driving or sports.",

  "Check UV Index":
    "Monitor the daily UV index forecast and plan outdoor activities accordingly to minimize exposure during high-UV periods. The UV index scale runs from 1 (low) to 11+ (extreme). At index levels 3-5 (moderate), wear sunscreen and sunglasses. At 6-7 (high), add protective clothing and limit midday sun exposure. At 8-10 (very high), minimize sun exposure between 10am-4pm. At 11+ (extreme), avoid outdoor activities during midday hours if possible. UV radiation increases with altitude (4-5% higher for every 1000 feet) and is stronger near reflective surfaces like snow, water, and sand. Many weather apps and websites now include UV index forecasts, and some wearable devices can track personal UV exposure throughout the day.",

  "Use Window Protection":
    "Install UV-filtering window films in your home, office, and car to reduce indoor UV exposure. Standard glass blocks UVB rays but allows most UVA rays to pass through. UV-protective films can block up to 99% of UV radiation while still allowing visible light. This is especially important for people who spend extended periods near windows or during long car journeys. Some modern car windshields have UV protection built in, but side windows typically offer minimal protection without additional filtering.",

  "Be Extra Cautious Around Water, Snow, and Sand":
    "These surfaces can reflect and intensify UV radiation, increasing your exposure. Snow can reflect up to 80% of UV rays, water about 10-30%, and dry beach sand about 15-30%. This means you can get significant UV exposure even while in shade near these reflective surfaces. Wear extra protection, use higher SPF sunscreen, and reapply more frequently when around these environments.",

  "Protect Children Diligently":
    "Children's skin is more sensitive to UV damage, and early sun exposure increases lifetime skin cancer risk. Keep infants under 6 months out of direct sunlight completely. For older children, use clothing, hats, and shade as primary protection, with sunscreen on exposed areas. Teach children sun-safe habits early, including the importance of reapplying sunscreen. Schedule outdoor activities before 10am or after 4pm when possible. School uniforms and playground areas should incorporate sun protection considerations.",

  "Avoid Tanning Beds":
    "Tanning beds emit UVA rays at levels up to 12 times higher than natural sunlight and significantly increase skin cancer risk. The World Health Organization classifies them as carcinogenic. There is no such thing as a 'safe tan' from UV exposure, whether from tanning beds or natural sunlight. If you desire a tanned appearance, consider sunless tanning products like sprays or lotions containing dihydroxyacetone (DHA), but remember these do not provide UV protection.",

  "Take Extra Precautions with Medications":
    "Some medications can increase sun sensitivity (photosensitivity), including certain antibiotics, antihistamines, retinoids, and some heart and diabetes medications. Check with your healthcare provider or pharmacist about whether any medications you take might increase sun sensitivity, and take additional protective measures if necessary. Photosensitivity reactions can occur within minutes or hours of sun exposure and may look like exaggerated sunburns or allergic reactions.",

  "Remember Year-Round Protection":
    "UV radiation is present year-round, not just during summer months. In winter, UV rays reflect off snow and can cause significant exposure at high altitudes. Even on overcast days, up to 80% of UV rays can penetrate cloud cover. Make sun protection a daily habit regardless of season, especially for exposed areas like the face and hands. In tropical and subtropical regions, UV levels remain high throughout the year.",
};