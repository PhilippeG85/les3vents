/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;
const style = process.env.REACT_APP_STYLE_MAP;

export default function MapBox2() {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style,
            center: [-1.769921479286359, 46.489394388586106],
            zoom: 13
        });
    });
    return (
        <>
            <div ref={mapContainer} className="map-container" />
        </>
    );
}
