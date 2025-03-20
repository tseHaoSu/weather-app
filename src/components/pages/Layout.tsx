import { Outlet } from "react-router";
import { AppSidebar } from "../components/SideBar/SideBar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import ModeToggle from "../components/Theme/ModeToggle";
import { Separator } from "@/components/ui/separator";

const Layout = () => {
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
          <div className="p-4">
            <Outlet /> {/* This is where the route content will be rendered */}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
