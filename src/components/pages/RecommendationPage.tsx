import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "../components/SideBar/SideBar";
import ModeToggle from "../components/Theme/ModeToggle";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";

const RecommendationPage = () => {
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
          <h1 className="text-5xl mx-auto p-4">Recommendation</h1>
          <RecommendationPage />
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default RecommendationPage;
