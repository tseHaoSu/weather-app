import { AppSidebar } from "@/components/components/SideBar/SideBar";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import ModeToggle from "../components/Theme/ModeToggle";

const DataPage = () => {
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
          <h1 className="text-5xl">Heading</h1>
          
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default DataPage;
