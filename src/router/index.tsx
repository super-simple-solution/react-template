import Market from '@/pages/market'
import { lazy, ReactNode, Suspense } from 'react'
import { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('../pages/home'))
const About = lazy(() => import('../pages/about'))
const Borrow = lazy(() => import('../pages/borrow'))
const Detail = lazy(() => import('../pages/detail'))

import AppLayout from '../layout/index'

const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>
}

export const routers: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: lazyLoad(<Home />),
      },
      {
        path: '/about',
        element: lazyLoad(<About />),
      },
      {
        path: '/market',
        element: lazyLoad(<Market />),
      },
      {
        path: '/borrow',
        element: lazyLoad(<Borrow />),
      },
      {
        path: '/Detail',
        element: lazyLoad(<Detail />),
      },
    ],
  },
]
