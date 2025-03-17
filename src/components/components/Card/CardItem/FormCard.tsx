import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import * as React from "react";
import { toast } from "sonner";

interface FormProps {
  name: string;
  skinType: string;
  location: string;
}

const CardWithForm = () => {
  // Global state
  const setName = useInputQueryStore((state) => state.setName);
  const setSkinType = useInputQueryStore((state) => state.setSkinType);
  const setLocation = useInputQueryStore((state) => state.setLocation);

  // Local state
  const [name, setLocalName] = React.useState("");
  const [skinType, setLocalSkinType] = React.useState("");
  const [location, setLocalLocation] = React.useState("");

  //handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: FormProps = {
      name,
      skinType,
      location,
    };

    setName(formData.name);
    setSkinType(formData.skinType);
    setLocation(formData.location);

    console.log(formData);
    toast.success("Form submitted successfully!", {
      description: `Thank you, ${name}! Your preferences have been saved.`,
    });

    setLocalName("");
    setLocalSkinType("");
    setLocalLocation("");
  };

  const handleClearStore = () => {
    // Reset all values in the store
    setName("");
    setSkinType("");
    setLocation("");

    // Also clear local state
    setLocalName("");
    setLocalSkinType("");
    setLocalLocation("");

    toast.info("All data cleared", {
      description: "Your preferences have been reset.",
    });
  };

  return (
    <Card className="w-full h-full flex flex-col rounded-xl bg-muted/50 ">
      <CardHeader>
        <CardTitle>Let us know more about you!</CardTitle>
        <CardDescription>
          Input the following fields to get the recommended amount of sunscreen
          and UV info.{" "}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow overflow-y-auto">
        <form
          id="user-form"
          onSubmit={handleSubmit}
          className="h-full flex flex-col"
        >
          <div className="flex flex-row w-full items-start gap-3 flex-grow">
            <div className="flex flex-col space-y-1.5 ">
              <Label htmlFor="skin-type">Skin Tone</Label>
              <Select
                value={skinType}
                onValueChange={(value) => setLocalSkinType(value)}
              >
                <SelectTrigger
                  id="skin-type"
                  className="border-2 border-blue-400 "
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Type I">Type I (Very Fair)</SelectItem>
                  <SelectItem value="Type II">Type II (Fair)</SelectItem>
                  <SelectItem value="Type III">
                    Type III (Medium Olive)
                  </SelectItem>
                  <SelectItem value="Type IV">Type IV (Tan Brown)</SelectItem>
                  <SelectItem value="Type V">Type V (Dark Brown)</SelectItem>
                  <SelectItem value="Type VI">
                    Type VI (Deeply Pigmented/Black)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="location">My Location</Label>
              <Select
                value={location}
                onValueChange={(value) => setLocalLocation(value)}
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
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-start gap-3 mt-auto">
        <Button
          onClick={handleClearStore}
          className="border-red-300  hover:text-red-600"
        >
          Clear
        </Button>
        <Button type="submit" form="user-form">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardWithForm;
