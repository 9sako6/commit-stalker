import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: Infinity
    }
  }
});

type Props = {
  children: ReactNode
}

export const wrapper = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);
