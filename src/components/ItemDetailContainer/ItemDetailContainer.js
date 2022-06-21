import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
/* import { getProductById } from "../../asyncmock" */
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const { productoId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        getDoc(doc(db, 'productos', productoId)).then(response => {
            const producto = { id: response.id, ...response.data()}
            console.log(producto)
            setItem(producto)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        /* getProductById( productoId ).then(response => {
            setItem(response)
        }).finally(() => {
            setLoading(false)
        }) */
    }, [productoId])

    if(loading){
        return(<div class="spinner"></div>)
    }
    
    return(
        <div>
            <ItemDetail {...item} />  
        </div>
    )
}

export default ItemDetailContainer