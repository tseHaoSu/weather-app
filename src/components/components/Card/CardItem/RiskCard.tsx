import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProtectionRec from "../Utils/ProtectionRec";
import useInputQueryStore from "@/store/store";


const CarouselDemo = () => {
  const storedUVIndex = useInputQueryStore((state) => state.inputQuery.UVIndex);
  const safeUVIndex = typeof storedUVIndex === "number" ? storedUVIndex : 0;
  const recommendations = ProtectionRec(safeUVIndex);
  const recommendationItems = [
    { title: "Risk Level", detail: recommendations.riskLevel },
    { title: "Clothing", detail: recommendations.clothing },
    { title: "Hat", detail: recommendations.hat },
    { title: "Sunglasses", detail: recommendations.sunglasses },
    { title: "Fabric", detail: recommendations.fabric },
  ];
  console.log(recommendationItems);
  return (
    <div className="h-full w-full flex items-start justify-center bg-gradient-to-r from-blue-300 to-purple-500">
      <Carousel className="w-full">
        <CarouselContent className="p-2 h-full">
          {recommendationItems.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1 h-full">
                <CardContent className="flex items-start justify-center p-4 h-full">
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
        <div className="flex justify-center gap-2 mt-10">
          <CarouselPrevious className="static transform-none mx-0 bg-background hover:bg-muted border-none" />
          <CarouselNext className="static transform-none mx-0 bg-background hover:bg-muted border-none" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselDemo;
