import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Carousel() {
  const [count] = useState(1);

  return (
    <div className="carousel">
      <FontAwesomeIcon icon={faChevronRight} className="chevron-right" onClick={() => console.log('click right')} />
      <img id="1" src="../../../assets/img/IMG_7854.JPG" alt="" className="carousel-img active" />
      <img id="2" src="../../../assets/img/IMG_7914.JPG" alt="" className="carousel-img" />
      <img id="3" src="../../../assets/img/IMG_7931.JPG" alt="" className="carousel-img" />
      <FontAwesomeIcon icon={faChevronLeft} className="chevron-left" onClick={() => console.log('click left')} />
    </div>
  );
}

export default Carousel;
