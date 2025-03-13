import axios from "axios";

interface CurrentUVResponse {
  current: {
    uvi: number;
  };
}

//create an axios instance
const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/3.0",
  params: {
    appid: "openuv-c10rrm85ujxtm-io",
  },
});

class APIClient {
  // Get just the current UV index as a single number
  getCurrentUV(lat: number, lon: number): Promise<number> {
    return axiosInstance
      .get<CurrentUVResponse>("/onecall", {
        params: {
          lat,
          lon,
          exclude: "minutely,hourly,daily,alerts", // Exclude everything except current
        },
      })
      .then((res) => res.data.current.uvi);
  }
}

export default APIClient;
