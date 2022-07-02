import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import CartContext from '../../Context/CartContext'
import { getNavBar } from '../../services/firebase/firestore'

const NavBar = () => {

    const { getQuantity } = useContext(CartContext)
    const [categoria, setCategoria] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        getNavBar().then(response => {
            setCategoria(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [setCategoria] )
    
    if(loading){
        return(<div class="spinner"></div>)
    }
    const quantity = getQuantity();
    console.log(categoria)

    return(
        <nav>
            <Link to='/'>
                <h1>E-commerce</h1>
            </Link> 
            <ul>
                {categoria.map(cat => <NavLink to={`/categoria/${cat.descripcion}`} className={({isActive}) => isActive ? 'activo' : ''} ><li>{`${cat.descripcion}`}</li> </NavLink>)}
                {/* <NavLink to='/categoria/Remeras' className={({isActive}) => isActive ? 'activo' : ''} ><li>Remeras</li> </NavLink>
                <NavLink to='/categoria/Gorras' className={({isActive}) => isActive ? 'activo' : ''}><li>Gorras</li> </NavLink>
                <NavLink to='/categoria/Shorts' className={({isActive}) => isActive ? 'activo' : ''}><li>Shorts</li> </NavLink> */}
            </ul>
            {quantity > 0 && <CartWidget  />}
            <button className='btn login' type="button">Login</button>
        </nav>
    )
}
export default NavBar