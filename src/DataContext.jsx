import {useState, createContext, useContext} from 'react';

const Context = createContext();


export const DataContext = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    const onAdd = (product, quantity) => {
       const productInCart = cartProducts.find((cartProduct) => cartProduct.id === product.id)
        if(productInCart){
              setCartProducts(cartProducts.map((cartProduct) => cartProduct.id === product.id ? {...cartProduct, quantity: cartProduct.quantity + quantity } : cartProduct))
        }
        else{
            setCartProducts([...cartProducts, {...product, quantity}])
        }    
        setTotalPrice(totalPrice + product.price * quantity)
        setTotalItems(totalItems + quantity)

    }

    return(
        <Context.Provider value={{
            cartProducts,
            totalPrice,
            totalItems,
            onAdd
        }}>
        {children}
        </Context.Provider>
    )
}

export const useDataContext = () => useContext(Context)
