import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import { Link } from "react-router-dom";
import "./CartWidget.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () =>{
    
    const { getQuantity } = useContext(CartContext);


    const quantity = getQuantity()

    return(
        <Link to='/cart' style={{display: "flex"}}>
            <FontAwesomeIcon className="carrito" icon={faCartShopping} />
            <p className="nroCarrito" > { quantity } </p>
        </Link>
    )
}

export default CartWidget