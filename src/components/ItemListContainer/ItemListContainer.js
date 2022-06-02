import ItemList from "../ItemList/ItemList"
import { useState ,  useEffect } from "react"
import { getProductos } from "../../asyncmock";
import { getProductosByCategoria } from "../../asyncmock";
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => {
    
    const [productos, setProductos] = useState([]);
    const { categoriaId } = useParams();


    useEffect(() => {
        if(!categoriaId){
            getProductos().then(response => {
                setProductos(response)
            })
        } else {
            getProductosByCategoria(categoriaId).then(response => {
                setProductos(response)
            })
        }
    },  [categoriaId])
   
    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemList prod={productos} />
        </div>
    )
}

export default ItemListContainer