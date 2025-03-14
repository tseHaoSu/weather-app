import axios, { AxiosRequestConfig } from "axios";

export interface UVResponse {
  result: {
    uv: number;
    uv_time: string;
    uv_max: number;
    uv_max_time: string;
    ozone: number;
    ozone_time: string;
    safe_exposure_time: {
      st1: number | null;
      st2: number | null;
      st3: number | null;
      st4: number | null;
      st5: number | null;
      st6: number | null;
    };
    sun_info: {
      sun_times: {
        solarNoon: string;
        nadir: string;
        sunrise: string;
        sunset: string;
        sunriseEnd: string;
        sunsetStart: string;
        dawn: string;
        dusk: string;
        nauticalDawn: string;
        nauticalDusk: string;
        nightEnd: string;
        night: string;
        goldenHourEnd: string;
        goldenHour: string;
      };
      sun_position: {
        azimuth: number;
        altitude: number;
      };
    };
  };
}

export interface ProtectionResponse {
  result: {
    from_time: string;
    to_time: string;
    from_uv: number;
    to_uv: number;
    protection_start: string;
    protection_end: string;
  };
}

const axiosInstance = axios.create({
  baseURL: "https://api.openuv.io/api/v1",
  headers: {
    "x-access-token": "openuv-11cnu4rm88gvdul-io",
  },
});

class OpenUVClient {
  getUV = (
    params: {
      lat: number;
      lng: number;
      alt?: number;
      dt?: string;
    },
    config?: AxiosRequestConfig
  ) => {
    return axiosInstance
      .get<UVResponse>("/uv", {
        ...config,
        params,
      })
      .then((res) => res.data);
  };

  getProtection = (
    params: {
      lat: number;
      lng: number;
      alt?: number;
      from_time?: string;
      to_time?: string;
    },
    config?: AxiosRequestConfig
  ) => {
    return axiosInstance
      .get<ProtectionResponse>("/protection", {
        ...config,
        params,
      })
      .then((res) => res.data);
  };
}

export default OpenUVClient;
