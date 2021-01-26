import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Carousel() {
  const [activeImg, setActiveImg] = useState(1);

  function increment() {
    const removeActiveClass = document.getElementById(activeImg);
    removeActiveClass.classList.remove('active');
    if (activeImg === 3) {
      setActiveImg(1);
    } else {
      setActiveImg(prev => prev + 1);
    }
    return activeImg;
  }

  function decrement() {
    const removeActiveClass = document.getElementById(activeImg);
    removeActiveClass.classList.remove('active');
    if (activeImg === 1) {
      setActiveImg(3);
    } else {
      setActiveImg(prev => prev - 1);
    }
    return activeImg;
  }

  useEffect(() => {
    const setActiveClass = document.getElementById(activeImg);
    setActiveClass.classList.add('active');
  });

  return (
    <div className="carousel">
      <FontAwesomeIcon icon={faChevronRight} className="chevron-right" onClick={() => increment()} />
      <img id="1" src="../../../assets/img/IMG_7854.JPG" alt="" className="carousel-img active" />
      <img id="2" src="../../../assets/img/IMG_7914.JPG" alt="" className="carousel-img" />
      <img id="3" src="../../../assets/img/IMG_7931.JPG" alt="" className="carousel-img" />
      <FontAwesomeIcon icon={faChevronLeft} className="chevron-left" onClick={() => decrement()} />
    </div>
  );
}

export default Carousel;
