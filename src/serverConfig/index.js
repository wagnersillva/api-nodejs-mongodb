const express = require("express");
const cors  = require('cors')
const router = require('../routes/')
const app = express();
const useConfigs = [
    cors(),
    express.urlencoded({extended: true}),
    express.json(),
    router
]
const useSet = [
    {key: 'port' , value: process.env.PORT || 3030 || 3050 }
]

useConfigs.map( config => {
    app.use( config )
})

useSet.map( Objetc => {
    app.set( Objetc.key, Objetc.value )
})

module.exports = app;