"use client";

import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";
import useCaptureLinkIcon from "./use-capture-link-icon";

import { CaptureLinkIconProps } from "./capture-link-icon.types";

export default function CaptureLinkIcon({ className }: CaptureLinkIconProps) {
  const { handleCopyLink } = useCaptureLinkIcon();

  return (
    <Button
      onClick={handleCopyLink}
      variant="ghost"
      size="sm"
      className={`h-9 w-9 p-0 rounded-full bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 transition-all duration-200 ${
        className || ""
      }`}
    >
      <Link2 className="h-4 w-4 text-gray-600 hover:text-blue-600 transition-colors duration-200" />
    </Button>
  );
}
