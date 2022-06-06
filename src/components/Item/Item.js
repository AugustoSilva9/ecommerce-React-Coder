import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const Item = ({id, nombre, precio, img, stock }) => {
    
    return(
        <div id={id} className="card" >
            <img src={img} alt="imagen" />
            <h2>{nombre}</h2>
            <h4>$ {precio}</h4>
           {/* { <ItemCount stock={stock} initial={0} />} */}
           <Link to={`/detail/${id}`}>
               <button className="btnAddCart">Ver Detalle</button>
           </Link>
        </div>
    )
}

export default Item;