import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Router from "@/components/common/router";
import {ToastContainer} from "react-toastify";
import "@/styles/global.scss";

const queryClient = new QueryClient();

const Provider = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ToastContainer/>
            <Router/>
        </QueryClientProvider>
    );
};

export default Provider;
