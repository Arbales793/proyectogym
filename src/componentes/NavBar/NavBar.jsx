import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src="https://cdn-icons-png.freepik.com/256/12242/12242421.png?ga=GA1.1.358558207.1710877912&" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

