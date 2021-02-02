import React from "react";

import emplacement from "../../assets/img/emplacement/emplacement.jpg";
import MapContainer from "../maps";

function Emplacement() {
  return (
    <div className="container">
      <div className="d-flex m-5">
        <img className="emplacement-img" src={emplacement} alt="" />
        <div className="emplacement-content center">
          <div>
            <h1>Emplacement</h1>
            <p>
              Situé sur le bord de mer au dernière étage (5ème étage),
              l appartement est à 1.7km de la gare, 20 minutes à pied ou 10 minutes en voiture.
              De nombreux commerces sont ensuite accessibles à pied.
              D une crêperie artisanale au rez de chaussée au manège, école de voile
              et thalassothérapie sans oublier les commerces de nécessité:
              superette, boulangerie- pâtisserie, boucherie- charcuterie- traiteur,
              poissonnerie, fromagerie, pharmacie, coiffeur et tabac-presse.
            </p>
          </div>
          <div className="map-emplacement">
            <MapContainer height="350px" width="100%" />
          </div>
        </div>
      </div>
      <div className="center">
        <h1>Elisabeth Gonse</h1>
        <br />
        <h2>Contactez-nous</h2>
        <br />
        <p>
          22 Promenade Georges Godet
          <br />
          Résidence Le Surcouf, 5ème étage
          <br />
          85100 LES SABLES D OLONNE
        </p>
      </div>
    </div>
  );
}

export default Emplacement;
