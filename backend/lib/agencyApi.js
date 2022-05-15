
require('dotenv').config()
const axios = require('axios')

const getAgency = (ORI) => {
    const uri = `https://api.usa.gov/crime/fbi/sapi/api/agencies/MI1972500?API_KEY=${process.env.API_KEY}`
    try {const data = axios.get(uri); return data} catch {return false}
}

module.exports = {
    getAgency:getAgency
}