import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-g2 navbar-dark p-2 px-5">
        <Link to="/" className="navbar-brand">EntertainMe</Link>
        <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/movies" className="nav-link">Movies</Link>
            <Link to="/series" className="nav-link">TV Series</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
