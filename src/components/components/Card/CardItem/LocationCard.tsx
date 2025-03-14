import useInputQueryStore from "@/store/store";
import useUVIndexSetup from "../Utils/UVIndex";

const LocationCard = () => {
  const location = useInputQueryStore((state) => state.inputQuery.location);
  const { UVIndex, isLoading } = useUVIndexSetup();
  console.log(UVIndex)

  // Map icon based on location type (city vs country)
  const getLocationIcon = () => {
    // Simple detection - can be enhanced
    return "📍"; // Default location pin
  };

  return (
    <div className="bg-gradient-to-r from-amber-500 to-pink-600 p-6  h-full w-full">
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
            <span className="font-bold ml-2">
              {isLoading ? "Loading..." :  `${UVIndex}`}
            </span>
          </p>
          <p className="text-xs text-amber-200 font-medium">
            The max UV level for {location} is:
            <span className="font-bold ml-2">
             {isLoading ? "Loading..." :  `${UVIndex}`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
