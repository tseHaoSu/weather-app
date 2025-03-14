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
      : { lat: -33.8688, lon: 151.2093 };

  const { data, isLoading, error } = useUVData({
    lat: coordinates.lat,
    lng: coordinates.lon,
  });

  const setUVIndex = useInputQueryStore((state) => state.setUVIndex);
  const UVIndex = useInputQueryStore((state) => state.inputQuery.UVIndex);

  useEffect(() => {
    if (data) {
      const roundedUVIndex = Math.round(data.result.uv);
      setUVIndex(roundedUVIndex);
    } else if (error) {
      setUVIndex(5);
    }
  }, [data, setUVIndex, error]);

  // Changed div to span for all return cases to avoid nesting issues
  if (isLoading) return <span>Loading UV data...</span>;
  if (error) return <span>0</span>;
  if (!data) return null;

  return <span>{UVIndex}</span>;
};

export default UVIndex;
