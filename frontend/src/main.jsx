import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { SearchProvider } from './context/SearchProvider'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <AppRouter />
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
