const dotenv = require('dotenv');
const aylien = require('aylien_textapi')
dotenv.config();

//Following middleware conventions
function classifyText(req, res, next) {
    // set aylien API credentials
    var textapi = new aylien({
        //Set sensitive credentials in a local .env file
        application_id: process.env.API_ID,
        application_key: process.env.API_KEY
    });
    //validate input as a non-empty string
    if (req.body.text && typeof req.body.text === 'string') {
        //use aylien classify method, if there is no error
        textapi.classify({
          text: req.body.text
        }, function(error, response) {
            if (error === null) {
                //log the entire response to see what's there
                console.log(response);
                //log out the individual categories, as recommended by the docs
                response['categories'].forEach(function(c) {
                    console.log(c);
                });
                //actually send data
                res.send(response)
            } else {
                console.log(error)
            }
        });
    }
}

exports.classifyText = classifyText
