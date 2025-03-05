import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "src/components/router";

const queryClient = new QueryClient();

const Provider = () => {
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>;
};

export default Provider;