const { app, useConfigs, useSet } = require('./utils')

useConfigs.map( config => {
    app.use( config )
})

useSet.map( Objetc => {
    app.set( Objetc.key, Objetc.value )
})

module.exports = app;