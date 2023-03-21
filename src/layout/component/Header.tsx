import './header.scss'
import { Link } from 'react-router-dom'
import ConnectButton from './ConnectButton'
import { Button } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'

function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  function Toggle() {
    return <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
  }

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
        <Toggle></Toggle>
        <ConnectButton />
      </div>
    </>
  )
}

export default Header
