import Form from "@/components/components/Card/CardItem/FormCard";
import LocationCard from "@/components/components/Card/CardItem/LocationCard";
import SkinTypeCard from "@/components/components/Card/CardItem/SkinCard";
import Map from "@/components/components/Map/Map";
import { AppSidebar } from "@/components/components/SideBar/AppSideBar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import CardContainer from "../Card/Container/CardContainer";
import ModeToggle from "../Theme/ModeToggle";

const Page = () => {
  return (
    <div className="mx-auto max-w-[1400px]">
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
            <div className="grid md:grid-cols-1 gap-4 h-auto">
              <CardContainer className="w-full">
                <Form />
              </CardContainer>
            </div>
            {/* Second row - map and form with matching height */}
            <div className="grid md:grid-cols-1 gap-4 h-64 w-full">
              <CardContainer className="md:col-span-2">
                <Map />
              </CardContainer>
            </div>
            {/* Third row - map and form with matching height */}
            <div className="grid md:grid-cols-2 gap-4 h-auto min-h-[400px] w-full">
              <CardContainer className="w-full flex-grow">
                <SkinTypeCard />
              </CardContainer>
              <CardContainer className="w-full flex-grow">
                <LocationCard />
              </CardContainer>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default Page;
