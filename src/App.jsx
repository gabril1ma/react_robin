import Home from './Home'
import Cart from './Cart'
import Login from './Login'
import CreateAccount from './CreateAccount'
import { DataContext } from './DataContext'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import ProductPage from './ProductPage'

function App() {

  return (

    <Router>
    <DataContext>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="login" Component={Login}/>
        <Route path="create-account" Component={CreateAccount}/>
        <Route path="cart" Component={Cart}/>
        <Route path="/product/:id" Component={ProductPage}/>
      </Routes>
      </DataContext>
    </Router>

  )
}

export default App
