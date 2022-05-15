require('dotenv').config()
const express = require('express')
const path = require("path");
const app = express()
const axios = require('axios')

const agencyAPI = require('./lib/agencyApi')

app.get('/', async (req, res) => {
    res.send('Home')
})

app.get('/agencies/agency', async (req, res) => {
    //req.body.param needed to get the form data from the front to feed to API
    const data = await agencyAPI.getAgency(process.env.DETRTOIT_POLICE_ORI)
    if(data) res.send(data.data.agency_name)
})

app.listen(process.env.PORT, () => console.log(`server started on port ${process.env.PORT}`))