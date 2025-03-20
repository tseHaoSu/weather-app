import indexImage from "@/assets/index.jpeg";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUVData } from "@/hooks/useUV";
// import { useWeatherData } from "@/hooks/useUV";
import {
  DEFAULT_COORDINATES,
  DEFAULT_UV_INDEX,
  locationCoordinates,
  uvColors,
} from "@/lib/constants";
import useInputQueryStore from "@/store/store";
import { ArrowDown, MapPin } from "lucide-react";
import * as React from "react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface FormProps {
  location?: string;
}

const CardWithForm = () => {
  const setName = useInputQueryStore((state) => state.setName);
  const setSkinType = useInputQueryStore((state) => state.setSkinType);
  const setLocation = useInputQueryStore((state) => state.setLocation);
  const setUVIndex = useInputQueryStore((state) => state.setUVIndex);
  const location = useInputQueryStore((state) => state.inputQuery.location);
  const storedUVIndex = useInputQueryStore((state) => state.inputQuery.UVIndex);
  const [localLocation, setLocalLocation] = useState(location);
  const coordinates =
    location && locationCoordinates[location]
      ? locationCoordinates[location]
      : DEFAULT_COORDINATES;

  const {
    data: uvData,
    isLoading,
    error,
  } = useUVData({
    lat: coordinates.lat,
    lng: coordinates.lng,
  });

  //openweatherAPI
  // const { data: weatherData } = useWeatherData({
  //   lat: coordinates.lat,
  //   lon: coordinates.lng,
  // });

  // Open UV API
  const getOpenUVIndex = () => {
    if (isLoading) return "Loading...";
    if (error) return error;
    if (uvData && uvData.result) return Number(uvData.result.uv.toFixed(1)); // Default UV index
  };

  //Open UV API
  // const getMaxUVIndex = () => {
  //   if (isLoading) return "Loading...";
  //   if (error) return error; // Default UV index";
  //   if (uvData && uvData.result) return Number(uvData.result.uv_max.toFixed(1));
  //   return 8.5; // Default UV index
  // };

  // //openweatherAPI
  // const getOpenWeatherUVIndex = () => {
  //   if (isLoading) return "Loading...";
  //   if (error) return error;
  //   if (weatherData && weatherData.current)
  //     return Number(weatherData.current.uvi.toFixed(1));
  //   return "5"; // Default UV index
  // };

  // const getHourlyWeatherUVIndex = () => {
  //   if (isLoading) return "Loading...";
  //   if (error) return 5;
  //   if (weatherData && weatherData.hourly) {
  //     return weatherData.hourly.map((hour) => hour.uvi);
  //   }
  //   return "nothing";
  // };

  const OpenUVIndex = getOpenUVIndex();
  // const maxUVIndex = getMaxUVIndex();
  // const weatherUV = getOpenWeatherUVIndex();
  // const hourlyWeatherUV = getHourlyWeatherUVIndex();
  // console.log(currentUVIndex, maxUVIndex, weatherUV, hourlyWeatherUV);

  useEffect(() => {
    if (typeof OpenUVIndex === "number" && OpenUVIndex !== storedUVIndex) {
      setUVIndex(OpenUVIndex);
    }
  }, [OpenUVIndex, storedUVIndex, setUVIndex]);

  const numericUVIndex =
    typeof OpenUVIndex === "number" ? OpenUVIndex : DEFAULT_UV_INDEX;

  const getUVcolor = (uv: number) => {
    return uvColors[uv] ?? "#FFCC00";
  };

  //handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormProps = {
      location: localLocation,
    };
    setLocation(formData.location ?? "");

    toast.success("Form submitted successfully!", {
      description: `${localLocation} is your location.`,
    });
  };

  const handleClearStore = () => {
    // Reset all values in the store
    setName("");
    setSkinType("");
    setLocation("");
    setUVIndex(DEFAULT_UV_INDEX);

    toast.info("All data cleared", {
      description: "Your preferences have been reset.",
    });
  };

  return (
    <Card className="w-full h-full flex flex-col rounded-xl bg-muted/50 ">
      <CardHeader>
        <CardTitle>Let us know more about you!</CardTitle>
        <CardDescription>Input details</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="user-form" onSubmit={handleSubmit} className="mb-3">
          <div className="flex flex-row w-full items-start gap-2">
            <div className="flex flex-row space-x-2 mt-3">
              <Label htmlFor="location">My Location</Label>
              <Select
                value={localLocation}
                onValueChange={setLocalLocation}
              >
                <SelectTrigger
                  id="location"
                  className="border-2 border-blue-400 "
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Sydney">Sydney</SelectItem>
                  <SelectItem value="Melbourne">Melbourne</SelectItem>
                  <SelectItem value="Brisbane">Brisbane</SelectItem>
                  <SelectItem value="Perth">Perth</SelectItem>
                  <SelectItem value="Adelaide">Adelaide</SelectItem>
                  <SelectItem value="Gold Coast">Gold Coast</SelectItem>
                  <SelectItem value="Canberra">Canberra</SelectItem>
                  <SelectItem value="Newcastle">Newcastle</SelectItem>
                  <SelectItem value="Wollongong">Wollongong</SelectItem>
                  <SelectItem value="Hobart">Hobart</SelectItem>
                  <SelectItem value="Darwin">Darwin</SelectItem>
                  <SelectItem value="Cairns">Cairns</SelectItem>
                  <SelectItem value="Alice Springs">Alice Springs</SelectItem>
                </SelectContent>
              </Select>
              <Button
                className="border-2 border-blue-400  bg-sky-500"
                type="submit"
                form="user-form"
              >
                Submit
              </Button>
            </div>
            <h1 className="text-5xl mx-4 font-medium">or</h1>
            <div className="flex flex-col space-y-2">
              <Button className="border-2 border-blue-400 mt-3 bg-sky-500">
                get my location
                <MapPin size={24} />
              </Button>
            </div>
          </div>
        </form>
        <div className="mt-15">
          <ArrowDown
            size={24}
            className="text-red-500"
            strokeWidth={3}
            style={{ marginLeft: `${numericUVIndex * 5.4}rem` }}
          />
          <img src={indexImage} alt="index" className="w-full h-full" />
        </div>
        <div className="flex flex-row items-center gap-8 mt-4">
          <div className="flex flex-col">
            <h1 className="text-3xl mx-4 font-medium">
              Current UV Index level: {numericUVIndex}
            </h1>
            <h1 className="text-3xl mx-4 font-medium">
              My location: {location}
            </h1>
          </div>
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg"
            style={{ backgroundColor: getUVcolor(numericUVIndex) }}
          >
            {numericUVIndex}
          </div>
          <Button
            className="border-2 border-blue-400 mt-3 bg-sky-500"
            onClick={handleClearStore}
          >
            Clear
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardWithForm;
