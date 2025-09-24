import { QueryClient } from "@tanstack/react-query";
import { QueryClientConfig, MutationConfig } from "./query-provider.types";

export const DEFAULT_QUERY_CONFIG: QueryClientConfig = {
  staleTime: 60 * 1000,
  gcTime: 10 * 60 * 1000,
  retry: (failureCount: number, error: any) => {
    if (error?.code && error.code >= 400 && error.code < 500) {
      return false;
    }
    return failureCount < 3;
  },
  refetchOnWindowFocus: false,
};

export const DEFAULT_MUTATION_CONFIG: MutationConfig = {
  retry: false,
  onError: (error: any) => {
    console.error("Mutation error:", error);
  },
};

export function createQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: DEFAULT_QUERY_CONFIG,
      mutations: DEFAULT_MUTATION_CONFIG,
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient(): QueryClient {
  if (typeof window === "undefined") {
    return createQueryClient();
  }

  if (!browserQueryClient) {
    browserQueryClient = createQueryClient();
  }

  return browserQueryClient;
}

export function resetQueryClient(): void {
  browserQueryClient = undefined;
}

export function getBrowserQueryClient(): QueryClient | undefined {
  return browserQueryClient;
}
