import "./ItemDetail.css" 

const ItemDetail = ({ id, nombre, precio, img, descripcion }) => {

    return(
        <div className="containerDetail">
            <img src={img} alt={`imagen de ${nombre}`} className="w-50 img-detail" />
            <div className="w-50">
                <h2>{nombre}</h2>
                <p>{descripcion}</p>
                <h2>$ {precio}</h2>
            </div>
        </div>
    )
}

export default ItemDetail