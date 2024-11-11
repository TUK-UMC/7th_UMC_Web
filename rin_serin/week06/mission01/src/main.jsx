import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginContextProvider from './context/LoginContext.jsx'
import SignupContextProvider from './context/SignupContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <SignupContextProvider>
            <LoginContextProvider>
                <App />
            </LoginContextProvider>
        </SignupContextProvider>
    </StrictMode>
)
