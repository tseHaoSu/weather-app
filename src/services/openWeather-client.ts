import axios, { AxiosRequestConfig } from "axios";

const WEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

// Define OpenWeatherMap response interface
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

// OpenWeatherMap API client
const openWeatherAxiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org",
  params: {
    appid: WEATHER_API_KEY,
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

const weatherClient = new OpenWeatherClient();
export default weatherClient;
