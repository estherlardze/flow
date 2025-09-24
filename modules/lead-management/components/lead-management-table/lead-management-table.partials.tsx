import { Badge } from "@/components/ui/badge";
import { Lead } from "./lead-management-table.types";
import Avatar from "@/components/ui/avatar";
import {
  getInitials,
  getSourceVariant,
  getSourceColor,
  getStatusVariant,
  getTagColor,
} from "./lead-management-table.utils";

export function NameWithAvatar({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3">
      <Avatar name={name} initials={getInitials(name)} showAsButton={false} />
      <div className="font-medium text-gray-900 whitespace-nowrap">{name}</div>
    </div>
  );
}

export const getIntentColorForTag = (text: string) => {
  const tag = text.toLowerCase().trim();

  if (
    tag.includes("urgent") ||
    tag.includes("critical") ||
    tag.includes("high") ||
    tag.includes("emergency")
  ) {
    return "#EF4444";
  }

  if (
    tag.includes("important") ||
    tag.includes("priority") ||
    tag.includes("medium")
  ) {
    return "#F97316";
  }

  if (tag.includes("hot") || tag.includes("warm") || tag.includes("active")) {
    return "#EA580C";
  }

  if (
    tag.includes("cold") ||
    tag.includes("inactive") ||
    tag.includes("stalled")
  ) {
    return "#64748B";
  }

  if (
    tag.includes("vip") ||
    tag.includes("premium") ||
    tag.includes("gold") ||
    tag.includes("platinum")
  ) {
    return "#D97706";
  }

  if (
    tag.includes("new") ||
    tag.includes("prospect") ||
    tag.includes("fresh")
  ) {
    return "#22C55E";
  }

  if (
    tag.includes("returning") ||
    tag.includes("repeat") ||
    tag.includes("loyal")
  ) {
    return "#14B8A6";
  }

  if (
    tag.includes("organic") ||
    tag.includes("referral") ||
    tag.includes("social") ||
    tag.includes("paid")
  ) {
    return "#3B82F6";
  }

  if (
    tag.includes("marketing") ||
    tag.includes("campaign") ||
    tag.includes("lead") ||
    tag.includes("sales")
  ) {
    return "#8B5CF6";
  }

  if (
    tag.includes("b2b") ||
    tag.includes("enterprise") ||
    tag.includes("corporate")
  ) {
    return "#6366F1";
  }

  const fallbackColors = [
    "#6B7280",
    "#4B5563",
    "#374151",
    "#1F2937",
    "#111827",
  ];
  const hash = text.split("").reduce((a, b) => a + b.charCodeAt(0), 0);
  return fallbackColors[hash % fallbackColors.length];
};

export function TagsBadge({ tags }: { tags: Lead["tags"] }) {
  if (!tags.length) {
    return <span className="text-gray-400 text-sm">No tags</span>;
  }

  return (
    <div className="flex flex-wrap gap-1 max-w-[140px]">
      <Badge
        className="text-xs text-white truncate"
        style={{ backgroundColor: getIntentColorForTag(tags[0].text) }}
      >
        {tags[0].text}
      </Badge>
      {tags.length > 1 && (
        <Badge variant="subtle" className="text-xs">
          +{tags.length - 1} more
        </Badge>
      )}
    </div>
  );
}

export function StatusBadge({ status }: { status: Lead["status"] }) {
  return <Badge variant={getStatusVariant(status)}>{status}</Badge>;
}

export function SourceBadge({ source }: { source: Lead["source"] }) {
  return (
    <Badge 
      className="text-xs text-white font-medium"
      style={{ backgroundColor: getSourceColor(source) }}
    >
      {source}
    </Badge>
  );
}
