import { Menu, MenuList, MenuItem } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Hide } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Link, matchRoutes, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { routers } from '../router'
import { useColorMode } from '@chakra-ui/color-mode'

export default function AppLayout() {
  const location = useLocation()
  const [isInit, setIsInit] = useState<Boolean>(false)

  useEffect(() => {
    const routes = matchRoutes(routers, location.pathname) // 返回匹配到的路由数组对象，每一个对象都是一个路由对象
    const pathArr: string[] = []
    if (routes !== null) {
      routes.forEach((item) => {
        const path = item.route.path
        if (path) {
          pathArr.push(path)
        }
      })
    }
    setIsInit(true)
  }, [location.pathname])
  if (!isInit) {
    return null
  }

  function Toggle() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
      </header>
    )
  }

  return (
    <>
      <Grid
        templateAreas={'"header header" "nav main"'}
        gridTemplateRows={'50px 1fr 30px'}
        gridTemplateColumns={'150px 1fr'}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area={'header'}>
          <div className="logo" />
          <Toggle></Toggle>
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
        </GridItem>
        <Hide below="md">
          <GridItem pl="2" bg="pink.300" area={'nav'}>
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
