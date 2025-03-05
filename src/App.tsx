import  { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './components/router';

const queryClient = new QueryClient();

const App = () => {
    console.log(import.meta.env.SERVER_URL);
    return (
        <QueryClientProvider client={queryClient}>
            <Router />
        </QueryClientProvider>
    )
}

export default App;