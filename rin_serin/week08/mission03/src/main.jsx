import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginContextProvider from './context/LoginContext.jsx'
import SignupContextProvider from './context/SignupContext.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1, // 실패 시 재시도 횟수
            refetchOnWindowFocus: false, // 창이 포커스될 때 데이터 재요청 여부
        },
        mutations: {
            // mutation 기본 옵션 추가 (필요시)
            onError: (error) => console.error("Mutation Error:", error),
        },
    },
});

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}> 
    <StrictMode>
        <SignupContextProvider>
            <LoginContextProvider>
                <App />
            </LoginContextProvider>
        </SignupContextProvider>
    </StrictMode>
    </QueryClientProvider>
)
