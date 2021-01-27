import React from "react";
import Carousel from "./carousel";
import Image from "./carouselImage";

function Description() {
  const {
    bathroom,
    bedroom,
    kitchen,
    salon
  } = Image;
  return (
    <>
      <h1>Hello from Description</h1>
      <Carousel img={salon.url} number={salon.number} name={salon.name} />
      <Carousel img={kitchen.url} number={kitchen.number} name={kitchen.name} />
      <Carousel img={bedroom.url} number={bedroom.number} name={bedroom.name} />
      <Carousel img={bathroom.url} number={bathroom.number} name={bathroom.name} />
    </>
  );
}

export default Description;
