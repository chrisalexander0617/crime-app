require('dotenv').config()
const express = require('express')
const path = require("path");
const app = express()
const axios = require('axios')
const cors = require('cors')
const agencyAPI = require('./lib/agencyApi')

app.use(cors())

app.get('/', (req, res) => {
    console.log('someones here')
    res.sendStatus(200)
})

app.get('/server-test', (req, res) => {
    console.log('someones here on server-test')
    const data = {tets:'te'}
    res.send(data)
})

app.get('/agencies/agency', async (req, res) => {
    //req.body.param needed to get the form data from the front to feed to API
    const data = await agencyAPI.getAgency(process.env.DETRTOIT_POLICE_ORI)
    if(data) res.send(data.data.agency_name)
})

app.listen(process.env.PORT, () => console.log(`server started on port ${process.env.PORT}`))