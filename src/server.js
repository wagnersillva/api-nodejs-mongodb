const app  = require('./serverConfig')

app.listen(app.get('port'), () => {
    console.log(`Server running at http://localhost:${app.get('port')}`);
})