import { useState, createContext } from "react";


const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd])
    }

    const getQuantity = () => {
        console.log(cart)
        let acc = 0;
        cart.forEach(prod => {
            acc += prod.quantity
        })

        return acc
    }
    
    return(
        <CartContext.Provider value={{cart, addItem, getQuantity}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext