import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
import { getProductById } from "../../asyncmock"

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);

    useEffect(() => {
        getProductById().then(response => {
            setItem(response)
        })
    }, [item])

    return(
        <div>
            <ItemDetail key={item.id} {...item} />  
        </div>
    )
}

export default ItemDetailContainer