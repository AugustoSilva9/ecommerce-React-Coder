import ItemList from "../ItemList/ItemList"
/* import { useState ,  useEffect } from "react" */
import { useParams } from "react-router-dom"
import "../Item/Item.css"
import { getProductos } from "../../services/firebase/firestore"
import { useFirestore } from "../../hooks/useFirestore"

const ItemListContainer = () => {
    
    const { categoriaId } = useParams();
    const { loading, data, error } = useFirestore(() => getProductos(categoriaId), [categoriaId])
   /*  const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true)

        getProductos(categoriaId).then(response => {
            setProductos(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    },  [categoriaId]) */

   
    if(loading){
        return(<div class="spinner"></div>)
    }

    if(error){
        return <h1>Hubo un error</h1>
    }
   
    return (
        <div>
            <h1>{categoriaId ? categoriaId : "Nuestros Productos"}</h1>
            <ItemList prod={data} />
        </div>
    )
}

export default ItemListContainer