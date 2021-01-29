import React from "react";

import LinkCard from "./link_card";

function Lien() {
  return (
    <div style={{ position: "relative" }}>
      <h1 className="usefull-link">Liens Utiles</h1>
      <div className="link" style={{ backgroundImage: `url("../../../assets/img/link/IMG_7881.JPG")` }}>
        <LinkCard number="1" title="Vendée Tourisme" link="https://www.vendee-tourisme.com/" />
        <LinkCard number="2" title="Office du Tourisme" link="https://www.lessablesdolonne-tourisme.com/fiche/detail/2250/Sejourner~Infos-pratiques~Offices-de-Tourisme/Office-de-Tourisme-des-Sables-d-Olonne-" />
        <LinkCard number="3" title="Vendée Globe" link="https://www.vendeeglobe.org/fr" />
        <LinkCard number="4" title="Puy du Fou" link="https://www.puydufou.com/fr" />
        <LinkCard number="5" title="Pistes cyclable en Vendée" link="https://vendeevelo.vendee.fr/" />
      </div>
    </div>
  );
}

export default Lien;
