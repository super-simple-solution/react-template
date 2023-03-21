import './header.scss'
import { Button } from '@chakra-ui/react'

function Header() {
  return (
    <>
      <div className="header flex-x-between flex-y-center w-screen">
        <div>SingularDAO</div>
        <div className="flex-xy-center">
          <div className="mr-80">Market</div>
          <div className="mr-80">Dashboard</div>
          <div>AirDrop</div>
        </div>
        <Button className="connect-btn" variant="primary">
          Connect Wallet
        </Button>
      </div>
    </>
  )
}

export default Header
