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

    useEffect(() => {
        if(map.current) return 
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/christopherclemmons2020/cl37v6xlr000u14mlzlfbuc80',
            center: [lng, lat],
            zoom: zoom
        });
        map.current.on('load', () => {
            const width = 64; // The image will be 64 pixels square
            const bytesPerPixel = 4; // Each pixel is represented by 4 bytes: red, green, blue, and alpha.
            const data = new Uint8Array(width * width * bytesPerPixel);

            for (let x = 0; x < width; x++) {
                for (let y = 0; y < width; y++) {
                    const offset = (y * width + x) * bytesPerPixel;
                    data[offset + 0] = (y / width) * 255; // red
                    data[offset + 1] = (x / width) * 255; // green
                    data[offset + 2] = 128; // blue
                    data[offset + 3] = 255; // alpha
                }
            }
            

            map.current.loadImage(
                'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png', 
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
                            'type': 'Feature',
                            'properties': {
                                'message': 'Foo',
                                'iconSize': [60,60]
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [lng, lat]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'message': 'Foo',
                                'iconSize': [60,60]
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [0, 0]
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
                    'icon-image': 'map-image'
                }
            });   
        })
    })
    
    return (
        <>
            <div 
                style={{height:'100vh'}} 
                ref={mapContainer} 
                className="map-container"
            ></div>
        </>
    ) 
}