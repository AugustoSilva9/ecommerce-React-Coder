import "./ItemDetail.css" 
import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";

const ItemDetail = ({ id, nombre, precio, img, descripcion, stock }) => {

    const [quantity, setQuantity] = useState(0);

    const { addItem } = useContext(CartContext)
     
    const handleOnAdd = (quantity) => {
        console.log(quantity)
        setQuantity(quantity)
        
        console.log(`${quantity} ---`)
        addItem({ id, nombre, precio, quantity })
    }

    return(
        <div className="containerDetail">
            <img src={img} alt={`imagen de ${nombre}`} className="w-50 img-detail" />
            <div className="w-50">
                <h2>{nombre}</h2>
                <p>{descripcion}</p>
                <h2>$ {precio}</h2>
                {quantity > 0 ? <Link to={"/cart"} className="btnFinalCompra"><div>Finalizar compra</div></Link> : <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />}
            </div>
        </div>
    )
}

export default ItemDetail