import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProtectionRec, { SkinToneType } from "../Utils/ProtectionRec";
import useInputQueryStore from "@/store/store";

const CarouselDemo = () => {
  const storedUVIndex = useInputQueryStore((state) => state.inputQuery.UVIndex);
  const skinTone = useInputQueryStore((state) => state.inputQuery.skinType)  || "";

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
  const safeUVIndex = typeof storedUVIndex === "number" ? storedUVIndex : 0;
  const safeSkinTone = isValidSkinTone(skinTone) ? skinTone : "Type III";
  const recommendations = ProtectionRec(safeSkinTone, safeUVIndex);
  const recommendationItems = [
    { title: "Risk Level", detail: recommendations.riskLevel },
    { title: "Clothing", detail: recommendations.clothing },
    { title: "Hat", detail: recommendations.hat },
    { title: "Sunglasses", detail: recommendations.sunglasses },
    { title: "Fabric", detail: recommendations.fabric },
    { title: "Additional Notes", detail: recommendations.additionalNotes },
  ];

  return (
    <div className="h-full w-full bg-gradient-to-r from-blue-300 to-purple-500 flex flex-col">
      <Carousel className="w-full flex-1 flex flex-col">
        <CarouselContent className="p-2 flex-1">
          {recommendationItems.map((item, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="p-1 h-full">
                <CardContent className="flex justify-center items-center p-4 h-full">
                  <span className="text-xl font-semibold text-white">
                    {item.title}:
                  </span>
                  <span className="text-xl font-semibold text-white ml-3">
                    {item.detail}
                  </span>
                </CardContent>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-4">
          <CarouselPrevious className="static transform-none mx-0 bg-background hover:bg-muted border-none" />
          <CarouselNext className="static transform-none mx-0 bg-background hover:bg-muted border-none" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselDemo;
