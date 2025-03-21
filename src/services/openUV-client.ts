import axios, { AxiosRequestConfig } from "axios";

// const UV_API_KEY = import.meta.env.VITE_OPENUV_API_KEY;

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

// OpenUV API client
const openUVAxiosInstance = axios.create({
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

const uvClient = new OpenUVClient();
export default uvClient;
