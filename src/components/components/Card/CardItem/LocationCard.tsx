import useUVData from "@/hooks/useUV";
import useInputQueryStore from "@/store/store";

import { locationCoordinates } from "@/lib/constants";

const LocationCard = () => {
  const location = useInputQueryStore((state) => state.inputQuery.location);
  const coordinates =
    location && locationCoordinates[location]
      ? locationCoordinates[location]
      : { lat: -33.8688, lng: 151.2093 };

  //retrive location UV data
  const { data, isLoading, error } = useUVData({
    lat: coordinates.lat,
    lng: coordinates.lng,
  });

  const getUVIndex = () => {
    if (isLoading) return "Loading...";
    if (error) return "Error!";
    if (data && data.result) return Number(data.result.uv.toFixed(1));
    return 5; // Default UV index
  };

  const getMaxUVIndex = () => {
    if (isLoading) return "Loading...";
    if (error) return "Error!";
    if (data && data.result) return Number(data.result.uv_max.toFixed(1));
    return 8.5; // Default UV index
  };

  const locationUVIndex = getUVIndex();
  const locationMaxUVIndex = getMaxUVIndex();
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
            <span className="font-bold ml-2">{locationUVIndex}</span>
          </p>
          <p className="text-xs text-white font-medium">
            {location} Max UV Level Today:
            <span className="font-bold ml-2">{locationMaxUVIndex}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
