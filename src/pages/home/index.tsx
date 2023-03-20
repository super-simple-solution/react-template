import { Button } from '@chakra-ui/react'
import { useMetaMask } from 'metamask-react'

function App() {
  const { status, connect, account, chainId, ethereum } = useMetaMask()
  if (status === 'initializing') return <div>Synchronisation with MetaMask ongoing...</div>
  if (status === 'unavailable') return <div>MetaMask not available :(</div>
  if (status === 'notConnected') return <button onClick={connect}>Connect to MetaMask</button>
  if (status === 'connecting') return <div>Connecting...</div>
  if (status === 'connected')
    return (
      <div>
        Connected account {account} on chain ID {chainId}
      </div>
    )
  return null
}

function Home() {
  return (
    <>
      <App></App>
      <Button colorScheme="blue">Button</Button>
    </>
  )
}

export default Home
