import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/styles/index.less'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
)
