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
import useInputQueryStore from "@/store/store";
import { ArrowDown, MapPin } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";
import useLocationUV from "../Utils/useLocationUV";

interface FormProps {
  location?: string;
}

const CardWithForm = () => {
  // Global state
  const setName = useInputQueryStore((state) => state.setName);
  const setSkinType = useInputQueryStore((state) => state.setSkinType);
  const setLocation = useInputQueryStore((state) => state.setLocation);
  const location = useInputQueryStore((state) => state.inputQuery.location);

  //handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: FormProps = {
      location,
    };
    setLocation(formData.location ?? "");

    console.log(formData);
    toast.success("Form submitted successfully!", {
      description: `${location} is your location.`,
    });
  };

  const handleClearStore = () => {
    // Reset all values in the store
    setName("");
    setSkinType("");
    setLocation("");

    toast.info("All data cleared", {
      description: "Your preferences have been reset.",
    });
  };

  const { weatherUV: rawUV } = useLocationUV();

  console.log(rawUV);
  const weatherUV = Math.round(typeof rawUV === "number" ? rawUV : 0);

  const uvColors: { [key: number]: string } = {
    0: "#299501", // Low - Green
    1: "#299501", // Low - Green
    2: "#87CF30", // Low - Light Green
    3: "#FFFF00", // Moderate - Yellow
    4: "#FFFF00", // Moderate - Yellow
    5: "#FFCC00", // Moderate - Yellow-Orange
    6: "#FFA500", // High - Orange
    7: "#FFA500", // High - Orange
    8: "#FF4D00", // Very High - Red-Orange
    9: "#FF0000", // Very High - Red
    10: "#CC00FF", // Extreme - Purple
    11: "#9000CC", // Extreme - Dark Purple
    12: "#660099", // Extreme - Dark Purple
  };

  const getUVcolor = (uv: number) => {
    return uvColors[uv] ?? "#FFCC00";
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
                value={location}
                onValueChange={(value) => setLocation(value)}
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
            style={{ marginLeft: `${weatherUV * 5.4}rem` }}
          />
          <img src={indexImage} alt="index" className="w-full h-full" />
        </div>
        <div className="flex flex-row items-center gap-8 mt-4">
          <div className="flex flex-col">
            <h1 className="text-3xl mx-4 font-medium">
              Current UV Index level:
            </h1>
            <h1 className="text-3xl mx-4 font-medium">
              My location: {location}
            </h1>
          </div>
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg"
            style={{ backgroundColor: getUVcolor(weatherUV) }}
          >
            {weatherUV}
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
