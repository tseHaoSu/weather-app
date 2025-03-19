import useInputQueryStore from "@/store/store";


const LocationCard = () => {
  const location = useInputQueryStore((state) => state.inputQuery.location);
  const currentUVIndex = useInputQueryStore((state) => state.inputQuery.UVIndex);
  const maxUVIndex = useInputQueryStore((state) => state.inputQuery.maxUVIndex);

  // Map icon based on location type (city vs country)
  const getLocationIcon = () => {
    // Simple detection - can be enhanced
    return "📍"; // Default location pin
  };

  return (
    <div className="bg-gradient-to-r from-purple-300 to-blue-400 p-6  h-full w-full">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{getLocationIcon()}</span>
            <h2 className="text-3xl font-bold truncate">{location}</h2>
          </div>
        </div>
        <div className="mt-auto">
          <p className="text-xs text-white font-medium">
            Current UV Level:
            <span className="font-bold ml-2">{currentUVIndex}</span>
          </p>
          <p className="text-xs text-white font-medium">
            {location} Max UV Level Today:
            <span className="font-bold ml-2">{maxUVIndex}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
