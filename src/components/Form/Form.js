import "./Form.css"



const Form = ({ buyer, setBuyer, finalizarCompra, errorDato }) => {



    return(
        <div>
            <p>Completa tus datos para finalizar la compra</p>
            <form className="formBuyer">
                <input value={buyer.name} onChange={(e) => setBuyer({ ...buyer, name: e.target.value })} type="text" placeholder="Nombre y Apellido" required/>
                <input  value={buyer.email} onChange={(e) => setBuyer({ ...buyer, email: e.target.value })} type="email" placeholder="email@email.com" required />
                <input  value={buyer.direccion} onChange={(e) => setBuyer({ ...buyer, direccion: e.target.value })} type="text" placeholder="Direccion" required />
                <input  value={buyer.tel} onChange={(e) => setBuyer({ ...buyer, tel: e.target.value })} type="tel" placeholder="2356987" required />
                <p className="errorDato">{`${errorDato}`}</p>
                <input type="button" value="Comprar" className="btnBuyer" onClick={finalizarCompra} />
 
            </form>
        </div>
    )

}

export default Form