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
