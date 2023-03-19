import { useRoutes } from 'react-router-dom'
import './styles/index.less'
import { routers } from './router'
function App() {
  return useRoutes(routers)
}
export default App
