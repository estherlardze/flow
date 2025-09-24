import { cn } from "@/lib/utils"

interface LogoProps {
  readonly className?: string
  readonly collapsed?: boolean
}

export function Logo({ className, collapsed = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Logo Icon */}
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3h18v18H3z" />
          <path d="M8 8h8v8H8z" />
        </svg>
      </div>
      
      {/* Logo Text - Hide when collapsed */}
      {!collapsed && (
        <div className="flex flex-col">
          <span className="text-lg font-semibold leading-none">LeadFlow</span>
          <span className="text-xs text-muted-foreground">CRM Dashboard</span>
        </div>
      )}
    </div>
  )
}
