import { useState, createContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        }else{
            const newCart = cart.map(prod => {
                if(prod.id === productToAdd.id){
                    const newProd = {...prod, quantity: productToAdd.quantity}
                    return newProd
                }else{
                    return prod
                }
            })
            setCart(newCart)
        }

    }

    const getQuantity = () => {
        let acc = 0;
        cart.forEach(prod => {
            acc += prod.quantity
        })

        return acc
    }

    const isInCart = (id) =>{
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    }    

    const clearCart = () => {
        setCart([]);
    }


    return(
        <CartContext.Provider value={{cart, addItem, getQuantity, removeItem, clearCart, isInCart}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext