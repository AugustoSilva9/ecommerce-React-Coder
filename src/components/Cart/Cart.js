import './Cart.css'
import { useContext  } from "react"
import CartContext from "../../Context/CartContext"
import CartContainer from "../CartContainer/CartContainer"
import { Link } from "react-router-dom"

const Cart = (props) =>{

    const { cart } = useContext(CartContext)
    console.log(cart)

    const total = (cart) => {
        const total = cart.reduce((acc, prod) => acc + (prod.precio * prod.quantity), 0);
        return total;
    }

    return(
        <div style={{width: "90%", margin: "auto"}}>
            <h1>{props.title}</h1>
           { cart.length 
                ? <div>
                    {cart.map(prod => <CartContainer key={prod.id} {...prod}/> )}
                    <p className="total">Total ${total(cart)}</p>
                    <button>Finalizar compra</button>
                  </div>
                : <div>
                    <p>Su carrito esta vacio</p>
                    <Link to='/' ><button>Seguir comprando</button></Link>
                  </div> 
            }
        </div>
    )
}

export default Cart