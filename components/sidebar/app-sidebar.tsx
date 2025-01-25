"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarSeparator,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { NavUser } from "@/components/sidebar/nav-user";
import Image from "next/image";

import {
  ChartNoAxesCombined,
  Command,
  PiggyBank,
  ChartSpline,
  House,
  Unplug,
  Coins,
  Wallet,
  ArrowLeftRight,
  ChartPie,
  Send,
} from "lucide-react";

const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Overview",
      url: "",
      items: [
        {
          title: "Home",
          icon: House,
          url: "/overview",
        },
        {
          title: "Connections",
          icon: Unplug,
          url: "/connections",
        },
      ],
    },

    {
      title: "Assets",
      url: "",
      items: [
        {
          title: "Total Assets",
          icon: ChartSpline,
          url: "total-assets",
        },
        {
          title: "Cash",
          icon: Wallet,
          url: "/cash",
        },
        {
          title: "Stock Portfolio",
          icon: ChartNoAxesCombined,
          url: "/stock-portfolio",
        },
        {
          title: "Crypto Portfolio",
          icon: Coins,
          url: "/crypto-portfolio",
        },
      ],
    },
    {
      title: "Transactions",
      url: "",
      items: [
        {
          title: "Transaction History",
          icon: ArrowLeftRight,
          url: "/transaction-history",
        },
        {
          title: "Spending Categories",
          icon: ChartPie,
          url: "/spending-categories",
        },
      ],
    },
    {
      title: "Payments",
      url: "",
      items: [
        {
          title: "Payments Transfer",
          icon: Send,
          url: "/payments",
        },
      ],
    },
  ],
};

interface AppSidebarProps {
  user: {
    name?: string | null;
    email?: string | null;
    avatar?: string;
  };
}

export function AppSidebar({ user }: AppSidebarProps) {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <PiggyBank />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Asset Manager</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: user?.name ?? "Guest User",
            email: user?.email ?? "guest@example.com",
            avatar: user?.avatar ?? "/avatars/shadcn.jpg",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
