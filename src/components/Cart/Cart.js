import './Cart.css'
import { useContext, useState  } from "react"
import CartContext from "../../Context/CartContext"
import CartContainer from "../CartContainer/CartContainer"
import { Link } from "react-router-dom"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'
import Form from '../Form/Form'

const Cart = (props) =>{

    const { cart, clearCart } = useContext(CartContext)
    const [mostrarFaltante, setMostrarFaltante] = useState(true)
    const [faltantes, setFaltantes] = useState()
    const [buyer, setBuyer] = useState({
        name: '',
        direccion: '',
        email: '',
        tel: ''
    });
    const [formulario, setFormulario] = useState(false)
    const [errorDato, setErrorDato] = useState('');
    
    const validarDatos = ({ name, direccion, tel, email}) => {
        setErrorDato('')
       if( email.indexOf("@") === -1){
        setErrorDato('El email es incorrecto')
         return false
       }
       if( email.indexOf(".") === -1){
        setErrorDato('El email es incorrecto')
        return false
      }
       if(name.length === 0 || direccion.length === 0 || tel.length === 0){
        setErrorDato('Datos incorrectos')
        return false
       }else{
        return true
       }
    }

    const createOrder = () => {
        
        const objOrder = {
            buyer,
            items: cart ,
            total: total(cart)
        }

        const ids = cart.map(prod => prod.id)
        
        const batch = writeBatch(db)
        const sinStock = []
        const collectionRefId = collection(db, 'productos')

        getDocs(query(collectionRefId, where(documentId(), 'in', ids)))
        .then(response => {response.docs.forEach(doc => {
                const dataDoc = doc.data()
                const prodCantidad = cart.find(prod => prod.id === doc.id)?.quantity

                if(dataDoc.stock >= prodCantidad){
                    batch.update(doc.ref, { stock: dataDoc.stock - prodCantidad })
                }else{
                    sinStock.push({ id: doc.id, ...dataDoc})
                }
            })
        }).then(() => {
            if(sinStock.length === 0){
                const collectionRef = collection(db, 'orders')
                
                return addDoc(collectionRef, objOrder)
            } else{
                return Promise.reject({type: 'sinStock', productos: sinStock})
            } 
        }).then(({ id }) => {
            batch.commit()
            console.log(`se creo la orden con el id: ${id}`)
            setFormulario(false)
            setBuyer({
                name: '',
                direccion: '',
                email: '',
                tel: ''
            })
            clearCart()
        }).catch(error => {
            setMostrarFaltante(false)
            setFaltantes(error.productos)
            
        })

    }

    const finalizarCompra = ()=> {
        setMostrarFaltante(true)
        const validar = validarDatos(buyer);
        if(!validar){
            return errorDato
        }
        createOrder()
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
                    {cart.map(prod => <CartContainer key={prod.id} {...prod}/> )}
                    { !mostrarFaltante && faltantes.map(el => <p className='faltantes'>{el.nombre} no tiene stock disponible</p>) }
                    <p className="total">Total ${total(cart)}</p>
                    <div className='contenedorBtn'>
                        <button className='btnCart' onClick={clearCart}>Limpiar Carrito</button>
                        {!formulario && <button className='btnCart' onClick={() => {setFormulario(true)}}>Finalizar compra</button>}
                    </div>
                    {formulario && <Form buyer={buyer} setBuyer={setBuyer} errorDato={errorDato} finalizarCompra={finalizarCompra} /> }
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