import ItemList from "../ItemList/ItemList"
import { useState ,  useEffect } from "react"
import { useParams } from "react-router-dom"
import "../Item/Item.css"
import { getProductos } from "../../services/firebase/firestore"

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoriaId } = useParams();


    useEffect(() => {
        setLoading(true)

        getProductos(categoriaId).then(response => {
            setProductos(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    },  [categoriaId])
   
    if(loading){
        return(<div class="spinner"></div>)
    }
   
    return (
        <div>
            <h1>{categoriaId ? categoriaId : "Nuestros Productos"}</h1>
            <ItemList prod={productos} />
        </div>
    )
}

export default ItemListContainer