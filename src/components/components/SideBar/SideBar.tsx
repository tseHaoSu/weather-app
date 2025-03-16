import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

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

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="p-4 border-r-8 border-purple-200 dark:border-purple-900">
      <SidebarContent className="space-y-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-semibold px-2 py-1">
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
                      className="flex items-center gap-3 px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
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
