import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({id, nombre, precio, img, stock }) => {
    
    return(
        <div id={id}>
            <img src={img} alt="imagen" />
            <h2>{nombre}</h2>
            <h4>$ {precio}</h4>
           { <ItemCount stock={stock} initial={0} />}
        </div>
    )
}

export default Item;