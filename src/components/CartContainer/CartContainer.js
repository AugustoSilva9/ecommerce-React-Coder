import { useContext  } from "react"
import CartContext from "../../Context/CartContext"
import "./CartContainer.css"



const CartContainer = ({id, nombre, quantity, precio}) => {
    const { removeItem } = useContext(CartContext)
    console.log(removeItem)
    let totalProd = quantity * precio ; 

    return(
        <div className="cartContainer" >
            <p>{nombre}</p>
            <p>{quantity }Un</p>
            <p>${precio}</p>
            <p>${totalProd}</p>
            <button onClick={() => removeItem(id)}>Eliminar </button>
        </div>
    )
}

export default CartContainer