import ProductsList from './Products_cards'
import Header from './Header'

function Home () {

    return(
    <>
    <Header />
    <h1>Produtos Robin</h1>
    <p>Esses são os nossos produtos disponiveis para voce trader e apostador</p>
    <ProductsList />
    </>
    )
}

export default Home