import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"


const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className='logo'><h1>Tienda</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Todos nuestros productos</Link></li>
            <li><Link className="menu-link" to="/productos/conectores">Conectores</Link></li>
            <li><Link className="menu-link" to="/productos/importados">Importaciones</Link></li>
            <li><Link className="menu-link" to="/productos/general_electronics">Electronica General</Link></li>
            <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
            <li><CartWidget/></li>
        </ul>
    </nav>
  )
}

export default Navbar