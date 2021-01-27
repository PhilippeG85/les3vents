import React from "react";

import Carousel from "./carousel";
import Image from "./carouselImage";
import InfoDescription from "./infoDescription";
import DescriptionCard from "./descriptionCard";

function Description() {
  const {
    bathroom,
    bedroom,
    kitchen,
    salon
  } = Image;

  const {
    salonInfo,
    kitchenInfo,
    bathroomInfo,
    bedroomInfo
  } = InfoDescription;


  return (
    <>
      <div className="container description-card">
        <Carousel img={salon.url} number={salon.number} name={salon.name} />
        <DescriptionCard
          title={salonInfo.title}
          description={salonInfo.description}
          liste={salonInfo.liste}
        />
      </div>
      <div className="container description-card">
        <DescriptionCard
          title={kitchenInfo.title}
          description={kitchenInfo.description}
          liste={kitchenInfo.liste}
        />
        <Carousel img={kitchen.url} number={kitchen.number} name={kitchen.name} />
      </div>
      <div className="container description-card">
        <Carousel img={bedroom.url} number={bedroom.number} name={bedroom.name} />
        <DescriptionCard
          title={bedroomInfo.title}
          description={bedroomInfo.description}
          liste={bedroomInfo.liste}
        />
      </div>
      <div className="container description-card">
        <DescriptionCard
          title={bathroomInfo.title}
          liste={bathroomInfo.liste}
        />
        <Carousel img={bathroom.url} number={bathroom.number} name={bathroom.name} />
      </div>
    </>
  );
}

export default Description;
