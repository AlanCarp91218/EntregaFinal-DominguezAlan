import { Link, useNavigate } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext/useCartContext'
import { useAuthContext } from '../../context/AuthContext/useAuthContext'
import './Nav.css'

export const Nav = () => {
  const { getTotalItems } = useCartContext()
  const { user, logout } = useAuthContext()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

 return (
  <nav>
    <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
      <ul style={{ flex: 1 }}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/category/camisetas"}>Camisetas</Link>
        </li>
        <li>
          <Link to={"/category/buzos"}>Buzos</Link>
        </li>
        <li>
          <Link to={"/carrito"} className='icons-cart'>🛒</Link>
          {getTotalItems() > 0 && (
            <span className='in-cart'>{getTotalItems()}</span>
          )}
        </li>
      </ul>
      {user && (
        <div style={{ minWidth: "140px", textAlign: "right" }}>
          <button onClick={handleLogout} className="btn btn-logout">
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  </nav>
)
}