import useUVData from "@/hooks/useUV";
import { locationCoordinates } from "@/lib/constants";
import useInputQueryStore from "@/store/store";
import { useEffect } from "react";

const useUVIndexSetup = () => {
  const currentLocation = useInputQueryStore(
    (state) => state.inputQuery.location
  );

  const coordinates =
    currentLocation && locationCoordinates[currentLocation]
      ? locationCoordinates[currentLocation]
      : { lat: -33.8688, lng: 151.2093 };

  const { data, isLoading, error } = useUVData({
    lat: coordinates.lat,
    lng: coordinates.lng,
  });

  const setUVIndex = useInputQueryStore((state) => state.setUVIndex);
  const setMaxUV = useInputQueryStore((state) => state.setMaxUV);
  const UVIndex = useInputQueryStore((state) => state.inputQuery.UVIndex);

  useEffect(() => {
    console.log("Effect running with data:", data);
    if (data) {
      // Set the global store of the UV index and Max UV index
      const roundedUVIndex = Math.round(data.result.uv);
      const roundedMaxUVIndex = Math.round(data.result.uv_max);
      console.log("Setting UV index to:", roundedUVIndex);
      setUVIndex(roundedUVIndex);
      setMaxUV(roundedMaxUVIndex);
    } else if (error) {
      console.log("Error detected, using fallback values");
      setUVIndex(5);
      setMaxUV(7);
    }
  }, [data, setUVIndex, error, setMaxUV]);

  return {
    UVIndex,
    isLoading,
    error,
  };
};

export default useUVIndexSetup;
