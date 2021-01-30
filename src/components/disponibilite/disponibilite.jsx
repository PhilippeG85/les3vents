import React from "react";

import IMG_7932 from "../../assets/img/IMG_7932.JPG";

function Disponibilite() {
  return (
    <div className="container">
      <div className="m-5 d-flex">
        <img className="dispo-img" src={IMG_7932} alt="" />
      </div>
      <div className="d-flex dispo-tarif-header">
        <h3>Tarifs</h3>
        <p>(charges comprises)</p>
      </div>
      <div className="dispo-tarif">
        <div className="center high-season">
          <h3 className="season-header">Pleine Saison</h3>
          <p>195 € par nuit</p>
          <p>Location semaine minimum: 1365 €</p>
        </div>
        <div className="center low-season">
          <h3 className="season-header">Haute Saison</h3>
          <p>
            <div className="underline">Basse saison :</div>
            149 € par nuit
            <br />
            991 € par semaine
            <br />
            <br />
            <div className="underline">Hors saison :</div>
            128 €  par nuit
            <br />
            851 € par semaine
            <br />
            <br />
            Basse ou Hors saison :
            <br />
            Location minimum de 2 nuits
          </p>
        </div>
      </div>
      <div className="d-flex">
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
