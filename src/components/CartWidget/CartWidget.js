const CartWidget = () =>{
    return(
        <div style={{display: "flex"}}>
            <img className="cart" src="./images/cart.png" alt="Carrito de compras"/>
            <p  style={{marginLeft: "1rem", fontSize: "1.2rem"}}>4</p>
        </div>
    )
}

export default CartWidget