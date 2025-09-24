import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SidebarMenuItemProps } from "./sidebar.types";

export function SidebarMenuItem({ item }: Readonly<SidebarMenuItemProps>) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <li>
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-3 h-10 px-3 rounded-md transition-colors border-l-4 border-r-0 no-underline",
          isActive
            ? "bg-blue-50 border-blue-500 text-blue-700"
            : "bg-transparent border-transparent text-gray-700 hover:bg-slate-50 hover:text-gray-900"
        )}
      >
        <item.icon
          className={cn(
            "h-4 w-4",
            isActive ? "text-blue-500" : "text-gray-500"
          )}
        />
        <span className="font-medium text-sm">{item.label}</span>
      </Link>
    </li>
  );
}
