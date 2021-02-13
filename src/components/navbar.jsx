import React from "react";
import { Link } from "react-router-dom";

// import img from "../assets/img/home_page.jpeg";
// import { HomeContext } from "../home_context";

function Navbar() {
  // const backgroundImage = {
  //   backgroundImage: `url(${img})`
  // };

  // const { home, toggleHome } = useContext(HomeContext);

  return (
  // <div className={home ? "header" : null} style={home ? backgroundImage : null}>
    <div className="navbar">
      <div className="container navbar-content">
        <h1 className="navbar-h1">Les Trois Mâts</h1>
        <Link to="/" className="navbar-btn">Accueil</Link>
        <Link className="navbar-btn" to="/description">Descriptions & Photos</Link>
        <Link to="/disponibilite&tarif" className="navbar-btn">Disponibilités & Tarifs</Link>
        <Link to="/emplacement" className="navbar-btn">Emplacement & Contact</Link>
        <Link to="/activite" className="navbar-btn">Activités</Link>
        <Link to="/lien" className="navbar-btn">Liens</Link>
      </div>
    </div>
  // </div>
  );
}

export default Navbar;
