import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import Container from "./Container";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isRelatorios = location.pathname === "/Relatorios";
  const isSuporte = location.pathname === "/Suporte";

  const showSearch = !isRelatorios;
  const showCart = !isHome && !isRelatorios && !isSuporte;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`navbar ${isHome || isRelatorios ? "navbar-home" : ""}`}
      style={{
        backgroundColor: isRelatorios ? "#0c5a75" : "transparent"
      }}
    >
      <Container>
        <ul className="list">
          <li>
            <NavLink to="/" end>INÍCIO</NavLink>
          </li>

          <li>
            <NavLink to="/Lojas">LOJAS</NavLink>
          </li>

          <li>
            <NavLink to="/Relatorios">RELATÓRIOS</NavLink>
          </li>

          <li>
            <NavLink to="/Suporte">SUPORTE</NavLink>
          </li>
        </ul>
      </Container>

      <div className="navba">

        {showSearch && (
          <div className="search-box">
            <input type="checkbox" id="check" />

            <div className="caixa-busca">
              <input type="search" placeholder="Pesquisar..." />

              <label htmlFor="check" className="icon">
                <i className="bi bi-search"></i>
              </label>
            </div>
          </div>
        )}

        {showCart && (
          <a href="#" className="nav-icon">
            <i className="bi bi-cart4"></i>
          </a>
        )}

        <a className="nav-icon">
          <div className="menu-mobile-btn" onClick={toggleMenu}>
            <i className="bi bi-person-circle"></i>
          </div>
        </a>

      </div>

      {/* SIDEBAR */}

      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <i className="bi bi-x close-btn" onClick={toggleMenu}></i>

        <Link to="#">
          <i className="bi bi-person-circle"></i>
        </Link>
        <div className="usuario">
          <p>Email: <span>usuario@gmail.com</span> </p>
          <p>Plano em Uso: <span>Plus</span></p>
          <p>Estado: <span>Activo</span></p>
          <p>Políticas e privacidade</p>
        </div>

        <a href="#" className="detalhe">
          <p className="gan">TERMINAR SESSÃO</p>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;