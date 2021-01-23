import React from "react";

function InfoLeft({ info }) {
  return (
    <div className="container home-info">
      <div className="allPhotos">
        <img src={info.photo1} alt="" className="home-photo" />
        <img src={info.photo2} alt="" className="home-photo" />
      </div>
      <div className="home-text">
        <h1>{info.id}</h1>
        <h3 className="center">{info.title}</h3>
        <p>{info.text}</p>
        <a href="#">{info.link}</a>
      </div>
    </div>
  );
}


export default InfoLeft;
