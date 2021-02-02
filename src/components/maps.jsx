import React from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function MapContainer({ google, height, width }) {
  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  return (
    <div style={{ position: "relative", height, width }}>
      <Map
        google={google}
        zoom={15}
        style={mapStyles}
        initialCenter={{ lat: 46.489, lng: -1.769 }}
      >
        <Marker position={{ lat: 46.489394388586106, lng: -1.769921479286359 }} />
      </Map>
    </div>
  );
}

const key = process.env.REACT_APP_MAP_API_KEY;
export default GoogleApiWrapper({
  apiKey: key
})(MapContainer);
