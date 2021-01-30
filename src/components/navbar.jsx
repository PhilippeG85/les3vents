import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/img/home_page.jpeg";

function Navbar() {
  const backgroundImage = {
    backgroundImage: `url(${img})`
  };

  const [ home, setHome ] = useState(true);

  return (
    <div className={home ? "header" : null} style={home ? backgroundImage : null}>
      <div className="navbar">
        <div className="container navbar-content">
          <h1 className="navbar-h1">Les Trois Mats</h1>
          <Link to="/" className="navbar-btn" onClick={() => setHome(true)}>Accueil</Link>
          <Link className="navbar-btn" to="/description" onClick={() => setHome(false)}>Descriptions & Photos</Link>
          <Link to="/disponibilite&tarif" className="navbar-btn" onClick={() => setHome(false)}>Disponibilites & Tarifs</Link>
          <Link to="/emplacement" className="navbar-btn" onClick={() => setHome(false)}>Emplacement & Contact</Link>
          <Link to="/activite" className="navbar-btn" onClick={() => setHome(false)}>Activites</Link>
          <Link to="/lien" className="navbar-btn" onClick={() => setHome(false)}>Lien</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;