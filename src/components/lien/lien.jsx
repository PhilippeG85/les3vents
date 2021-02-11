import React from "react";

import LinkCard from "./link_card";
import IMG_7881 from "../../assets/img/link/IMG_7881.JPG";

function Lien() {
  const styleImg = {
    position: "relative",
    backgroundImage: `url(${IMG_7881})`,
    backgroundSize: "cover",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  return (
    <div style={styleImg}>
      <h1 className="usefull-link">Liens Utiles</h1>
      <div className="link">
        <LinkCard number="1" title="Vendée Tourisme" link="https://www.vendee-tourisme.com/" />
        <LinkCard number="2" title="Office du Tourisme" link="https://www.lessablesdolonne-tourisme.com/fiche/detail/2250/Sejourner~Infos-pratiques~Offices-de-Tourisme/Office-de-Tourisme-des-Sables-d-Olonne-" />
        <LinkCard number="3" title="Vendée Globe" link="https://www.vendeeglobe.org/fr" />
        <LinkCard number="4" title="Puy du Fou" link="https://www.puydufou.com/fr" />
        <LinkCard number="5" title="Pistes cyclables en Vendée" link="https://vendeevelo.vendee.fr/" />
      </div>
    </div>
  );
}

export default Lien;
