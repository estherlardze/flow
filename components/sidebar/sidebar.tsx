import {
  Sidebar as SidebarPrimitive,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/ui/logo";
import { SidebarMenuItems } from "./sidebar-menu-items-list";

export function AppSidebar() {
  return (
    <SidebarPrimitive className="!bg-white">
      <SidebarHeader className="p-4 !bg-white">
        <Logo />
      </SidebarHeader>

      <SidebarContent className="p-0 !bg-white mt-5">
        <div className="px-3 py-2">
          <SidebarMenu className="!bg-white">
            <SidebarMenuItems />
          </SidebarMenu>
        </div>
      </SidebarContent>
    </SidebarPrimitive>
  );
}
