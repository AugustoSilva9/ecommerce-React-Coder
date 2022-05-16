import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <nav>
            <h1>E-commerce</h1>
            <ul>
                <li>Hombre</li>
                <li>Mujer</li>
                <li>Niños</li>
            </ul>
                <CartWidget  />
                <button type="button">Login</button>
        </nav>
    )
}
export default NavBar