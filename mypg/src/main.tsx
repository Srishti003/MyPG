import React from 'react'
import ReactDOM from 'react-dom/client'
import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <FluentProvider theme={webLightTheme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FluentProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
