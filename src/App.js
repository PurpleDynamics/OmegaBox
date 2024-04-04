import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorFallBack from 'components/errorFallBack';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';

import router from './routes/route';

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <ErrorBoundary FallbackComponent={ErrorFallBack}>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                </QueryClientProvider>
            </ErrorBoundary>
        </>
    );
}

export default App;
