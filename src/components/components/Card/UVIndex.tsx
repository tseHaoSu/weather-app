import useUVData from "@/hooks/useUV";
import { locationCoordinates } from "@/lib/constants";
import useInputQueryStore from "@/store/store";

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

  // Changed div to span for all return cases to avoid nesting issues
  if (isLoading) return <span>Loading UV data...</span>;
  if (error) return <span>Error loading UV data</span>;
  if (!data) return null;

  return <span>{data.result.uv}</span>;
};

export default UVIndex;
