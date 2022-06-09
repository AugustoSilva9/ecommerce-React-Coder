import { useContext  } from "react"
import CartContext from "../../Context/CartContext"

const Cart = (props) =>{

    const { cart, getQuantity } = useContext(CartContext)
    console.log(cart)

    return(
        <div>
            <h1>{props.title}</h1>
            <div>
                {cart.map(prod => {
                    return(
                        <div key={prod.id} style={{display: "flex", justifyContent: "center"}}>
                             <div >{prod.nombre}</div>
                             <div >{prod.quantity}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart