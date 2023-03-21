import { Menu, MenuList, MenuItem, MenuButton, Grid, GridItem, Hide, Button, useColorModeValue } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'
import { Link, matchRoutes, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { routers } from '../router'
import Header from './component/Header'

export default function AppLayout() {
  // const location = useLocation()
  // const [isInit, setIsInit] = useState<Boolean>(false)
  // useEffect(() => {
  //   const routes = matchRoutes(routers, location.pathname) // 返回匹配到的路由数组对象，每一个对象都是一个路由对象
  //   const pathArr: string[] = []
  //   if (routes !== null) {
  //     routes.forEach((item) => {
  //       const path = item.route.path
  //       if (path) {
  //         pathArr.push(path)
  //       }
  //     })
  //   }
  //   setIsInit(true)
  // }, [location.pathname])
  // if (!isInit) {
  //   return null
  // }

  const { colorMode, toggleColorMode } = useColorMode()
  // function Toggle() {
  //   return <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
  // }

  return (
    <>
      <Grid
        templateAreas={'"header header" "nav main"'}
        gridTemplateRows={'50px 1fr 30px'}
        gridTemplateColumns={'150px 1fr'}
        h="200px"
        gap="1"
        color={colorMode === 'light' ? 'black' : 'white'}
        fontWeight="bold"
      >
        <GridItem pl="2" area={'header'}>
          {/* <div className="logo" />
          <div className="flex">
            <div>
              <Link to="/">Home</Link>
            </div>
            <Menu>
              <MenuButton as={Button}>
                <Link to="/about">About</Link>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to="/about">用户信息</Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Toggle></Toggle>
          </div> */}
          <Header></Header>
        </GridItem>
        <Hide below="md">
          <GridItem pl="2" bg="pink.300" area={'nav'}>
            <Button variant="primary">Button</Button>
            <div className="site-layout-background">
              <Menu>
                <MenuList>
                  <MenuItem>
                    <Link to="/">用户信息</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/about">用户信息</Link>
                  </MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
            </div>
          </GridItem>
        </Hide>
        <GridItem pl="2" bg="green.300" area={'main'}>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  )
}
