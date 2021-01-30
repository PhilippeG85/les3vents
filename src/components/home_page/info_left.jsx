import React from "react";

function InfoLeft({ info }) {
  return (
    <div className="container home-info">
      <div className="allPhotos">
        <img src={info.photo1} alt="" className="home-photo" />
        <img src={info.photo2} alt="" className="home-photo" />
      </div>
      <div className="home-text">
        <h1 className="numero-activity">{info.id}</h1>
        <h3 className="center">{info.title}</h3>
        <p className="center p-12">{info.text}</p>
        <div className="center p-12">
          <a href="google.ca" className="home-button">{info.link}</a>
        </div>
      </div>
    </div>
  );
}


export default InfoLeft;
