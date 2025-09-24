"use client"

import { QueryClientProvider } from "@tanstack/react-query";
import { QueryProviderProps } from "./query-provider.types";
import { getQueryClient } from "./query-provider.config";

export function QueryProvider({ children }: QueryProviderProps) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}