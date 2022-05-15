
require('dotenv').config()
const axios = require('axios')

//https://api.usa.gov/crime/fbi/sapi/api/agencies/byStateAbbr/MI?API_KEY=NbUnDtUTfDjilbXWDFlcaitwa2t81Flp6F2OcHjy
// Docs: https://crime-data-explorer.app.cloud.gov/pages/docApi


/**
Allows you to find police agencies by State, or ORI number listing basic details
 **/

const getAgencyByORI = ori => {
    const uri = `https://api.usa.gov/crime/fbi/sapi/api/agencies/MI1972500?API_KEY=${process.env.API_KEY}`
    try {const data = axios.get(uri); return data} catch {return false}
}

const getAgenciesByState = state => {
    const uri = `https://api.usa.gov/crime/fbi/sapi/api/agencies/byStateAbbr/${state}?API_KEY=${process.env.API_KEY}`
    try {const data = axios.get(uri); return data} catch {return false}
}

module.exports = {
    getAgencyByORI:getAgencyByORI,
    getAgenciesByState:getAgenciesByState
}