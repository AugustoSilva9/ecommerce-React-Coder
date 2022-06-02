import ItemList from "../ItemList/ItemList"
import { useState ,  useEffect } from "react"
import { getProductos } from "../../asyncmock";
import { getProductosByCategoria } from "../../asyncmock";
import { useParams } from "react-router-dom"
import "../Item/Item.css"


const ItemListContainer = (props) => {
    
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoriaId } = useParams();


    useEffect(() => {
        setLoading(true)
        if(!categoriaId){
            getProductos().then(response => {
                setProductos(response)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            getProductosByCategoria(categoriaId).then(response => {
                setProductos(response)
            }).finally(() => {
                setLoading(false)
            })
        }
    },  [categoriaId])
   
    if(loading){
        return(<div class="spinner"></div>)
    }

    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemList prod={productos} />
        </div>
    )
}

export default ItemListContainer