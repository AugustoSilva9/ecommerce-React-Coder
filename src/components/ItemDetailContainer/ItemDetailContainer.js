import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom';
import { getProductoId } from "../../services/firebase/firestore";
import { useFirestore } from "../../hooks/useFirestore";


const ItemDetailContainer = () => {

    const { productoId } = useParams()
    const { loading, data, error } = useFirestore(() =>getProductoId(productoId), [productoId])

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