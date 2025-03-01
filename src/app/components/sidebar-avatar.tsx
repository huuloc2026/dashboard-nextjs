"use client";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

const SidebarFooterAvatar = () => {
  const [name, setName] = useState("Jared Palmer");
  const [avatarUrl, setAvatarUrl] = useState(
    "https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--men-people-male-pack-avatars-icons-5187871.png?f=webp"
  );
  const [email, setEmail] = useState("jared@acme.inc");
  return (
    <>
      {" "}
      <SidebarFooter>
        <SidebarMenu className="py-2">
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="focus:outline-none">
                <SidebarMenuButton>
                  <div className="flex justify-between">
                    <Avatar className=" h-8 w-8 justify-center items-center">
                      <AvatarImage src={avatarUrl} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="ml-2">
                      <p className="text-sm font-medium">{name}</p>
                      <p className="text-sm ">{email}</p>
                    </div>
                    <ChevronUp className="h-5 w-5 ml-1 mt-2" />
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width] "
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
};

export default SidebarFooterAvatar;
