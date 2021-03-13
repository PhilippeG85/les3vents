import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import IMG_7932 from "../../assets/img/IMG_7932.JPG";

function Disponibilite() {
  const history = useHistory();

  useEffect(() => {
    if (history.action === 'PUSH') {
      window.location.reload();
    }
  }, []);

  // const handleRefresh = () => {
  //   if (refresh === 1) {
  //     window.location.reload();
  //   }
  // };
  return (
    <div className="container">
      <div className="dispo-img-div">
        <img className="dispo-img" src={IMG_7932} alt="" />
      </div>
      <div className="appMountPoint-asideBooking" data-hotel_id="33204" data-room_id="60846" />
      <div className="d-flex dispo-tarif-header">
        <h3>Tarifs</h3>
        <p>(charges comprises)</p>
      </div>
      <div className="dispo-tarif">
        <div className="center high-season">
          <h3 className="season-header">Haute Saison</h3>
          <p>195 € par nuit</p>
          <p>Location semaine minimum: 1365 €</p>
        </div>
        <div className="center low-season">
          <h3 className="season-header">Moyenne Saison</h3>
          <p>149 € par nuit</p>
          <p>991 € par semaine</p>
          <br />
        </div>
      </div>
      <div className="d-flex center">
        <div>
          <h3 className="season-header">Basse saison :</h3>
          <p>128 €  par nuit</p>
          <p>851 € par semaine</p>
          <br />
          <p style={{ textDecoration: "underline" }}>Moyenne ou Basse saison :</p>
          <p>Location minimum de 2 nuits</p>
        </div>
      </div>
      <div className="taxe-sejour d-flex">
        <p>Taxe séjour en plus : 1.90 € par adulte et par nuit</p>
      </div>
      <div className="m-5 center dispo-consigne">
        <h1 className="underline">Consignes pour passer un bon séjour:</h1>
        <br />
        <div>
          <p>
            Heure d’arrivée entre 18H et 20H
            (possibilité d’anticipation sur demande à la réservation)
            <br />
            Heure de départ maximum : 10H (possibilité de dépassement sur demande à la réservation)
            <br />
            <br />
            Le logement est non-fumeurs
            <br />
            Les animaux ne sont pas acceptés
            <br />
            Le ménage doit être fait avant le départ. Une caution de 70€ est requise à l’arrivée.
            <br />
            Les planches de surf et vélos ne sont pas autorisées dans l’appartement
            (demander la clé de la cave à cet effet)
            <br />
            Une caution de 140€ est demandée pour la clé de l’appartement (porte blindée)
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Disponibilite;
