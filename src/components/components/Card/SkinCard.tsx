import useInputQueryStore from "@/store/store";
import SunScreenCalculation from "./SunScreenCalculation";

const SkinTypeCard = () => {
  const skinType =
    useInputQueryStore((state) => state.inputQuery).skinType || "Unknown";

  type SkinTypeKey = "normal" | "dry" | "oily" | "combination" | "sensitive";

  // Icon or emoji mapping for each skin type
  const skinTypeIcons: Record<SkinTypeKey, string> = {
    normal: "✓",
    dry: "🧴",
    oily: "💧",
    combination: "◑",
    sensitive: "❀",
  };

  // Get the lowercase version of skin type
  const skinTypeLower = skinType.toLowerCase();

  // Use the optional chaining with correct syntax
  const icon = skinTypeIcons[skinTypeLower as SkinTypeKey] || "?";

  return (
    <div className="bg-gradient-to-r from-teal-500 to-indigo-600 rounded-lg shadow-lg p-6 text-white mx-auto h-full w-full">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{icon}</span>
            <h2 className="text-3xl font-bold">{skinType}</h2>
          </div>
        </div>
        <div className="mt-auto">
          <p className="text-xs text-blue-200 font-medium">
            My skin type is: <span className="font-bold">{skinType}</span>
          </p>
          <p className="text-xs text-blue-200 font-medium">
            Recommended Sunscreen{" "}
            <span className="font-bold">
              <SunScreenCalculation />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkinTypeCard;
