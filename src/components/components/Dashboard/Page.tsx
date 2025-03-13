import Map from "@/components/components/Map";
import { AppSidebar } from "@/components/components/SideBar/AppSideBar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Card from "../Card/Form";
import LocationCard from "../Card/LocationCard";
import NameCard from "../Card/NameCard";
import SkinTypeCard from "../Card/SkinCard";
import Status from "../Card/Status";
import ModeToggle from "../Theme/ModeToggle";

const Page = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex-1"></div>
          <ModeToggle />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 w-full">
          {/* First row - equal height cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-64">
            <Status className="h-full">
              <NameCard />
            </Status>
            <Status className="h-full">
              <SkinTypeCard />
            </Status>
            <Status className="h-full">
              <LocationCard />
            </Status>
          </div>

          {/* Second row - map and form with matching height */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100vh-320px)] min-h-[400px]">
            <Status className="md:col-span-2 h-full">
              <Map />
            </Status>
            <Status className="h-full">
              <Card />
            </Status>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Page;
