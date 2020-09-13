import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-g2 navbar-dark p-2 px-5">
        <Link to="/" className="navbar-brand text-org" style={{letterSpacing: 1}}>EntertainMe</Link>
        <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
          <div className="navbar-nav justify-content-around">
            <Link to="/movies" className="nav-link mx-2">Movies</Link>
            <Link to="/series" className="nav-link mx-2">TV Series</Link>
            <Link to="/favorites" className="nav-link mx-2">Favorites</Link>
            <Link to="/add" className="nav-link mx-2 btn-org-pulse text-light rounded ">ADD MOVIES</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
