import { Layout, Menu } from 'antd'
import { Link, matchRoutes, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { routers } from '../router'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

export default function AppLayout() {
  const location = useLocation()
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>([])
  const [defaultOpenKeys, setDefaultOpenKeys] = useState<string[]>([])
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
    setDefaultSelectedKeys(pathArr)
    setDefaultOpenKeys(pathArr)
    setIsInit(true)
  }, [location.pathname])
  if (!isInit) {
    return null
  }
  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo" />

          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="/">
              <Link to="/">用户信息</Link>
            </Menu.Item>
            <Menu.Item key="/about">
              <Link to="/about">用户信息</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={defaultSelectedKeys}
              defaultOpenKeys={defaultOpenKeys}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="/" title="用户管理">
                <Menu.Item key="/">
                  <Link to="/">用户信息</Link>
                </Menu.Item>
                <Menu.Item key="/about">
                  <Link to="/about">用户信息</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  )
}
