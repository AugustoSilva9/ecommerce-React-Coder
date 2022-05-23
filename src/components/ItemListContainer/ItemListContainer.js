import ItemList from "../ItemList/ItemList"
import { useState ,  useEffect } from "react"
import { getProductos } from "../../asyncmock";

const ItemListContainer = (props) => {
    
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductos().then(response => {
            setProductos(response)
        })
    },  [productos])
   
    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemList prod={productos} />
        </div>
    )
}

export default ItemListContainer