const createDataLayer = (id, data, color) => {
    return {
        'id': id,
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': data
        },
        'paint': {
            'circle-color': color
        }
    }
}

const createPopUp = (currentFeature) => {

}

export {createDataLayer, createPopUp}