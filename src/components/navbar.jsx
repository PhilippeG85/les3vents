import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const backgroundImage = {
    backgroundImage: `url("../../assets/img/home_page.jpeg")`
  };

  const { pathname } = window.location;
  const home = pathname === "/";

  return (
    <div className={home ? "header" : null} style={home ? backgroundImage : null}>
      <div className="navbar">
        <div className="container navbar-content">
          <h1 className="navbar-h1">Les Trois Mats</h1>
          <Link to="/" className="navbar-h2">Accueil</Link>
          <Link className="navbar-h2" to="/description">Descriptions & Photos</Link>
          <h4 className="navbar-h2">Disponibilites & Tarifs</h4>
          <h4 className="navbar-h2">Emplacement & Contact</h4>
          <h4 className="navbar-h2">Activites</h4>
          <h4 className="navbar-h2">Lien</h4>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
