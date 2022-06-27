import './Cart.css'
import { useContext, useState  } from "react"
import CartContext from "../../Context/CartContext"
import CartContainer from "../CartContainer/CartContainer"
import { Link } from "react-router-dom"
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../services/firebase'
import Form from '../Form/Form'

const Cart = (props) =>{

    const { cart, clearCart } = useContext(CartContext)
    console.log(cart)

    const [buyer, setBuyer] = useState({
        name: '',
        direccion: '',
        email: '',
        tel: ''
    });
    const [formulario, setFormulario] = useState(false)
    
    const validarDatos = ({ name, direccion, tel, email}) => {
       if( email.indexOf("@") === -1){
        console.log('@')
         return false
       }
       if( email.indexOf(".") === -1){
        console.log('...')
        return false
      }
       if(name.length === 0 || direccion.length === 0 || tel.length === 0){
        return false
       }else{
        return true
       }
    }

    const createOrder = () => {
        console.log("order creada")
        
        const objOrder = {
            buyer,
            items: cart ,
            total: total(cart)
        }
        console.log({objOrder})

        const collectionRef = collection(db, 'orders')

        addDoc(collectionRef, objOrder).then(({ id }) => {
            console.log(`se creo la orden con el id: ${id}`)
        })

        
    }

    const finalizarCompra = ()=> {
        const validar = validarDatos(buyer);
        if(!validar){
            return console.log('error')
        }
        createOrder()
        setFormulario(false)
        setBuyer({
            name: '',
            direccion: '',
            email: '',
            tel: ''
        })
        clearCart()
    }

    const total = (cart) => {
        const total = cart.reduce((acc, prod) => acc + (prod.precio * prod.quantity), 0);
        return total;
    }

    return(
        <div style={{width: "90%", margin: "auto"}}>
            <h1>{props.title}</h1>
           { cart.length 
                ? <div>
                    <button onClick={clearCart}>borrar</button>
                    {cart.map(prod => <CartContainer key={prod.id} {...prod}/> )}
                    <p className="total">Total ${total(cart)}</p>
                    {!formulario && <button onClick={() => {setFormulario(true)}}>Finalizar compra</button>}
                    {formulario && <Form buyer={buyer} setBuyer={setBuyer} finalizarCompra={finalizarCompra} /> }
                   {/*  <button onClick={createOrder}>Finalizar compra</button> */}
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