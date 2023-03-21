import { useMetaMask } from 'metamask-react'
import { Button } from '@chakra-ui/react'

function ConnectButton() {
  const { status, connect, account, chainId } = useMetaMask()
  if (status === 'initializing') return <div>Synchronisation with MetaMask ongoing...</div>
  if (status === 'unavailable') return <div>MetaMask not available :(</div>
  if (status === 'notConnected')
    return (
      <Button onClick={connect} className="connect-btn bg-gradient" variant="primary">
        Connect Wallet
      </Button>
    )
  if (status === 'connecting') return <div>Connecting...</div>
  if (status === 'connected')
    return (
      <Button className="connect-btn bg-gradient" variant="primary">
        {account.substring(0, 10)}
      </Button>
    )
  return null
}

export default ConnectButton
