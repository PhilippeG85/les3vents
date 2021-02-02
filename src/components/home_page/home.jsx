import React from "react";

import AmisLocataire from "./ami_locataire";
import Info from "./activity";
import HomeInfo from "./home_info";
import MapContainer from "../map";


function Home() {
  const info = Info.map((item) => {
    return <HomeInfo info={item} key={item.id} />;
  });


  return (
    <div>
      <AmisLocataire />
      {info}
      <div className="container home-map">
        <MapContainer height="400px" width="100%" />
      </div>
    </div>
  );
}

export default Home;
