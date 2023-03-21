import './header.scss'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className="header flex-x-between flex-y-center w-screen">
        <div className="text-base-semibold cursor-pointer">
          <Link to="/">SingularDAO</Link>
        </div>
        <div className="flex-xy-center">
          <div className="nav-item text-sm-medium mr-80">
            <Link to="/market">Market</Link>
          </div>
          <div className="nav-item text-sm-medium mr-80">DashBoard</div>
          <div className="nav-item text-sm-medium">AirDrop</div>
        </div>
        <Button className="connect-btn bg-gradient" variant="primary">
          Connect Wallet
        </Button>
      </div>
    </>
  )
}

export default Header
