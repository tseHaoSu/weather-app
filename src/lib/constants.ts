export const locationCoordinates: {
  [key: string]: { lat: number; lon: number };
} = {
  "New South Wales": { lat: -33.8688, lon: 151.2093 }, // Sydney
  Victoria: { lat: -37.8136, lon: 144.9631 }, // Melbourne
  Queensland: { lat: -27.4698, lon: 153.0251 }, // Brisbane
  "Western Australia": { lat: -31.9505, lon: 115.8605 }, // Perth
  "South Australia": { lat: -34.9285, lon: 138.6007 }, // Adelaide
  Tasmania: { lat: -42.8821, lon: 147.3272 }, // Hobart
  "Australian Capital Territory": { lat: -35.2809, lon: 149.13 }, // Canberra
  "Northern Territory": { lat: -12.4634, lon: 130.8456 }, // Darwin
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
  "Type VI": 0.75
};
