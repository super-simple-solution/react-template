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
  function Toggle() {
    return <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
  }

  return (
    <>
      <div color={colorMode === 'light' ? 'black' : 'white'} data-theme={colorMode}>
        <Header></Header>
        <Toggle></Toggle>
        <Outlet />
      </div>
    </>
  )
}
