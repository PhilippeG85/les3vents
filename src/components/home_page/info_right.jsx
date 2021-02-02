import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { HomeContext } from "../../home_context";

function InfoRight({ info }) {
  const { toggleHome } = useContext(HomeContext);
  return (
    <div className="container home-info">
      <div className="home-text">
        <h1 className="numero-activity">{info.id}</h1>
        <h3 className="center">{info.title}</h3>
        <p className="p-12">{info.text}</p>
        <div className="center p-12">
          <Link to={info.link_url} className="home-button" onClick={() => toggleHome(false)}>{info.link}</Link>
        </div>
      </div>
      <div className="allPhotos">
        <img src={info.photo1} alt="" className="home-photo" />
        <img src={info.photo2} alt="" className="home-photo" />
      </div>
    </div>
  );
}

export default InfoRight;
