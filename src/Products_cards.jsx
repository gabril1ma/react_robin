import { Products } from "./Products.jsx"
import { useDataContext } from "./DataContext.jsx"
import "./Products_cards.css"

function ProductsCards({ product, product_id, product_image, product_name, product_price }) {

    const { onAdd } = useDataContext();

  return (
    <div className="product_cards">
        <img src={product_image} alt={product_name}></img>
        <h2>{product_name}</h2>
        <p>{product_price}</p>
        <button onClick={() => onAdd(product, 1)}> </button>

    </div>
  );
}

function productsList(){
    return(
        <div>
            {Object.values(Products).map((product) => (
                <ProductsCards key={product.product_id} product={product} product_id={product.product_id} product_image={product.image} product_name={product.name} product_price={product.price}/>
            ))}
        </div>
    )
}


export default productsList