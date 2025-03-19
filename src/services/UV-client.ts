import axios, { AxiosRequestConfig } from "axios";

// OpenUV API interfaces
export interface UVResponse {
  result: {
    uv: number;
    uv_time: string;
    uv_max: number;
    uv_max_time: string;
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

// Define OpenWeatherMap response interface based on the provided example
export interface OpenWeatherResponse {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
  };
  hourly: Array<{
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust?: number;
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
    pop: number;
    rain?: {
      "1h": number;
    };
  }>;
}

// OpenUV API client
const openUVAxiosInstance = axios.create({
  baseURL: "https://api.openuv.io/api/v1",
  headers: {
    "x-access-token": "openuv-11cnu4rm88gvb46-io",
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
    return openUVAxiosInstance
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
    return openUVAxiosInstance
      .get<ProtectionResponse>("/protection", {
        ...config,
        params,
      })
      .then((res) => res.data);
  };
}

// OpenWeatherMap API client
const openWeatherAxiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org",
  params: {
    appid: "290dc8f3e0a351cdd1155bce8fedf21e",
  },
});

class OpenWeatherClient {
  getOneCall = (
    params: {
      lat: number;
      lon: number;
      exclude?: string;
      units?: string;
      lang?: string;
    },
    config?: AxiosRequestConfig
  ) => {
    return openWeatherAxiosInstance
      .get<OpenWeatherResponse>("/data/3.0/onecall", {
        ...config,
        params,
      })
      .then((res) => res.data);
  };
}

// Export default instances for convenience
const UVClient = new OpenUVClient();
const weatherClient = new OpenWeatherClient();
export default { UVClient, weatherClient };
