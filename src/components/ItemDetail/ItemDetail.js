import "./ItemDetail.css" 
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom";

const ItemDetail = ({ nombre, precio, img, descripcion, stock }) => {

    const [cantidad, setCantidad] = useState(0);

    const handleOnAdd = (count) =>{
        setCantidad(count)
    }

    return(
        <div className="containerDetail">
            <img src={img} alt={`imagen de ${nombre}`} className="w-50 img-detail" />
            <div className="w-50">
                <h2>{nombre}</h2>
                <p>{descripcion}</p>
                <h2>$ {precio}</h2>
                {cantidad > 0 ? <Link to={"/cart"} className="btnFinalCompra"><div>Finalizar compra</div></Link> : <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />}
            </div>
        </div>
    )
}

export default ItemDetail