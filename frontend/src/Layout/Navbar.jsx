import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "./Container";
import "./Navbar.css";


import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const getNavbarColor = () => {
    switch (location.pathname) {
      case "/":
        return "transparent";

      case "/Lojas":
        return "transparent";
      case "/Relatorios":
        return "transparent";
      case "/Suporte":
        return "transparent";
      default:
        return "transparent";
    }
  }
  const isHome = location.pathname === "/";
  const isRelatorios = location.pathname === "/Relatorios";
  const isSuporte = location.pathname === "/Suporte";

  // Mostrar search?
  const showSearch = !isRelatorios;

  // Mostrar carrinho?
  const showCart = !isHome && !isRelatorios && !isSuporte;


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`navbar ${isHome ? "navbar-home" : ""}`}
      style={{ backgroundColor: getNavbarColor() }}
    >

      <Container>
        <ul className="list">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              INÍCIO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Lojas"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              LOJAS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Relatorios"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              RELATÓRIOS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Suporte"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              SUPORTE
            </NavLink>
          </li>
        </ul>
      </Container>

      <div className="navba">

        {/* BUSCA */}
        {showSearch && (
          <div className="search-box">
            <input type="checkbox" id="check" />
            <div className="caixa-busca">
              <input name="busca" id="busca" type="search" placeholder="Pesquisar..." />
              <label htmlFor="check" className="icon">
                <i className="bi bi-search"></i>
              </label>
            </div>
          </div>
        )}

        {/* CARRINHO */}
        {showCart && (
          <a href="#" className="nav-icon">
            <i className="bi bi-cart4"></i>
          </a>
        )}

        {/* PERFIL (sempre visível) */}
        <a className="nav-icon">
          <div className="menu-mobile-btn" onClick={toggleMenu}>
            <i className="bi bi-person-circle"></i>
          </div>
        </a>

      </div>


      {/* SIDEBAR */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <i className="bi bi-x close-btn" onClick={toggleMenu}></i>

        <Link to="#" onClick={toggleMenu}>
          <i className="bi bi-person-circle" />
        </Link>

        <a href="#" className="detalhe">
            <p className="gan">TERMINAR SESSÃO</p>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;


