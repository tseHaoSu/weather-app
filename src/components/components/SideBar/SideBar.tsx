import { Home, Table, Sun, AppWindow, Shirt, Lightbulb, Info } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Dashboard",
    url: "/main",
    icon: Home,
  },
  {
    title: "UV Index",
    url: "/uv",
    icon: Sun,
  },
  {
    title: "Recommendation",
    url: "/recommendation",
    icon: Shirt,
  },
  {
    title: "Reminder",
    url: "/reminder",
    icon: Lightbulb,
  },
  {
    title: "Data",
    url: "/data",
    icon: Table,
  },
  {
    title: "UV Insights",
    url: "/uv-insights",
    icon: Info,
  },
  {
    title: "Landing",
    url: "/landing",
    icon: AppWindow,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="p-4 border-r-8 border-purple-200 dark:border-purple-900">
      <SidebarContent className="space-y-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-semibold px-3 py-1">
            <Sun className="mr-2 text-yellow-500" />
            UVision
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-2">
            <SidebarMenu className="space-y-1">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="rounded-md overflow-hidden"
                >
                  <SidebarMenuButton asChild className="w-full">
                    <a
                      href={item.url}
                      className="flex items-center gap-3 px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-500 rounded-md transition-colors"
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="text-sm font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <div className="mt-6 px-2"></div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
