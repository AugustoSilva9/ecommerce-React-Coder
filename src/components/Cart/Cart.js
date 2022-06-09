import { useContext  } from "react"
import CartContext from "../../Context/CartContext"
import CartContainer from "../CartContainer/CartContainer"

const Cart = (props) =>{

    const { cart } = useContext(CartContext)
    console.log(cart)

    return(
        <div style={{width: "90%", margin: "auto"}}>
            <h1>{props.title}</h1>
            <div>
                {cart.map(prod => <CartContainer key={prod.id} {...prod}/> )}
            </div>
        </div>
    )
}

export default Cart