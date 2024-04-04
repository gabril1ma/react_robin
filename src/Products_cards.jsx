import { Products } from "./Products.jsx"
import { useDataContext } from "./DataContext.jsx"
import { Link } from "react-router-dom"
import "./Products_cards.css"

function ProductsCards({ product, product_image, product_name, product_price }) {

    const { onAdd } = useDataContext();

  return (
    <div className="product_cards">
        <Link to={`/product/${product.id}`}>
            <img className="product_cards_images" src={product_image} alt={product_name} />
        </Link>
        <h2><Link to={`/product/${product.id}`}>{product_name}</Link></h2>
        <p>{product_price}</p>
        <button onClick={() => onAdd(product, 1)}>Adicionar ao carrinho</button>

    </div>
  );
}

function productsList(){
    return(
        <div>
            {Object.values(Products).map((product) => (
                <ProductsCards key={product.id} product={product} product_image={product.image} product_name={product.name} product_price={product.price}/>
            ))}
        </div>
    )
}


export default productsList