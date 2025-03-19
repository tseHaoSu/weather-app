import { useUVData, useWeatherData } from "@/hooks/useUV";
import { locationCoordinates } from "@/lib/constants";
import useInputQueryStore from "@/store/store";
import { useEffect } from "react";

const useLocationUV = () => {
  const location = useInputQueryStore((state) => state.inputQuery.location);
  const setCurrentUVIndex = useInputQueryStore((state) => state.setUVIndex);
  const setMaxUVIndex = useInputQueryStore((state) => state.setMaxUV);

  const coordinates =
    location && locationCoordinates[location]
      ? locationCoordinates[location]
      : { lat: -33.8688, lng: 151.2093 }; // Default to Sydney if location not found

  // Fetch UV data for coordinates
  const {
    data: uvData,
    isLoading,
    error,
  } = useUVData({
    lat: coordinates.lat,
    lng: coordinates.lng,
  });

  const { data: weatherData } = useWeatherData({
    lat: coordinates.lat,
    lon: coordinates.lng,
  });

  const getCurrentUVIndex = () => {
    if (isLoading) return "Loading...";
    if (error) return error;
    if (uvData && uvData.result) return Number(uvData.result.uv.toFixed(1));
    return 5; // Default UV index
  };


  const getMaxUVIndex = () => {
    if (isLoading) return "Loading...";
    if (error) return error; // Default UV index";
    if (uvData && uvData.result) return Number(uvData.result.uv_max.toFixed(1));
    return 8.5; // Default UV index
  };


  const getWeatherUV = () => {
    if (isLoading) return "Loading...";
    if (error) return error;
    if (weatherData && weatherData.current)
      return Number(weatherData.current.uvi.toFixed(1));
    return "5"; // Default UV index
  };

  const getHourlyWeatherUV = () => {
    if (isLoading) return "Loading...";
    if (error) return 5;
    if (weatherData && weatherData.hourly) {
      return weatherData.hourly.map((hour) => hour.uvi);
    }
    return "nothing";
  };

  // Get actual values
  const currentUVIndex = getCurrentUVIndex();
  const maxUVIndex = getMaxUVIndex();
  const weatherUV = getWeatherUV();
  const hourlyWeatherUV = getHourlyWeatherUV();

  // Update store when values change
  useEffect(() => {
    if (typeof currentUVIndex === "number") {
      setCurrentUVIndex(currentUVIndex);
    }

    if (typeof maxUVIndex === "number") {
      setMaxUVIndex(maxUVIndex);
    }
  }, [currentUVIndex, maxUVIndex, setCurrentUVIndex, setMaxUVIndex]);

  console.log(currentUVIndex);

  return {
    currentUVIndex,
    maxUVIndex,
    isLoading,
    error,
    location,
    coordinates,
    weatherUV,
    hourlyWeatherUV,
  };
};

export default useLocationUV;
