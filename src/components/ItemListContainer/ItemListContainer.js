import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import "../Item/Item.css"
import { getProductos } from "../../services/firebase/firestore"
import { useFirestore } from "../../hooks/useFirestore"

const ItemListContainer = () => {
    
    const { categoriaId } = useParams();
    const { loading, data, error } = useFirestore(() => getProductos(categoriaId), [categoriaId])

    if(loading){
        return(<div class="spinner"></div>)
    }

    if(error){
        return <h1>Hubo un error</h1>
    }
   
    return (
        <div  style={{marginBottom: "2rem", paddingBottom: "2rem"}}>
            <h1>{categoriaId ? categoriaId : "Nuestros Productos"}</h1>
            <ItemList prod={data} />
        </div>
    )
}

export default ItemListContainer