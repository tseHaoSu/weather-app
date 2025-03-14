import useUVData from "@/hooks/useUV";
import { locationCoordinates } from "@/lib/constants";
import useInputQueryStore from "@/store/store";
import { useEffect } from "react";

const UVMaxIndex = () => {
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

  const setMaxUV = useInputQueryStore((state) => state.setMaxUV);
  const maxUV = useInputQueryStore((state) => state.inputQuery.maxUV);

  //trigger event
  useEffect(() => {
    if (data) {
      const roundedUVIndex = Math.round(data.result.uv_max);
      setMaxUV(roundedUVIndex);
    } else if (error) {
      setMaxUV(5);
    }
  }, [data, setMaxUV, error]);

  // Changed div to span for all return cases to avoid nesting issues
  if (isLoading) return <span>Loading UV data...</span>;
  if (error) return <span>5</span>;
  if (!data) return null;

  return <span>{maxUV}</span>;
};

export default UVMaxIndex;
