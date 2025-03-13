import { useQuery } from "@tanstack/react-query";
import OpenUVClient from "@/services/UV-client";

const uvClient = new OpenUVClient();

interface UseUVProtectionProps {
  lat: number;
  lng: number;
  alt?: number;
  from_time?: string;
  to_time?: string;
  enabled?: boolean;
}

const useUVProtection = ({
  lat,
  lng,
  alt = 0,
  from_time = "",
  to_time = "",
  enabled = true,
}: UseUVProtectionProps) => {
  return useQuery({
    queryKey: ["uvProtection", lat, lng, alt, from_time, to_time],
    queryFn: () =>
      uvClient.getProtection({ lat, lng, alt, from_time, to_time }),
    staleTime: 1000 * 60 * 60, // 1 hour
    enabled: enabled && Boolean(lat && lng),
  });
};

export default useUVProtection;
