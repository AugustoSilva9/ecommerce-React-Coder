import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import { Link } from "react-router-dom";

const CartWidget = () =>{
    
    const { getQuantity } = useContext(CartContext);
    
    console.log(getQuantity)
    const quantity = getQuantity()
    console.log(quantity)
    return(
        <Link to='/cart' style={{display: "flex"}}>
            <img className="cart" src="./images/cart.png" alt="Carrito de compras"/>
            <p  style={{marginLeft: "1rem", fontSize: "1.2rem", color:"white"}}> { quantity } </p>
        </Link>
    )
}

export default CartWidget