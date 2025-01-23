import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { ScrollArea } from "./ui/scroll-area";
import Image from "next/image";
import { FlameKindling } from "lucide-react";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Problem",
      url: "#",
      items: [
        {
          title: "Add Problems",
          url: "/dashboard/problem/create",
        },
        {
          title: "Update Problems",
          url: "#",
          isActive: true,
        },
        {
          title: "Delete Problems",
          url: "#",
        },
      ],
    },
    {
      title: "Stats",
      url: "#",
      items: [
        {
          title: "User Stats",
          url: "#",
        },
        {
          title: "Platform Stats",
          url: "#",
        },
        {
          title: "Availbilty",
          url: "#",
        },
      ],
    },
    {
      title: "Architecture",
      url: "#",
      items: [
        {
          title: "Accessibility",
          url: "#",
        },
        {
          title: "Fast Refresh",
          url: "#",
        },
        {
          title: "Next.js Compiler",
          url: "#",
        },
        {
          title: "Supported Browsers",
          url: "#",
        },
        {
          title: "Turbopack",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader></SidebarHeader>
      <ScrollArea className="h-[calc(100vh-30px)] overflow-y-auto">
        <SidebarContent className="p-2">
          {/* We create a SidebarGroup for each parent. */}
          <SidebarMenuItem className="flex px-4">
            <div className="flex-1 flex items-center gap-3">
              <FlameKindling color="#FFA116" />
              <p className="text-white text-2xl">PeetCode</p>
            </div>
          </SidebarMenuItem>
          {data.navMain.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={item.isActive}>
                        <Link href={item.url}>{item.title}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </ScrollArea>
      <SidebarRail />
    </Sidebar>
  );
}
