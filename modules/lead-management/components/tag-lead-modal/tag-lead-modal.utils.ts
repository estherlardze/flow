import { AppwriteTag, TransformedTag } from "./tag-lead-modal.types";

export function transformTagsResponse(response: unknown): TransformedTag[] {
  if (!response || typeof response !== "object") {
    return [];
  }

  const resp = response as Record<string, unknown>;

  if (resp.success !== true) {
    return [];
  }

  const data = resp.data as Record<string, unknown> | undefined;
  if (!data || !Array.isArray(data.rows)) {
    return [];
  }

  return data.rows
    .filter((tag): tag is AppwriteTag => {
      if (typeof tag !== "object" || tag === null) {
        return false;
      }

      const tagObj = tag as Record<string, unknown>;
      return typeof tagObj.$id === "string" && typeof tagObj.text === "string";
    })
    .map((tag: AppwriteTag) => ({
      id: tag.$id,
      text: tag.text,
    }));
}
