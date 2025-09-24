import * as React from "react";
import { LoadingSpinner } from "./loading-spinner-main";
import type {
  PageLoadingSpinnerProps,
  InlineLoadingSpinnerProps,
  FullscreenLoadingSpinnerProps,
} from "./loading-spinner-types";

export const PageLoadingSpinner: React.FC<PageLoadingSpinnerProps> = ({
  text = "Loading…",
}) => (
  <div className="flex flex-col items-center justify-center py-16 space-y-4">
    <LoadingSpinner size="xl" label={text} />
    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
      {text}
    </p>
  </div>
);

export const InlineLoadingSpinner: React.FC<InlineLoadingSpinnerProps> = ({
  text,
  size = "md",
}) => (
  <div className="inline-flex items-center space-x-2">
    <LoadingSpinner size={size} label={text || "Loading…"} />
    {text && (
      <span className="text-sm text-gray-600 dark:text-gray-400">{text}</span>
    )}
  </div>
);

export const FullscreenLoadingSpinner: React.FC<
  FullscreenLoadingSpinnerProps
> = ({ text = "Loading…" }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-sm">
    <div className="flex flex-col items-center space-y-4 p-8 rounded-2xl bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 shadow-2xl">
      <LoadingSpinner size="2xl" label={text} />
      <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
        {text}
      </p>
    </div>
  </div>
);
