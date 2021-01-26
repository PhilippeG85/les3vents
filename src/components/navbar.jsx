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
          <Link to="/" className="navbar-btn">Accueil</Link>
          <Link className="navbar-btn" to="/description">Descriptions & Photos</Link>
          <Link to="/disponibilite&tarif" className="navbar-btn">Disponibilites & Tarifs</Link>
          <Link to="/emplacement" className="navbar-btn">Emplacement & Contact</Link>
          <Link to="/activite" className="navbar-btn">Activites</Link>
          <Link to="/lien" className="navbar-btn">Lien</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
