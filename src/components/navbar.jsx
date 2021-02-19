import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// import img from "../assets/img/home_page.jpeg";
// import { HomeContext } from "../home_context";

function Navbar() {
  const [display, setDisplay] = useState("100%");

  const handleClick = () => {
    if (display === '100%') {
      setDisplay('20%');
    } else {
      setDisplay('100%');
    }
  };
  // const backgroundImage = {
  //   backgroundImage: `url(${img})`
  // };

  // const { home, toggleHome } = useContext(HomeContext);

  return (
  // <div className={home ? "header" : null} style={home ? backgroundImage : null}>
    <>
      <div className="navbar">
        <div className="container navbar-content">
          <h1 className="navbar-h1">Les Trois Mâts</h1>
          <Link to="/" className="navbar-btn">Accueil</Link>
          <Link className="navbar-btn" to="/description">Descriptions & Photos</Link>
          <Link to="/disponibilite&tarif" className="navbar-btn">Disponibilités & Tarifs</Link>
          <Link to="/emplacement" className="navbar-btn">Emplacement & Contact</Link>
          <Link to="/activite" className="navbar-btn">Activités</Link>
          <Link to="/lien" className="navbar-btn">Lien</Link>
        </div>
      </div>
      <div className="navbar-mobile">
        <h1 className="navbar-h1">Les Trois Mâts</h1>
        <FontAwesomeIcon icon={faBars} onClick={() => handleClick()} />
        <div className="mobile-menu" style={{ left: display }}>
          <Link to="/" className="navbar-btn">Accueil</Link>
          <Link className="navbar-btn" to="/description">Descriptions & Photos</Link>
          <Link to="/disponibilite&tarif" className="navbar-btn">Disponibilités & Tarifs</Link>
          <Link to="/emplacement" className="navbar-btn">Emplacement & Contact</Link>
          <Link to="/activite" className="navbar-btn">Activités</Link>
          <Link to="/lien" className="navbar-btn">Lien</Link>
        </div>
      </div>
    </>
  // </div>
  );
}

export default Navbar;
