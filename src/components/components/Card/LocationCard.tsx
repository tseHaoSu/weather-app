import useInputQueryStore from "@/store/store";
import UVIndex from "./UVIndex";

const LocationCard = () => {
  const location = useInputQueryStore((state) => state.inputQuery.location);

  // Map icon based on location type (city vs country)
  const getLocationIcon = () => {
    // Simple detection - you can enhance this logic
    return "📍"; // Default location pin
  };

  return (
    <div className="bg-gradient-to-r from-amber-500 to-pink-600 rounded-lg shadow-lg p-6 text-white  mx-auto h-full w-full">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{getLocationIcon()}</span>
            <h2 className="text-3xl font-bold truncate">{location}</h2>
          </div>
        </div>
        <div className="mt-auto">
          <p className="text-xs text-amber-200 font-medium">
            Current UV Level:
            <span className="font-bold">
              <UVIndex />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
