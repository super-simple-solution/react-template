import { useRoutes } from 'react-router-dom'
import Home from '@/components/Home'
import About from '@/components/About'

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'about',
      element: <About />,
    },
  ])
  return routes
}

export default App
