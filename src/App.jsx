import Home from './Home'
import Header from './Header'
import ProductsList from './Products_cards'
import { DataContext } from './DataContext'

function App() {
  return (
    <>
    <DataContext>
    <Header />
    <Home />
    <ProductsList />
    </DataContext>
    </>
  )
}

export default App
