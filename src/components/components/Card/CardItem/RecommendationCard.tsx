import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useInputQueryStore from "@/store/store";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { toast } from "sonner";

interface FormProps {
    skinTone?: string;
}

const RecommendationCard = () => {
  const setSkinTone = useInputQueryStore((state) => state.setSkinType);
  const skinTone = useInputQueryStore((state) => state.inputQuery.skinType);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormProps = {
        skinTone
    };
    setSkinTone(formData.skinTone ?? "");
    toast.success("Form submitted successfully!", {
      description: `${skinTone} type set.`,
    });

  };
  return (
    <Card className="w-full h-full flex flex-col rounded-xl bg-muted/50 ">
      <CardHeader>
        <CardTitle>Sun Protection Recommendation System </CardTitle>
        <CardDescription>
          This system provides sun protection recommendations based on skin tone
          (1-7) and UV index (0-11+). The lightest skin tone (1) is the most
          sensitive to UV radiation, while the darkest skin tone (7) is the
          least sensitive. The system calculates recommended clothing, hat,
          sunglasses, and SPF levels based on these inputs.{" "}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="user-form" onSubmit= {handleSubmit} className="mb-3">
          <div className="flex flex-row w-full items-start gap-2">
            <div className="flex flex-row space-x-2 mt-3">
              <Label htmlFor="location">My Location</Label>
              <Select
                value={skinTone}
                onValueChange={(value) => setSkinTone(value)}
              >
                <SelectTrigger
                  id="skin tone"
                  className="border-2 border-blue-400 "
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Type I">Type I - Very fair</SelectItem>
                  <SelectItem value="Type II">Type II - Fair</SelectItem>
                  <SelectItem value="Type III">Type III - Medium</SelectItem>
                  <SelectItem value="Type IV">Type IV - Olive</SelectItem>
                  <SelectItem value="Type V">Type V - Brown</SelectItem>
                  <SelectItem value="Type VI">
                    Type VI - Dark brown/black
                  </SelectItem>
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
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default RecommendationCard;
