var path = require('path')
const dotenv = require('dotenv');
const express = require('express')
const aylien = require('aylien_textapi')

const app = express()

dotenv.config();
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

// set aylien API credentias
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
