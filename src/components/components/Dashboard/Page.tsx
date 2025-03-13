import Map from "@/components/components/Map/Map";
import { AppSidebar } from "@/components/components/SideBar/AppSideBar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import CardContainer from "../Card/CardContainer";
import Form from "../Card/Form";
import LocationCard from "../Card/LocationCard";
import NameCard from "../Card/NameCard";
import SkinTypeCard from "../Card/SkinCard";
import ModeToggle from "../Theme/ModeToggle";
import ClothingCard from "../Card/ClothingCard";

const Page = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex-1" />
          <ModeToggle />
        </header>
        <div className="flex flex-col gap-4 p-4 w-full">
          {/* First row - equal height cards */}
          <div className="grid md:grid-cols-3 gap-4 h-64">
            <CardContainer>
              <NameCard />
            </CardContainer>
            <CardContainer>
              <SkinTypeCard />
            </CardContainer>
            <CardContainer>
              <LocationCard />
            </CardContainer>
          </div>
          {/* Second row - map and form with matching height */}
          <div className="grid md:grid-cols-3 gap-4 h-64">
            <CardContainer className="md:col-span-2">
              <ClothingCard />
            </CardContainer>
            <CardContainer>
              <Form />
            </CardContainer>
          </div>
          {/* Third row - map and form with matching height */}
          <div className="grid md:grid-cols-3 gap-4 h-[calc(100vh-320px)] min-h-[400px]">
            <CardContainer className="md:col-span-2">
              <Map />
            </CardContainer>
            <CardContainer>
              <Form />
            </CardContainer>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Page;
