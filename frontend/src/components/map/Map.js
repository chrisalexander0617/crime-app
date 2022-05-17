import React, {useEffect, useState, useRef} from "react";
import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0b3BoZXJjbGVtbW9uczIwMjAiLCJhIjoiY2wzN3JtcHowMHNxczNjb3p6cWUzMXVoMSJ9.UnAjwsNqEL0P53xeRrbjUw'

export const Map = () => {
    const map = useRef(null);
    const mapContainer = useRef(null);
    const [lng, setLng] = useState(-83.04);
    const [lat, setLat] = useState(42.33);
    const [zoom, setZoom] = useState(6);

    const mapImageOne = 'icons/fraud.png'
    const mapImageTwo = 'https://cdn-icons.flaticon.com/png/512/4628/premium/4628408.png?token=exp=1652832239~hmac=882d59a09b35a45e2840ea3a9b03b83d'

    useEffect(() => {
        if(map.current) return 
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/christopherclemmons2020/cl37v6xlr000u14mlzlfbuc80',
            center: [lng, lat],
            zoom: zoom
        });


        map.current.on('load', () => {
            map.current.loadImage(
                mapImageOne,
                (error, image) => {
                    if (error) throw error;
                    map.current.addImage('map-image', image);
                }
            );
            map.current.addSource('point', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Point',
                            'properties': {
                                'message': 'Foo',
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [lng, lat]
                            }
                        },
                        {
                            'type': 'Point',
                            'properties': {
                                'message': 'Foo',
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [31, 25]
                            }
                        }
                    ]
                }
            });
            map.current.addLayer({
                'id': 'points',
                'type': 'symbol',
                'source': 'point',
                'layout': {
                    'icon-image': 'map-image',
                    'icon-size': 0.05
                }
            });   
            map.addControl(
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
            map.current.addControl(new mapboxgl.NavigationControl());
        })
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