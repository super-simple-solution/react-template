import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/styles/index.less'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeProvider } from '@chakra-ui/color-mode'
import { MetaMaskProvider } from 'metamask-react'
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <MetaMaskProvider>
        <ColorModeProvider>
          <Router>
            <App />
          </Router>
        </ColorModeProvider>
      </MetaMaskProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
