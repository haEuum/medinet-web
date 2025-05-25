import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "@/components/common/router";

const queryClient = new QueryClient();

const Provider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
};

export default Provider;
