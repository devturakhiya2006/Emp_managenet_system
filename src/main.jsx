import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'


// localStorage.clear() //for clear the local storage data when we refresh the page
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
              <App />
    </AuthProvider>
  </StrictMode>,
)
