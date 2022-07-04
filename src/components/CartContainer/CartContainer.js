import { useContext  } from "react"
import CartContext from "../../Context/CartContext"
import "./CartContainer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";



const CartContainer = ({id, nombre, quantity, precio}) => {
    const { removeItem } = useContext(CartContext)

    let totalProd = quantity * precio ; 

    return(
        <div className="cartContainer" >
            <p>{nombre}</p>
            <p>{quantity }Un</p>
            <p>${precio}</p>
            <p>${totalProd}</p>
            <FontAwesomeIcon className="eliminar" icon={faTrash} onClick={() => removeItem(id)}/>
        </div>
    )
}

export default CartContainer