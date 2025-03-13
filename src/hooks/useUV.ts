import { useQuery } from "@tanstack/react-query";
import OpenUVClient from "@/services/UV-client";

const uvClient = new OpenUVClient();

interface UseUVDataProps {
  lat: number;
  lng: number;
  alt?: number;
  dt?: string;
  enabled?: boolean;
}

const useUVData = ({
  lat,
  lng,
  alt = 0,
  dt = "",
  enabled = true,
}: UseUVDataProps) => {
  return useQuery({
    queryKey: ["uvData", lat, lng, alt, dt],
    queryFn: () => uvClient.getUV({ lat, lng, alt, dt }),
    staleTime: 1000 * 60 * 10, // 10 minutes
    enabled: enabled && Boolean(lat && lng),
  });
};

export default useUVData;
