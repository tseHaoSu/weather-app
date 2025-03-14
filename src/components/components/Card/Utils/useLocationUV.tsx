import useUVData from "@/hooks/useUV";
import { locationCoordinates } from "@/lib/constants";
import useInputQueryStore from "@/store/store";
import { useEffect } from "react";

const useLocationUV = () => {
  // Get location from store
  const location = useInputQueryStore((state) => state.inputQuery.location);

  // State setters from store
  const setCurrentUVIndex = useInputQueryStore(
    (state) => state.setUVIndex
  );
  const setMaxUVIndex = useInputQueryStore((state) => state.setMaxUV);

  // Get coordinates based on location
  const coordinates =
    location && locationCoordinates[location]
      ? locationCoordinates[location]
      : { lat: -33.8688, lng: 151.2093 }; // Default to Sydney if location not found

  // Fetch UV data for coordinates
  const { data, isLoading, error } = useUVData({
    lat: coordinates.lat,
    lng: coordinates.lng,
  });

  // Process current UV index
  const getCurrentUVIndex = () => {
    if (isLoading) return "Loading...";
    if (error) return "Error!";
    if (data && data.result) return Number(data.result.uv.toFixed(1));
    return 5; // Default UV index
  };

  // Process max UV index
  const getMaxUVIndex = () => {
    if (isLoading) return "Loading...";
    if (error) return "Error!";
    if (data && data.result) return Number(data.result.uv_max.toFixed(1));
    return 8.5; // Default UV index
  };

  // Get actual values
  const currentUVIndex = getCurrentUVIndex();
  const maxUVIndex = getMaxUVIndex();

  // Update store when values change
  useEffect(() => {
    if (typeof currentUVIndex === "number") {
      setCurrentUVIndex(currentUVIndex);
    }

    if (typeof maxUVIndex === "number") {
      setMaxUVIndex(maxUVIndex);
    }
  }, [currentUVIndex, maxUVIndex, setCurrentUVIndex, setMaxUVIndex]);

  return {
    currentUVIndex,
    maxUVIndex,
    isLoading,
    error,
    location,
    coordinates,
  };
};

export default useLocationUV;
