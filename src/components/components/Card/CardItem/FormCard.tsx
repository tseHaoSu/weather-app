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
  skinType: string;
  location: string;
}

const CardWithForm = () => {
  // Global state
  const setSkinType = useInputQueryStore((state) => state.setSkinType);
  const setLocation = useInputQueryStore((state) => state.setLocation);

  // Local state
  const [skinType, setLocalSkinType] = React.useState("");
  const [location, setLocalLocation] = React.useState("");

  //

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: FormProps = {
      skinType,
      location,
    };

    setSkinType(formData.skinType);
    setLocation(formData.location);

    console.log(formData);
    toast.success("Form submitted successfully!", {
      description: `Thank you! Your preferences have been saved.`,
    });

    setLocalSkinType("");
    setLocalLocation("");
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
          className="flex items-end gap-4"
        >
          <div className="flex w-full gap-4">
            <div className="flex flex-col flex-1">
              <Label htmlFor="skin-type" className="font-semibold">Choose your skin tone</Label>
              <Select
                value={skinType}
                onValueChange={(value) => setLocalSkinType(value)}
              >
                <SelectTrigger id="skin-type">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Type I">Type I (Very Fair)</SelectItem>
                  <SelectItem value="Type II">Type II (Fair)</SelectItem>
                  <SelectItem value="Type III">Type III (Medium Olive)</SelectItem>
                  <SelectItem value="Type IV">Type IV (Tan Brown)</SelectItem>
                  <SelectItem value="Type V">Type V (Dark Brown)</SelectItem>
                  <SelectItem value="Type VI">Type VI (Deeply Pigmented/Black)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col flex-1">
              <Label htmlFor="location" className="font-semibold">Choose your Location</Label>
              <Select
                value={location}
                onValueChange={(value) => setLocalLocation(value)}
              >
                <SelectTrigger id="location">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="New South Wales">
                    New South Wales (NSW)
                  </SelectItem>
                  <SelectItem value="Victoria">Victoria</SelectItem>
                  <SelectItem value="Queensland">Queensland</SelectItem>
                  <SelectItem value="Western Australia">
                    Western Australia
                  </SelectItem>
                  <SelectItem value="South Australia">
                    South Australia
                  </SelectItem>
                  <SelectItem value="Tasmania"> Tasmania</SelectItem>
                  <SelectItem value="Australian Capital Territory">
                    Australian Capital Territory
                  </SelectItem>
                  <SelectItem value="Northern Territory">
                    Northern Territory (NT)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <CardFooter className="flex justify-end">
            <Button type="submit" form="user-form">
              Submit
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default CardWithForm;
