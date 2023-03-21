import './header.scss'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className="header flex-x-between flex-y-center w-screen">
        <div className="cursor-pointer">
          <Link to="/">SingularDAO</Link>
        </div>
        <div className="flex-xy-center">
          <div className="mr-80 cursor-pointer">
            <Link to="/market">Market</Link>
          </div>
          <div className="mr-80 cursor-pointer">DashBoard</div>
          <div className="cursor-pointer">AirDrop</div>
        </div>
        <Button className="connect-btn" variant="primary">
          Connect Wallet
        </Button>
      </div>
    </>
  )
}

export default Header
