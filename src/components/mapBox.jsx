/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapboxGl, { Marker, Popup } from "react-mapbox-gl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';


export default function MapBox() {
    const Map = ReactMapboxGl({
        accessToken: process.env.REACT_APP_MAPBOX
    });

    const handleClick = () => {
        const popup = document.querySelector('.mapboxgl-popup');
        if (popup.style.display === 'none') {
            popup.style.display = 'flex';
        } else {
            popup.style.display = 'none';
        }
    };

    const handleIconClick = () => {
        const popup = document.querySelector('.mapboxgl-popup');
        popup.style.display = 'none';
    };

    return (
        <>
            <Map
                // eslint-disable-next-line react/style-prop-object
                style="mapbox://styles/mapbox/streets-v11"
                containerStyle={{
                    height: "450px",
                    width: "100%"
                }}
                center={[-1.769921479286359, 46.489394388586106]}
                zoom={[13]}
            >
                <Popup
                    style={{ borderRadius: "8px" }}
                    coordinates={[-1.769921479286359, 46.489394388586106]}
                    offset={{
                        'bottom-left': [12, -38], bottom: [0, -38], 'bottom-right': [-12, -38]
                    }}
                >
                    <FontAwesomeIcon icon={faTimesCircle} className="icon-times-circle" onClick={handleIconClick} />
                    <h6>Les Trois Mats</h6>
                    <br />
                    <p>
                        22 Promenade Georges Godet
                        <br />
                        85100 Les Sables d&apos;Olonne
                        <br />
                        Tel: 06-50-72-86-32
                        <br />
                        Email:
                        <span> </span>
                        <a href="mailto:elisabeth.gonse@gmail.com">elisabeth.gonse@gmail.com</a>
                    </p>
                </Popup>
                <Marker
                    coordinates={[-1.769921479286359, 46.489394388586106]}
                    anchor="bottom"
                >
                    <div
                        className="marker"
                        onClick={handleClick}
                        aria-hidden="true"
                    >
                        <span />
                    </div>
                </Marker>
            </Map>
        </>
    );
}
