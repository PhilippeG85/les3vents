import React from "react";

import AmisLocataire from "./ami_locataire";
import Info from "./activity";
import HomeInfo from "./home_info";
// import MapContainer from "../maps";
// import MapBox from '../mapBox';
import MapBox2 from '../mapBox2';

import img from "../../assets/img/home_page.jpeg";


function Home({ animation }) {
  const info = Info.map((item) => {
    return <HomeInfo info={item} key={item.id} />;
  });
  const animationHtml = (
    <div className="onload">
      <h1>Bienvenue aux trois mâts</h1>
      <h3>Donnez-nous un instant pendant que nous fabriquons le site pour vous</h3>
      <div className="overflow-load">
        <div className="loading-bar" />
      </div>
    </div>
  );
  return (
    <div>
      { animation && animationHtml}
      <img src={img} alt="" className="home-img" />
      <AmisLocataire />
      {info}
      <div className="container home-map">
        {/* <MapBox /> */}
        <MapBox2 />
        {/* <MapContainer height="400px" width="100%" /> */}
      </div>
    </div>
  );
}

export default Home;
