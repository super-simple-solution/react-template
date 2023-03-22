import { useColorMode } from '@chakra-ui/color-mode'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './component/Header'

export default function AppLayout() {
  const { colorMode } = useColorMode()
  const location = useLocation()
  return (
    <>
      <div data-theme={colorMode}>
        <Header></Header>
        <div className="main-container p-24">
          <Outlet />
        </div>
      </div>
    </>
  )
}
