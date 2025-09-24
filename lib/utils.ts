import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTagVariant(
  tagName: string
): "default" | "success" | "warning" | "danger" | "info" | "subtle" {
  const variants: (
    | "default"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "subtle"
  )[] = ["info", "success", "warning", "danger", "subtle", "default"];

  let hash = 0;
  for (let i = 0; i < tagName.length; i++) {
    hash = tagName.charCodeAt(i) + ((hash << 5) - hash);
  }

  return variants[Math.abs(hash) % variants.length];
}
