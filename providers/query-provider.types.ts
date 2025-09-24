export interface QueryProviderProps {
  children: React.ReactNode;
}

export interface QueryClientConfig {
  staleTime: number;
  gcTime: number;
  retry: (failureCount: number, error: any) => boolean;
  refetchOnWindowFocus: boolean;
}

export interface MutationConfig {
  retry: boolean;
  onError: (error: any) => void;
}
