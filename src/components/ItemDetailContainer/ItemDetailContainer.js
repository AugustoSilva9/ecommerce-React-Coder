import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { getProductoId } from "../../services/firebase/firestore";
import { useFirestore } from "../../hooks/useFirestore";


const ItemDetailContainer = () => {

/*     const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true); */
    const { productoId } = useParams()
    const { loading, data, error } = useFirestore(() =>getProductoId(productoId), [productoId])

 /*    useEffect(() => {
        setLoading(true)

        getProductoId(productoId).then(response => {
            setItem(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [productoId])
 */
    if(loading){
        return(<div class="spinner"></div>)
    }
    if(error){
        console.log(error)
    }

    return(
        <div>
            <ItemDetail {...data} />  
        </div>
    )
}

export default ItemDetailContainer