import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/router/index'
import '@/styles/index.less'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>,
)
