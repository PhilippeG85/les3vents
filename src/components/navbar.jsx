import React, { useContext } from "react";
import { Link } from "react-router-dom";

import img from "../assets/img/home_page.jpeg";
import { HomeContext } from "../home_context";

function Navbar() {
  const backgroundImage = {
    backgroundImage: `url(${img})`
  };

  const { home, toggleHome } = useContext(HomeContext);

  return (
    <div className={home ? "header" : null} style={home ? backgroundImage : null}>
      <div className="navbar">
        <div className="container navbar-content">
          <h1 className="navbar-h1">Les Trois Mâts</h1>
          <Link to="/" className="navbar-btn" onClick={() => toggleHome(true)}>Accueil</Link>
          <Link className="navbar-btn" to="/description" onClick={() => toggleHome(false)}>Descriptions & Photos</Link>
          <Link to="/disponibilite&tarif" className="navbar-btn" onClick={() => toggleHome(false)}>Disponibilites & Tarifs</Link>
          <Link to="/emplacement" className="navbar-btn" onClick={() => toggleHome(false)}>Emplacement & Contact</Link>
          <Link to="/activite" className="navbar-btn" onClick={() => toggleHome(false)}>Activites</Link>
          <Link to="/lien" className="navbar-btn" onClick={() => toggleHome(false)}>Lien</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
