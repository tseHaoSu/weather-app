import { AppSidebar } from "@/components/components/SideBar/AppSideBar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Card from "../Card/Form";
import useInputQueryStore from "@/store/store";
import Status from "../Card/Status";

const Page = () => {

  const inputQuery = useInputQueryStore((state) => state.inputQuery);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 w-full">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3 ">
            <Status item={inputQuery.userName} />
            <Status item={inputQuery.skinType} />
            <Status item={inputQuery.location} />
          </div>
          <div className="grid auto-rows-min gap-4  ">
            <Status item={inputQuery.location} />
          </div>
          <Card />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Page;
