import useUVData from "@/hooks/useUV";
import { locationCoordinates } from "@/lib/constants";
import useInputQueryStore from "@/store/store";
import { useEffect } from "react";

const UVIndex = () => {
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
    if (data) {
      //set the global store of the UV index and Max UV in dex
      const roundedUVIndex = Math.round(data.result.uv);
      const roundedMaxUVIndex = Math.round(data.result.uv_max);
      setUVIndex(roundedUVIndex);
      setMaxUV(roundedMaxUVIndex);
    } else if (error) {
      setUVIndex(5);
    }
  }, [data, setUVIndex, error, setMaxUV]);

  // Changed div to span for all return cases to avoid nesting issues
  if (isLoading) return <span>Loading UV data...</span>;
  if (!data) return null;

  return <span>{UVIndex !== undefined ? UVIndex : 5}</span>;
};

export default UVIndex;
