import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
import { getProductById } from "../../asyncmock"
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const { productoId } = useParams()

    useEffect(() => {
        getProductById( productoId ).then(response => {
            setItem(response)
        })
    }, [item])

    return(
        <div>
            <ItemDetail {...item} />  
        </div>
    )
}

export default ItemDetailContainer