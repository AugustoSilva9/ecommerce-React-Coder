import { useState } from "react";
import "./ItemCount.css";


const ItemCount = ({initial, stock, onAdd}) =>{

    const [quantity, setQuantity] = useState(initial)
    
    function decrement(){
        if(quantity > 1){
            setQuantity(quantity -1)
        }
    }
    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }
    return(
        <div>
            <div className="botonera" style={{ display: "flex", justifyContent : "center"}}>
                <button onClick={decrement}>-</button>
                <h2>{quantity}</h2>
                <button onClick={increment}>+</button>
            </div>
            <button className="btnAddCart" onClick={() => onAdd(quantity)} >Agregar al carrito </button>
        </div>
    )
}
export default ItemCount