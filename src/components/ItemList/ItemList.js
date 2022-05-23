import Item from "../Item/Item";

 
const ItemList = ({prod}) =>{
    console.log(prod)
    return(
        <div style={{display: "flex",
         justifyContent: "space-around",
         width: "90%",
         margin: "auto"}}>
            {prod.map(p => <Item key={p.id} {...p} />)}
        </div>
    )
}

export default ItemList;