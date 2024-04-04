import { useDataContext } from "./DataContext.jsx"
import { Link } from "react-router-dom"
import Header from "./Header.jsx"
import "./Cart.css"
function Cart(){

    const { cartProducts, totalPrice, totalItems } = useDataContext()

    return (
        <div>
            <Header />
            <h1>Cart</h1>
            {cartProducts.map((product) => (
                <div key={product.id}>
                    <Link to={`/product/${product.id}`}><img className="image-single-product" src={product.image} alt={product.name}></img></Link>
                    <h2>{product.name}</h2>
                    <p>Quantidade do produto: {product.quantity}</p>
                    <p>valor do produto: {product.price}</p>
                    <p>Valor total do produto: {product.price * product.quantity}</p>
                </div>
            ))}
            <h3>Total Items: {totalItems}</h3>
            <h3>Total Price: {totalPrice}</h3>

        </div>
    )

}

export default Cart