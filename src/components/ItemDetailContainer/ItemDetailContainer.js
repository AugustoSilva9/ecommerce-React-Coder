import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
import { getProductById } from "../../asyncmock"
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const { productoId } = useParams()

    useEffect(() => {
        getProductById( productoId ).then(response => {
            setItem(response)
            console.log(item)
        }).finally(() => {
            setLoading(false)
        })
    }, [item])

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