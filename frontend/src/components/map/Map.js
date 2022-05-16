import React, {useEffect, useState, useRef} from "react"
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0b3BoZXJjbGVtbW9uczIwMjAiLCJhIjoiY2wzN3JtcHowMHNxczNjb3p6cWUzMXVoMSJ9.UnAjwsNqEL0P53xeRrbjUw'

export const Map = () => {
    const map = useRef(null);
    const mapContainer = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if(map.current) return 
       
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/christopherclemmons2020/cl37v6xlr000u14mlzlfbuc80',
            center: [lng, lat],
            zoom: zoom
        });

        const marker = new mapboxgl.Marker(<div>marker</div>)
        .setLngLat([30.5, 50.5])
        .addTo(map.current);
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