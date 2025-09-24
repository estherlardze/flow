import { SidebarMenuItem } from "./sidebar-menu-item";
import { sidebarMenuItems } from "./sidebar-menu-items";

export function SidebarMenuItems() {
  return (
    <ul className="space-y-2">
      {sidebarMenuItems.map((item) => (
        <SidebarMenuItem key={item.href} item={item} />
      ))}
    </ul>
  );
}
