import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../Context/CartContext'

const NavBar = () => {

    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity();

    return(
        <nav>
            <Link to='/'>
                <h1>E-commerce</h1>
            </Link>
            <ul>
                <NavLink to='/categoria/Remeras' className={({isActive}) => isActive ? 'activo' : ''} ><li>Remeras</li> </NavLink>
                <NavLink to='/categoria/Gorras' className={({isActive}) => isActive ? 'activo' : ''}><li>Gorras</li> </NavLink>
                <NavLink to='/categoria/Shorts' className={({isActive}) => isActive ? 'activo' : ''}><li>Shorts</li> </NavLink>
            </ul>
            {quantity > 0 && <CartWidget  />}
            <button type="button">Login</button>
        </nav>
    )
}
export default NavBar