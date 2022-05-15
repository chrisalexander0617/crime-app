require('dotenv').config()
const express = require('express')
const path = require("path");
const app = express()

console.log('ENV', process.env)

app.get('/', (req, res)=>{
})

app.get('/crime', (req, res)=>{
    res.send('crime data page')
})

app.listen(8000, () => console.log('server started'))