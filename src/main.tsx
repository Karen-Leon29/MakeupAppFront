import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AppProvider } from 'core/contexts/index.tsx'
import { AppLanguages } from 'core/enum/appLanguages.enum.tsx'
import { LitteraProvider } from '@assembless/react-littera'
import { ThemeProvider } from '@emotion/react'
import theme from 'core/theme/theme.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <LitteraProvider locales={[AppLanguages.EN, AppLanguages.ES]} initialLocale={AppLanguages.ES}>
    <ThemeProvider theme={theme}>
      <AppProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AppProvider>
    </ThemeProvider>
  </LitteraProvider>
)
