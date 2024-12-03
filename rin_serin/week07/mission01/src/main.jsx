import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginContextProvider from './context/LoginContext.jsx'
import SignupContextProvider from './context/SignupContext.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient(); //QueryClient 생성

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
