import { SkinToneFactor, UVIndexFactor } from "@/lib/constants";
import useInputQueryStore from "@/store/store";

const SkinTypeCard = () => {
  const skinType =
    useInputQueryStore((state) => state.inputQuery.skinType) || "Type I";

  const currentUV =
    useInputQueryStore((state) => state.inputQuery.UVIndex) || 1;

    //prevent UV to 0
  const roundedUVIndex = Math.max(1, Math.round(currentUV));
  const uvFactor = UVIndexFactor[roundedUVIndex] || 0.6;
  const TotalSunScreen =
    roundedUVIndex * uvFactor * SkinToneFactor[skinType];

    console.log({
      skinType,
      roundedUVIndex,
      skinFactor: SkinToneFactor[skinType],
      uvFactor: UVIndexFactor[roundedUVIndex],
    });

  const getSkinIcon = () => {
    // Extract the type number (Roman numeral) from the skin type string
    const typeMatch = skinType.match(/Type\s([IVX]+)/i);
    const typeNum = typeMatch ? typeMatch[1] : "III";

    switch (typeNum) {
      case "I":
        return "👩🏻";
      case "II":
        return "👨🏼";
      case "III":
        return "👩🏽";
      case "IV":
        return "👨🏾";
      case "V":
        return "👩🏾";
      case "VI":
        return "👨🏿";
      default:
        return "👤";
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-300 to-blue-400 p-6 h-full w-full">
      <div className="flex flex-col justify-between h-full">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{getSkinIcon()}</span>
          <h2 className="text-3xl font-bold">{skinType}</h2>
        </div>

        <div className="mt-auto">
          <p className="text-xs text-white font-medium">
            My skin tone is:{" "}
            <span className="font-bold text-xl">{skinType}</span>
          </p>
          <p className="text-xs text-white">
            UV Index Factor:{" "}
            <span className="font-bold text-xl">
              {uvFactor}{" "}
            </span>
            
          </p>
          <p className="text-xs text-white">
            Your calculated sunscreen Amount:{" "}
            <span className="font-bold text-xl">
              {TotalSunScreen.toFixed(1)}{" "}
            </span>
            teaspoons
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkinTypeCard;
