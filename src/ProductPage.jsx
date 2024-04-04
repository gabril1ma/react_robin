import { useDataContext } from './DataContext.jsx';
import { useParams } from 'react-router-dom';
import { Products } from './Products.jsx';
import Header from './Header.jsx';

function ProductPage(){
    const { onAdd } = useDataContext();
    const { id } = useParams();

    const productKey = `product${id}`
    const product = Products[productKey]

    return(
        <>
        <Header />
        <div>
            
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name}></img>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => onAdd(product, 1)}>Adicionar ao carrinho</button>
        </div>
        </>
    )

}

export default ProductPage