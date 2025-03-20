import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SkinToneFactor, skinTypeColors, UVIndexFactor } from "@/lib/constants";
import useInputQueryStore from "@/store/store";
import { toast } from "sonner";
import ProtectionRec, { SkinToneType } from "../Utils/ProtectionRec";

interface FormProps {
  skinTone?: string;
}

const RecommendationCard = () => {
  const setSkinTone = useInputQueryStore((state) => state.setSkinType);
  const skinTone =
    useInputQueryStore((state) => state.inputQuery.skinType) || "";
  const currentUV =
    useInputQueryStore((state) => state.inputQuery.UVIndex) || 1;
  const location = useInputQueryStore((state) => state.inputQuery.location);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormProps = {
      skinTone,
    };
    setSkinTone(formData.skinTone ?? "");
    toast.success("Form submitted successfully!", {
      description: `${skinTone} set.`,
    });
  };

  //prevent UV to 0
  const roundedUVIndex = Math.max(1, Math.round(currentUV));
  const uvFactor = UVIndexFactor[roundedUVIndex] || 0.6;
  const TotalSunScreen = (
    roundedUVIndex *
    uvFactor *
    SkinToneFactor[skinTone]
  ).toFixed(1);

  //comfirm the skin tone
   const isValidSkinTone = (value: string): value is SkinToneType => {
     return [
       "Type I",
       "Type II",
       "Type III",
       "Type IV",
       "Type V",
       "Type VI",
     ].includes(value);
   };

  const safeUVIndex = typeof currentUV === "number" ? currentUV : 0;
  const safeSkinTone = isValidSkinTone(skinTone) ? skinTone : "Type III";
  const recommendations = ProtectionRec(safeSkinTone, safeUVIndex);
  const recommendationItems = [
    { title: "Risk Level:", detail: recommendations.riskLevel },
    { title: "Clothing:", detail: recommendations.clothing },
    { title: "Hat:", detail: recommendations.hat },
    { title: "Sunglasses:", detail: recommendations.sunglasses },
    { title: "Fabric:", detail: recommendations.fabric },
    { title: "SPF:", detail: recommendations.spf },
    { title: "", detail: recommendations.additionalNotes },
  ];

  const getSkinIcon = () => {
    // Extract the type number (Roman numeral) from the skin type string
    const typeMatch = skinTone.match(/Type\s([IVX]+)/i);
    const typeNum = typeMatch ? typeMatch[1] : "III";

    switch (typeNum) {
      case "I":
        return "👩🏻";
      case "II":
        return "👨🏼";
      case "III":
        return "👩🏽";
      case "IV":
        return "👨🏾";
      case "V":
        return "👩🏾";
      case "VI":
        return "👨🏿";
      default:
        return "👤";
    }
  };

  return (
    <div className="grid grid-cols-1 gap-3 w-full">
      {/* First Card - Takes 2 columns */}
      <Card className="col-span-2 rounded-xl bg-muted/50 mr-3">
        <CardHeader>
          <CardTitle>Sun Protection Recommendation System</CardTitle>
          <CardDescription>
            This system provides sun protection recommendations based on skin
            tone (1-7) and UV index (0-11+). The lightest skin tone (1) is the
            most sensitive to UV radiation, while the darkest skin tone (7) is
            the least sensitive. The system calculates recommended clothing,
            hat, sunglasses, and SPF levels based on these inputs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="user-form" onSubmit={handleSubmit} className="mb-3">
            <div className="flex items-start gap-2">
              <div className="flex items-center space-x-2">
                <Label htmlFor="skin-tone">My SkinTone:</Label>
                <Select
                  value={skinTone}
                  onValueChange={(value) => setSkinTone(value)}
                >
                  <SelectTrigger
                    id="skin-tone"
                    className="border-2 border-blue-400"
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
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Second Card */}
        <Card className="rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg overflow-hidden">
          <CardContent>
            {skinTone ? (
              <>
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className="w-16 h-16 rounded-full border-2 border-white shadow-md flex items-center justify-center text-3xl"
                    style={{ backgroundColor: skinTypeColors[skinTone] }}
                  >
                    {getSkinIcon()}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{skinTone}</h2>
                </div>
                <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between">
                      <p className="text-white font-medium">My Location</p>
                      <p className="text-white font-bold">{location}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-white font-medium">My Skin Type:</p>
                      <p className="text-white font-bold">{skinTone}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-white font-medium">
                        Current UV Index:
                      </p>
                      <p className="text-white font-bold">{roundedUVIndex}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-white font-medium">UV Factor:</p>
                      <p className="text-white font-bold">{uvFactor}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-white font-medium">Sunscreen Amount</p>
                      <p className="text-white font-bold">{TotalSunScreen}</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="h-full flex items-center justify-center">
                <p className="text-xl text-white">
                  Select a skin type to view recommendations
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Third Card */}
        <Card className="bg-gradient-to-r from-blue-400 to-purple-300 rounded-xl shadow-lg overflow-hidden">
          <CardContent>
            <div className="flex flex-col h-full">
              <h2 className="text-2xl font-bold text-white mb-4 mt-4">
                <span className="mr-3">👕</span> Clothing Recommendation{" "}
                <span className="ml-3">🕶️</span>
              </h2>
              <div className="relative h-full">
                <Carousel className="w-full">
                  <CarouselContent className="p-2">
                    {recommendationItems.map((item, index) => (
                      <CarouselItem key={index} className="h-full">
                        <div className="p-1 h-full">
                          <div className="flex justify-center items-center p-4 h-full">
                            <span className="text-xl font-semibold text-white">
                              {item.title}
                            </span>
                            <span className="text-xl font-semibold text-white ml-3">
                              {item.detail}
                            </span>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center items-center gap-2 mt-10 mb-2">
                    <CarouselPrevious className="static transform-none mx-0 bg-background hover:bg-muted border-none" />
                    <CarouselNext className="static transform-none mx-0 bg-background hover:bg-muted border-none" />
                  </div>
                </Carousel>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default RecommendationCard;
