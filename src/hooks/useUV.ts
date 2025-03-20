import { useQuery } from "@tanstack/react-query";
import apiClients from "@/services/uv-client.ts";
interface UseUVDataProps {
  lat: number;
  lng: number;
  alt?: number;
  dt?: string;
  enabled?: boolean;
}
export interface UseWeatherDataProps {
  lat: number;
  lon: number;
  exclude?: string;
  units?: string;
  lang?: string;
  enabled?: boolean;
}

const useUVData = ({
  lat,
  lng,
  enabled = true,
}: UseUVDataProps) => {
  return useQuery({
    queryKey: ["uvData", lat, lng],
    queryFn: () => apiClients.UVClient.getUV({ lat, lng }),
    staleTime: 1000 * 60 * 10, // 10 minutes
    enabled: enabled && Boolean(lat && lng),
  });
};

const useWeatherData = ({
  lat,
  lon,
  exclude = "minutely,daily,alerts",
  units = "metric",
  lang = "en",
  enabled = true,
}: UseWeatherDataProps) => {
  return useQuery({
    queryKey: ["weatherData", lat, lon],
    queryFn: () =>
      apiClients.weatherClient.getOneCall({
        lat,
        lon,
        exclude,
        units,
        lang,
      }),
    staleTime: 1000 * 60 * 10,
    enabled: enabled && Boolean(lat && lon),
  });
};

const useMutiplwWeatherData = (locations: UseWeatherDataProps[]) => {
  return locations.map((location) => ({
    queryKey: ["weatherData", location.lat, location.lon],
    queryFn: () =>
      apiClients.weatherClient.getOneCall({
        lat: location.lat,
        lon: location.lon,
        exclude: location.exclude,
        units: location.units,
        lang: location.lang,
      }),
    staleTime: 1000 * 60 * 10,
    enabled: location.enabled && Boolean(location.lat && location.lon),
  }));
};

export { useUVData, useWeatherData, useMutiplwWeatherData };
