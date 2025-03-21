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
};

export const CasesData = [
  {
    year: "2015",
    NewSouthWales: 5858,
    Queensland: 4606,
    SouthAustralia: 1031,
    Tasmania: 410,
    Victoria: 3469,
    WesternAustralia: 2047,
  },
  {
    year: "2016",
    NewSouthWales: 6117,
    Queensland: 4781,
    SouthAustralia: 1066,
    Tasmania: 410,
    Victoria: 3538,
    WesternAustralia: 1990,
  },
  {
    year: "2017",
    NewSouthWales: 6352,
    Queensland: 4974,
    SouthAustralia: 1030,
    Tasmania: 437,
    Victoria: 3740,
    WesternAustralia: 1851,
  },
  {
    year: "2018",
    NewSouthWales: 6475,
    Queensland: 4917,
    SouthAustralia: 1038,
    Tasmania: 531,
    Victoria: 3760,
    WesternAustralia: 1874,
  },
  {
    year: "2019",
    NewSouthWales: 6581,
    Queensland: 5359,
    SouthAustralia: 1181,
    Tasmania: 533,
    Victoria: 3641,
    WesternAustralia: 2022,
  },
  {
    year: "2020",
    NewSouthWales: 6535,
    Queensland: 5073,
    SouthAustralia: 1179,
    Tasmania: 555,
    Victoria: 3454,
    WesternAustralia: 1845,
  },
];

export const HistoryUVData = {
  Adelaide: [
    {
      month: "January",
      uv_index: 7.772829896819861,
    },
    {
      month: "February",
      uv_index: 6.919287694179986,
    },
    {
      month: "March",
      uv_index: 5.082773254463923,
    },
    {
      month: "April",
      uv_index: 3.091429959371136,
    },
    {
      month: "May",
      uv_index: 1.639915855948114,
    },
    {
      month: "June",
      uv_index: 1.1767234629836776,
    },
    {
      month: "July",
      uv_index: 1.2719813006651999,
    },
    {
      month: "August",
      uv_index: 1.9280690263432267,
    },
    {
      month: "September",
      uv_index: 3.1691284382208917,
    },
    {
      month: "October",
      uv_index: 4.53955282707048,
    },
    {
      month: "November",
      uv_index: 6.076664705421693,
    },
    {
      month: "December",
      uv_index: 7.3661903969079,
    },
  ],
  "Alice Springs": [
    {
      month: "January",
      uv_index: 8.649809859028837,
    },
    {
      month: "February",
      uv_index: 9.014463633487768,
    },
    {
      month: "March",
      uv_index: 7.462367618273982,
    },
    {
      month: "April",
      uv_index: 5.527365230208293,
    },
    {
      month: "May",
      uv_index: 3.827172504853417,
    },
    {
      month: "June",
      uv_index: 2.9642369110619975,
    },
    {
      month: "July",
      uv_index: 3.374077957631882,
    },
    {
      month: "August",
      uv_index: 4.570756272401433,
    },
    {
      month: "September",
      uv_index: 5.803173985890653,
    },
    {
      month: "October",
      uv_index: 7.060871479774705,
    },
    {
      month: "November",
      uv_index: 7.5649142020147675,
    },
    {
      month: "December",
      uv_index: 8.24503163935143,
    },
  ],
  Brisbane: [
    {
      month: "January",
      uv_index: 7.18875672974048,
    },
    {
      month: "February",
      uv_index: 6.494571523499401,
    },
    {
      month: "March",
      uv_index: 5.024581282284265,
    },
    {
      month: "April",
      uv_index: 3.8365385555854483,
    },
    {
      month: "May",
      uv_index: 2.668598936899863,
    },
    {
      month: "June",
      uv_index: 2.0567176233490603,
    },
    {
      month: "July",
      uv_index: 2.290939100528864,
    },
    {
      month: "August",
      uv_index: 3.177505888376856,
    },
    {
      month: "September",
      uv_index: 4.217435160085637,
    },
    {
      month: "October",
      uv_index: 5.031045329800578,
    },
    {
      month: "November",
      uv_index: 6.1590375435226665,
    },
    {
      month: "December",
      uv_index: 6.736506034021532,
    },
  ],
  Canberra: [
    {
      month: "January",
      uv_index: 6.582143391890658,
    },
    {
      month: "February",
      uv_index: 6.249163199523248,
    },
    {
      month: "March",
      uv_index: 4.498274957893804,
    },
    {
      month: "April",
      uv_index: 2.838048115315251,
    },
    {
      month: "May",
      uv_index: 1.651394018891381,
    },
    {
      month: "June",
      uv_index: 1.0958682978475125,
    },
    {
      month: "July",
      uv_index: 1.2606993096336987,
    },
    {
      month: "August",
      uv_index: 1.87494743130227,
    },
    {
      month: "September",
      uv_index: 3.031377758069191,
    },
    {
      month: "October",
      uv_index: 4.261052178309484,
    },
    {
      month: "November",
      uv_index: 5.577097971781305,
    },
    {
      month: "December",
      uv_index: 6.581811945836356,
    },
  ],
  Darwin: [
    {
      month: "January",
      uv_index: 6.935637938502987,
    },
    {
      month: "February",
      uv_index: 7.373782683074799,
    },
    {
      month: "March",
      uv_index: 7.412554854944953,
    },
    {
      month: "April",
      uv_index: 6.726766804749609,
    },
    {
      month: "May",
      uv_index: 5.731873120149847,
    },
    {
      month: "June",
      uv_index: 5.062018732468659,
    },
    {
      month: "July",
      uv_index: 5.4203961942855345,
    },
    {
      month: "August",
      uv_index: 6.399941291401756,
    },
    {
      month: "September",
      uv_index: 7.255204141631542,
    },
    {
      month: "October",
      uv_index: 7.525301722238599,
    },
    {
      month: "November",
      uv_index: 7.347686703420091,
    },
    {
      month: "December",
      uv_index: 6.87960452683362,
    },
  ],
  Emerald: [
    {
      month: "January",
      uv_index: 8.0447910906298,
    },
    {
      month: "February",
      uv_index: 8.14666455962916,
    },
    {
      month: "March",
      uv_index: 6.968189132104454,
    },
    {
      month: "April",
      uv_index: 5.079412301587301,
    },
    {
      month: "May",
      uv_index: 3.6493291433508888,
    },
    {
      month: "June",
      uv_index: 2.9185982142857143,
    },
    {
      month: "July",
      uv_index: 3.059494453833027,
    },
    {
      month: "August",
      uv_index: 4.3285028186192775,
    },
    {
      month: "September",
      uv_index: 5.552469523809524,
    },
    {
      month: "October",
      uv_index: 6.5976536098310286,
    },
    {
      month: "November",
      uv_index: 7.010489682539682,
    },
    {
      month: "December",
      uv_index: 7.947986789554532,
    },
  ],
  "Gold Coast": [
    {
      month: "January",
      uv_index: 7.44981182795699,
    },
    {
      month: "February",
      uv_index: 6.5586563816508034,
    },
    {
      month: "March",
      uv_index: 5.284255806693307,
    },
    {
      month: "April",
      uv_index: 3.9776205077825617,
    },
    {
      month: "May",
      uv_index: 2.629275249510491,
    },
    {
      month: "June",
      uv_index: 2.0770619047619046,
    },
    {
      month: "July",
      uv_index: 2.2156032485464374,
    },
    {
      month: "August",
      uv_index: 3.1243968150732178,
    },
    {
      month: "September",
      uv_index: 4.155997222222222,
    },
    {
      month: "October",
      uv_index: 4.975883640552995,
    },
    {
      month: "November",
      uv_index: 6.04521929834659,
    },
    {
      month: "December",
      uv_index: 6.717097926267281,
    },
  ],
  Kingston: [
    {
      month: "January",
      uv_index: 5.930385949915186,
    },
    {
      month: "February",
      uv_index: 4.879200488557275,
    },
    {
      month: "March",
      uv_index: 3.3207850274981086,
    },
    {
      month: "April",
      uv_index: 1.778182612558845,
    },
    {
      month: "May",
      uv_index: 0.8093950272334636,
    },
    {
      month: "June",
      uv_index: 0.5416472316108102,
    },
    {
      month: "July",
      uv_index: 0.6468273885959638,
    },
    {
      month: "August",
      uv_index: 1.091397437343034,
    },
    {
      month: "September",
      uv_index: 1.9396604497462562,
    },
    {
      month: "October",
      uv_index: 3.152854250016634,
    },
    {
      month: "November",
      uv_index: 4.494038223776641,
    },
    {
      month: "December",
      uv_index: 5.839339819081754,
    },
  ],
  Melbourne: [
    {
      month: "January",
      uv_index: 6.581587834568227,
    },
    {
      month: "February",
      uv_index: 5.732826759498832,
    },
    {
      month: "March",
      uv_index: 4.07647687318655,
    },
    {
      month: "April",
      uv_index: 2.383043812463257,
    },
    {
      month: "May",
      uv_index: 1.2795557960707875,
    },
    {
      month: "June",
      uv_index: 0.9064381944586941,
    },
    {
      month: "July",
      uv_index: 0.9788245378091578,
    },
    {
      month: "August",
      uv_index: 1.4803461442775276,
    },
    {
      month: "September",
      uv_index: 2.497018565434506,
    },
    {
      month: "October",
      uv_index: 3.7168045001924734,
    },
    {
      month: "November",
      uv_index: 4.828272106352653,
    },
    {
      month: "December",
      uv_index: 6.329559831858974,
    },
  ],
  Newcastle: [
    {
      month: "January",
      uv_index: 7.256526085046663,
    },
    {
      month: "February",
      uv_index: 6.638971755686329,
    },
    {
      month: "March",
      uv_index: 4.803342635236804,
    },
    {
      month: "April",
      uv_index: 3.3284530864197532,
    },
    {
      month: "May",
      uv_index: 2.05440435775311,
    },
    {
      month: "June",
      uv_index: 1.3464225783290842,
    },
    {
      month: "July",
      uv_index: 1.5727613354547516,
    },
    {
      month: "August",
      uv_index: 2.275992005565426,
    },
    {
      month: "September",
      uv_index: 3.494265784832452,
    },
    {
      month: "October",
      uv_index: 4.691778204471753,
    },
    {
      month: "November",
      uv_index: 5.933798412698414,
    },
    {
      month: "December",
      uv_index: 6.691345884021635,
    },
  ],
  Perth: [
    {
      month: "January",
      uv_index: 8.557427924473176,
    },
    {
      month: "February",
      uv_index: 7.5901941855678015,
    },
    {
      month: "March",
      uv_index: 5.539084929458084,
    },
    {
      month: "April",
      uv_index: 3.5519178712222166,
    },
    {
      month: "May",
      uv_index: 2.133702832535701,
    },
    {
      month: "June",
      uv_index: 1.5139042111713683,
    },
    {
      month: "July",
      uv_index: 1.581683679100532,
    },
    {
      month: "August",
      uv_index: 2.325400426740628,
    },
    {
      month: "September",
      uv_index: 3.587208287746988,
    },
    {
      month: "October",
      uv_index: 5.135476503852636,
    },
    {
      month: "November",
      uv_index: 6.898722463428406,
    },
    {
      month: "December",
      uv_index: 8.35178165852332,
    },
  ],
  Sydney: [
    {
      month: "January",
      uv_index: 6.77328668392432,
    },
    {
      month: "February",
      uv_index: 6.283289367609758,
    },
    {
      month: "March",
      uv_index: 4.456160654713446,
    },
    {
      month: "April",
      uv_index: 3.0488703703703703,
    },
    {
      month: "May",
      uv_index: 1.900752432155658,
    },
    {
      month: "June",
      uv_index: 1.287516328694479,
    },
    {
      month: "July",
      uv_index: 1.5039332602038422,
    },
    {
      month: "August",
      uv_index: 2.193426779313876,
    },
    {
      month: "September",
      uv_index: 3.36509982642249,
    },
    {
      month: "October",
      uv_index: 4.497050514780969,
    },
    {
      month: "November",
      uv_index: 5.642523228428125,
    },
    {
      month: "December",
      uv_index: 6.380379536828753,
    },
  ],
  Townsville: [
    {
      month: "January",
      uv_index: 7.669495148512211,
    },
    {
      month: "February",
      uv_index: 7.7648372072082505,
    },
    {
      month: "March",
      uv_index: 6.921959530593004,
    },
    {
      month: "April",
      uv_index: 5.557695024666253,
    },
    {
      month: "May",
      uv_index: 4.1630599599052305,
    },
    {
      month: "June",
      uv_index: 3.5187179095380916,
    },
    {
      month: "July",
      uv_index: 3.8585939580133126,
    },
    {
      month: "August",
      uv_index: 5.030637843382164,
    },
    {
      month: "September",
      uv_index: 6.278832404204696,
    },
    {
      month: "October",
      uv_index: 7.186052757793765,
    },
    {
      month: "November",
      uv_index: 7.794455318982093,
    },
    {
      month: "December",
      uv_index: 7.930500289580601,
    },
  ],
};


interface UVRecord {
  month: string;
  uv_index: number;
}

interface ChartDataEntry {
  month: string;
  [city: string]: string | number;
}


interface UVDataSet {
  [city: string]: UVRecord[];
}
export function transformUVData(uvData: UVDataSet, months = 6) {
  // Extract just the first X months (January to June by default)
  const result = [];
  // Get all city names
  const cities = Object.keys(uvData);
  
  // Process only the requested number of months
  for (let i = 0; i < months; i++) {
    // Get the current month data for the first city to determine month name
    const monthName = uvData[cities[0]][i].month;
    
    // Create the month entry with explicit typing to allow index access
    const monthData: ChartDataEntry = { month: monthName };
    
    // Add data for each city
    cities.forEach(city => {
      // Round UV index to 1 decimal place for cleaner visualization
      monthData[city] = parseFloat(uvData[city][i].uv_index.toFixed(1));
    });
    
    result.push(monthData);
  }
  
  return result;
}