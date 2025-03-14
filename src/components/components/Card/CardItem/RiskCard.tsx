import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { UVProtectionTips } from "@/lib/constants";

const CarouselDemo = () => {
  return (
    <div className="h-full w-full flex items-start justify-center bg-gradient-to-r from-blue-300 to-purple-500">
      <Carousel className="w-full">
        <CarouselContent className="p-2 h-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 h-full">
                <CardContent className="flex items-center justify-center p-4 h-full">
                  <span className="text-xl font-semibold text-white">
                    {UVProtectionTips[index + 1].tip}
                  </span>
                </CardContent>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-15">
          <CarouselPrevious className="static transform-none mx-0 bg-background hover:bg-muted border-none" />
          <CarouselNext className="static transform-none mx-0 bg-background hover:bg-muted border-none" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselDemo;
