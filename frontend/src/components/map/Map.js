import React, { useEffect } from "react"
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"


export const Map = () => {
    useEffect(() => {
        console.log('Map.js')
        console.log('mapboxgl', mapboxgl)
    })
    return (
        <>
        <div>test</div>
        </>
    )
}