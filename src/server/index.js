var path = require('path');
const express = require('express');
const aylienHandler = require('./aylienApi');
const regeneratorRuntime = require("regenerator-runtime"); //To address errors
const app = express();
const cors = require('cors');
//Parse the body of post request:
//https://stackoverflow.com/questions/44802005/no-body-in-post-request
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Allow CORS - This may not be necessary in production
app.use(cors())

app.use(express.static('dist'))

//useful for development
//console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
const server = app.listen(8080, function () {
    console.log('Listening on port 8080!')
})

app.post('/result', aylienHandler.validateUrl, aylienHandler.classifyText)

module.exports = server
