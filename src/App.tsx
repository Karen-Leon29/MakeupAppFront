import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { RoutesProvider } from './core/routes'

function App() {
  return (
    <BrowserRouter> 
      <RoutesProvider />
    </BrowserRouter>
  )
}

export default App
