const dotenv = require('dotenv');
const aylien = require('aylien_textapi')

dotenv.config();

//Following middleware conventions for req, res, next

//Validate the input as a URL before passing it on
function validateUrl(req, res, next) {
    console.log("checking for text")
    //validate input as a non-empty string
    if (req.body.text && typeof req.body.text === 'string') {
        //check for initial http:// or https://
        if (req.body.text.match(/^https:\/\/.*$/) ||
            req.body.text.match(/^http:\/\/.*$/)) {
                next();
        } else {
            res.status(400).send('Invalid URL')
        }
    } else {
        res.status(400).send('Invalid URL')
    }
}

function classifyText(req, res, next) {
    // Save extracted text in variable to minimize API calls
    let extractedText = '';
    let combinedResponse = [];
    // set aylien API credentials
    var textapi = new aylien({
        //Set sensitive credentials in a local .env file
        application_id: process.env.API_ID,
        application_key: process.env.API_KEY
    });
    //extract article text using aylien extract method
    textapi.extract({
        url: req.body.text
    }, function(error, response) {
        if (error === null) {
            extractedText = response.article
            //use aylien classify method, if there is no error
            textapi.classifyByTaxonomy({
              text: extractedText,
              taxonomy: 'iab-qag'
            }, function(error, response) {
                if (error === null) {
                    combinedResponse.push(response);
                    textapi.sentiment({
                        text: extractedText,
                        mode: 'article'
                    }, function(error, response) {
                        if (error === null) {;
                            combinedResponse.push(response);
                            return next(res.status(200).send(JSON.stringify(combinedResponse)));
                        } else {
                            console.log(error)
                            res.status(400).send('Unable to load sentiment')
                        }
                    });
                } else {
                    console.log(error)
                    res.status(400).send('Unable to load taxonomy')
                }
            });
        } else {
            console.log(error)
            res.status(400).send('Unable to load extracted article')
        }
    });
}

exports.validateUrl = validateUrl
exports.classifyText = classifyText
