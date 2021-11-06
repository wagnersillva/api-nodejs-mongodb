const app  = require('./serverConfig')
const dbConnection = require("./database/databaseConfig")

dbConnection.then ((e) => {
    app.listen(app.get('port'), () => {
        console.table({
            db_connected: true,
            server_running: true,
            local: `http://localhost:${app.get('port')}`
        })
    })
}).catch(err => {
    console.table({
        db_connected: false,
        server_running: false,
        name: err.name,
        error: err.codeName,
        code: err.code
    })
})