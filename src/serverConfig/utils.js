const express = require("express");
const cors = require("cors");
const router = require('../routes/')

const useConfigs = [
    cors(),
    express.urlencoded({extended: true}),
    express.json(),
    router
]

const useSet = [
    {key: 'port' , value: process.env.PORT || 3030 || 3050 }
]



const app = express()

module.exports = { app, useConfigs, useSet };