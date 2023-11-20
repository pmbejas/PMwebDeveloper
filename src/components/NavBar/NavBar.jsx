import './navbar.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logoNavBar from '../../assets/logoPabloBlanco.svg';
export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark w-100">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand ms-3 ps-3">
          <img className="navbar-brand-img" src={logoNavBar} alt="Logo"  height="35" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse px-3" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-3">
            <li className="nav-item me-3">
              <NavLink to="/" className="nav-link">Inicio</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink to="/work" className="nav-link">Portfolio</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink to="/contact" className="nav-link">Contacto</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
