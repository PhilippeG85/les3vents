/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;

export default function MapBox() {
    const mapContainerEmp = useRef(null);

    const popupText = ("<h4>Les Trois Mats</h4><br /><p>22 Promenade Georges Godet<br />85100 Les Sables d&apos;Olonne</p><p>Tel: 06-50-72-86-32</p><p>Email: <a href='mailto:elisabeth.gonse@gmail.com'>elisabeth.gonse@gmail.com</a></p>");


    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerEmp.current,
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
            <div ref={mapContainerEmp} className="map-container-emplacement" />
        </>
    );
}
