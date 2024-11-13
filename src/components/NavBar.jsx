import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import { ShoppingCart } from 'lucide-react';

const NavBar = () => {
  return (
    <>
      <ul className="nav-bar">
        <li>
          <NavLink to="/"
            className = {({ isActive }) => isActive ? "active" : "" }>
              Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shopping"
            className = {({ isActive }) => isActive ? "active" : "" }>
              Shopping
          </NavLink>
        </li>
        <li>
          <NavLink to="/carrito"><ShoppingCart /></NavLink>
        </li>
      </ul>
    </>
  )
}

export default NavBar;