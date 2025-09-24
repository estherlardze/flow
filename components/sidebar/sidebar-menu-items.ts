import { LayoutDashboard, Users, List, LucideIcon } from "lucide-react";

export interface SidebarMenuItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const sidebarMenuItems: SidebarMenuItem[] = [
  {
    href: "/dashboard",
    label: "Home",
    icon: LayoutDashboard,
  },
  {
    href: "/dashboard/leads",
    label: "Leads",
    icon: Users,
  },
  {
    href: "/dashboard/sequence",
    label: "Sequence",
    icon: List,
  },
];
