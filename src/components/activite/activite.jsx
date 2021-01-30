import React from "react";

import ActiviteCard from "./activite_card";
import IMG_7932 from "../../assets/img/IMG_7932.JPG";
import DJI_0007 from "../../assets/img/DJI_0007.JPG";
import IMG_7972 from "../../assets/img/activite/IMG_7972.JPG";
import IMG_8112 from "../../assets/img/activite/IMG_8112.JPG";
import puyDuFou from "../../assets/img/activite/IMG-20200709-WA0018.jpg";
import IMG_7953 from "../../assets/img/activite/IMG_7953.JPG";

function Activite() {
  const textSables = "Au pied du Trois mâts, la plage des Sables vous fera passer un séjour relaxant bercé au rythme de l'eau.";

  const textSalants = "Site protégé de 1 300 hectares, les marais offrent des paysages extraordinaires. Les nombreux km de pistes en font un endroit parfait pour une sortie en vélo. Vous pourrez vous arrêtez pour y découvrir la récolte du sel ou bien y faire une promenade en canoë.";

  const textIles = "Nichée en plein cœur du centre-ville des Sables d’Olonne, à quelques pas de la mer, au détour d’une ruelle étroite, baladez-vous dans un quartier un peu atypique et insolite où vous pourrez admirer de magnifiques fresques réalisées à partir de coquillages.";

  const textVeillon = "A Talmont Saint Hilaire, laissez-vous surprendre par la beauté du Veillon ! Façonnée par l'estuaire du Payré, sculptée par le vent, la plage du Veillon prend des allures de lagons par endroits, et ne vous laissera pas indiffèrents.";

  const textFou = "Le puy du fou reconnu mondialement est un incontournable pour toute personne visitant la Vendée. Des spectacles en tout genre illustrant des récits historiques tel que des batailles vikings, la table ronde, les jeux romains sans oublier la cinéscénie qui rassemble chaque soir environ 20 000 spectateurs.";

  const textMusee = "Vous avez aussi la possibilité de visiter le musée du coquillage qui vous émerveillera par sa collection de coquillages en tout genre. Les sables d'Olonne possède aussi un blockhaus de la guerre 39-45 transformé en musée. Sans oublier le musée de l'abbaye sainte Croix réputé pour ses expositions d'art contemporain.";

  return (
    <div>
      <div className="activite-info center">
        <h1>Activite</h1>
        <br />
        <p>
          Les Sables d Olonne regorge d activités en tous genres,
          principalement connue pour sa magnifique plage qui attire chaque année
          bon nombre de vacanciers
          et la course du Vendée Globe. On peut s y baigner, faire du surf,
          prendre des cours de voile… Mais les terres vendéennes n ont pas à rougir.
          Elles contiennent, elles aussi leur lot d attractions. Promenade à vélo dans les marais,
          visite du centre ville des Sables d Olonne, découverte du Veillon,
          sans oublier le mythique Puy du Fou.
        </p>
        <br />
        <a href="https://www.vendee-tourisme.com/" className="home-button">Vendée Tourisme</a>
      </div>
      <div className="activite-cards">
        <img className="activite-img" src={IMG_7932} alt="" />
        <ActiviteCard number="01" title="Plage des Sables" text={textSables} />
        <img className="activite-img" src={DJI_0007} alt="" />
        <ActiviteCard number="02" title="Marais Salants" text={textSalants} />
        <ActiviteCard number="03" title="Île Penotte" text={textIles} />
        <img className="activite-img" src={IMG_7972} alt="" />
        <ActiviteCard number="04" title="Plage du Veillon" text={textVeillon} />
        <img className="activite-img" src={IMG_8112} alt="" />
        <img className="activite-img" src={puyDuFou} alt="" />
        <ActiviteCard number="05" title="Le Puy du Fou" text={textFou} />
        <img className="activite-img" src={IMG_7953} alt="" />
        <ActiviteCard number="06" title="Musee aux Sables" text={textMusee} />
      </div>
    </div>
  );
}

export default Activite;
