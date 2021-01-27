import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Carousel({ img, number, name }) {
  const [activeImg, setActiveImg] = useState(1);

  const mountImg = img.map((imgUrl, index) => {
    return <img key={imgUrl} id={`${name}-${index + 1}`} src={imgUrl} alt="" className="carousel-img" />;
  });

  function increment() {
    const removeActiveClass = document.getElementById(`${name}-${activeImg}`);
    removeActiveClass.classList.remove('active');
    if (activeImg === number) {
      setActiveImg(1);
    } else {
      setActiveImg(prev => prev + 1);
    }
    return activeImg;
  }

  function decrement() {
    const removeActiveClass = document.getElementById(`${name}-${activeImg}`);
    removeActiveClass.classList.remove('active');
    if (activeImg === 1) {
      setActiveImg(number);
    } else {
      setActiveImg(prev => prev - 1);
    }
    return activeImg;
  }

  useEffect(() => {
    const setActiveClass = document.getElementById(`${name}-${activeImg}`);
    setActiveClass.classList.add('active');
  });

  return (
    <div className="carousel">
      <FontAwesomeIcon icon={faChevronRight} className="chevron-right" onClick={() => increment()} />
      {mountImg}
      <FontAwesomeIcon icon={faChevronLeft} className="chevron-left" onClick={() => decrement()} />
    </div>
  );
}

export default Carousel;
