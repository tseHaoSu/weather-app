import { AppSidebar } from "@/components/components/SideBar/SideBar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import ModeToggle from "../components/Theme/ModeToggle";

// Import the images directly
import ACT from "@/assets/data/ACT.jpeg";
import NSW from "@/assets/data/NSW.jpeg";
import QLD from "@/assets/data/QLD.jpeg";
import SA from "@/assets/data/SA.jpeg";
import TAS from "@/assets/data/TAS.jpeg";

const DataPage = () => {
  // Use the imported image variables
  const images = [ACT, NSW, QLD, SA, TAS];

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
          <h1 className="text-5xl mx-auto p-4">Data Visualisation</h1>
          <div className="max-w-5xl mx-auto">
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {" "}
              {images.map((src, index) => (
                <div
                  key={index}
                  className="shadow-lg rounded-2xl overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`State image ${index + 1}`}
                    className="w-full h-full object-contain scale-105" /* Added scale-105 to make images slightly larger */
                  />
                </div>
              ))}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default DataPage;
