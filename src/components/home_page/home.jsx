import React from "react";

import AmisLocataire from "./ami_locataire";
import Info from "./activity";
import HomeInfo from "./home_info";
import MapContainer from "../maps";

import img from "../../assets/img/home_page.jpeg";


function Home() {
  const info = Info.map((item) => {
    return <HomeInfo info={item} key={item.id} />;
  });


  return (
    <div>
      <img src={img} alt="" className="home-img" />
      <AmisLocataire />
      {info}
      <div className="container home-map">
        <MapContainer height="400px" width="100%" />
      </div>
    </div>
  );
}

export default Home;
