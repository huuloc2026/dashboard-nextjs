import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  PackageSearch,
  User,
  ChevronUp,
  User2,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import SidebarFooterAvatar from "@/app/components/sidebar-avatar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Dashboard",
    url: "/dashboardtest/home",
    icon: Inbox,
  },
  {
    title: "User",
    url: "/dashboardtest//user",
    icon: User,
  },
  {
    title: "Product",
    url: "/dashboardtest/product",
    icon: PackageSearch,
  },
  {
    title: "Settings",
    url: "/dashboardtest/setting",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="mt-[100px] text-black dark:text-white">
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </div>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooterAvatar />
    </Sidebar>
  );
}
