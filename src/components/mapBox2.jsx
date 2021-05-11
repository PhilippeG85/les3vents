/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;

export default function MapBox2() {
    const mapContainer = useRef(null);

    const popupText = (`<h4><a target='_blank' href='https://www.google.com/maps/place/Appartement+Les+Trois+Mats/@46.4877614,-1.7729705,16.19z/data=!4m8!1m2!2m1!1sappartement+les+trois+mats+les+sables!3m4!1s0x4804674fab1351dd:0xebe554e0a646e82!8m2!3d46.4894551!4d-1.769861'>Les Trois Mats</a></h4><br /><p>22 Promenade Georges Godet<br />85100 Les Sables d&apos;Olonne</p><p>Tel: 06-50-72-86-32</p><p>Email: <a href='mailto:elisabeth.gonse@gmail.com'>elisabeth.gonse@gmail.com</a></p>`);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-1.769921479286359, 46.489394388586106],
            zoom: 13
        });
        const popup = new mapboxgl.Popup()
            .setHTML(popupText);
        // eslint-disable-next-line no-unused-vars
        const marker = new mapboxgl.Marker()
            .setLngLat([-1.769921479286359, 46.489394388586106])
            .setPopup(popup)
            .addTo(map);
        return () => map.remove();
    });
    return (
        <>
            <div ref={mapContainer} className="map-container" />
        </>
    );
}
