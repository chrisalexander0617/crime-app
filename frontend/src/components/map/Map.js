import React, {useEffect, useState, useRef} from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import {fraud, murder} from '../../data/crimes'
import {createDataLayer} from './functions'
mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0b3BoZXJjbGVtbW9uczIwMjAiLCJhIjoiY2wzN3JtcHowMHNxczNjb3p6cWUzMXVoMSJ9.UnAjwsNqEL0P53xeRrbjUw'

export const Map = () => {
    const map = useRef(null);
    const mapContainer = useRef(null);
    const [lng, setLng] = useState(-83.04);
    const [lat, setLat] = useState(42.33);
    const [zoom, setZoom] = useState(6);
    
    //https://www.lostcreekdesigns.co/writing/how-to-create-a-map-popup-component-using-mapbox-and-react/
    const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }))
    const mapImageOne = 'icons/fraud.png'

    useEffect(() => {
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/christopherclemmons2020/cl37v6xlr000u14mlzlfbuc80',
            center: [lng, lat],
            zoom: zoom
        });
        map.current.addControl(new mapboxgl.NavigationControl());
        map.current.on('load', () => {
            map.current.loadImage(
                mapImageOne,
                (error, image) => {
                    if (error) throw error;
                    map.current.addImage('map-image', image);
                }
            );
            map.current.addLayer(createDataLayer('murder', murder, '#fbb03b')); 
            map.current.addLayer(createDataLayer('fraud', fraud, '#e55e5e'));
            
            map.current.addControl(
                new mapboxgl.GeolocateControl({
                    positionOptions: {
                        enableHighAccuracy: true
                    },
                    // When active the map will receive updates to the device's location as it changes.
                    trackUserLocation: true,
                    // Draw an arrow next to the location dot to indicate which direction the device is heading.
                    showUserHeading: true
                })
            );
        })

        //cleanup function
        return () => map.current.remove()
    })

    return (
        <>
            <div 
                style={{height:'100vh', width:'70vw' }} 
                ref={mapContainer} 
                className="map-container"
            ></div>
        </>
    ) 
}