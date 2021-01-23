import React from "react";

import InfoRight from "./info_right";
import InfoLeft from "./info_left";

function HomeInfo({ info }) {
  const infoId = info.id;

  return (
    <>
      {infoId % 2 === 0 ? <InfoLeft info={info} /> : <InfoRight info={info} /> }
    </>
  );
}

export default HomeInfo;
