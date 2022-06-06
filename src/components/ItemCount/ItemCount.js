import { useState } from "react";
import "./ItemCount.css";
import { Link } from "react-router-dom";

const ItemCount = ({initial, stock, onAdd}) =>{

    const [count, setCount] = useState(0);
    
    function decrement(){
        if(count > initial){
            setCount(count -1)
        }
    }
    const increment = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    return(
        <div>
            <div className="botonera" style={{ display: "flex", justifyContent : "center"}}>
                <button onClick={decrement}>-</button>
                <h2>{count}</h2>
                <button onClick={increment}>+</button>
            </div>
            <button className="btnAddCart" onClick={() => onAdd(count)} >Agregar al carrito </button>
        </div>
    )
}
export default ItemCount