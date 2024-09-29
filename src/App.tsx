import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { RoutesProvider } from 'core/routes'
import { SnackbarComponent } from 'core/components/snackbar'

function App() {
  return (
    <BrowserRouter>
      <RoutesProvider />
      <SnackbarComponent />
    </BrowserRouter>
  )
}

export default App
