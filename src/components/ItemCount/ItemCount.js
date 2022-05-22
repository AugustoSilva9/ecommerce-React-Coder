import { useState } from "react";
import "./ItemCount.css";

const ItemCount = (props) =>{

    const [count, setCount] = useState(0);
    
    function decrement(){
        if(count > props.initial){
            setCount(count -1)
        }
    }
    const increment = () => {
        if(count < props.stock){
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
            <button className="btnAddCart">Agregar al carrito </button>
        </div>
    )
}
export default ItemCount