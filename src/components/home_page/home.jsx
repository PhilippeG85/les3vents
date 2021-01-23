import React from "react";

import AmisLocataire from "./ami_locataire";
import Info from "./activity";
import HomeInfo from "./home_info";

function Home() {
  const info = Info.map((item) => {
    return <HomeInfo info={item} key={item.id} />;
  });

  return (
    <>
      <AmisLocataire />
      {info}
    </>
  );
}

export default Home;
