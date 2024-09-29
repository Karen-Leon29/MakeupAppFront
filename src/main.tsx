import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AppProvider } from 'core/contexts/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>
)
