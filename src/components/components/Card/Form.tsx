import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useInputQueryStore from "@/store/store";
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

  return (
    <Card className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
      <CardHeader>
        <CardTitle>Let us know more about you!</CardTitle>
        <CardDescription>
          Input the following fields to get the recommended amount of sunscreen
          and UV info.{" "}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="user-form" onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-6">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setLocalName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="skin-type">Skin Type</Label>
              <Select
                value={skinType}
                onValueChange={(value) => setLocalSkinType(value)}
              >
                <SelectTrigger id="skin-type">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="dry">Dry</SelectItem>
                  <SelectItem value="oily">Oily</SelectItem>
                  <SelectItem value="combination">Combination</SelectItem>
                  <SelectItem value="sensitive">Sensitive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="location">My Location</Label>
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
                  <SelectItem value="Victoria"> (VIC)</SelectItem>
                  <SelectItem value="Queensland"> (QLD)</SelectItem>
                  <SelectItem value="Western Australia"> (WA)</SelectItem>
                  <SelectItem value="South Australia"> (SA)</SelectItem>
                  <SelectItem value="Tasmania"> (TAS)</SelectItem>
                  <SelectItem value="Australian Capital Territory">
                    Australian Capital Territory (ACT)
                  </SelectItem>
                  <SelectItem value="nt">Northern Territory (NT)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type="submit" form="user-form">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardWithForm;
