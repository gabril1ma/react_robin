import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home'
import Header from './Header'
import ProductsList from './Products_cards'

function App() {
  return (
    <>
    <Header />
    <Home />
    <ProductsList />
    </>
  )
}

export default App
