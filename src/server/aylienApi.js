const dotenv = require('dotenv');
const aylien = require('aylien_textapi')
const async = require('async')
dotenv.config();

//Following middleware conventions for req, res, next

//Validate the input as a URL before passing it on
function validateUrl(req, res, next) {
    //validate input as a non-empty string
    if (req.body.text && typeof req.body.text === 'string') {
        //check for initial http:// or https://
        if (req.body.text.match(/^https:\/\/.*$/) ||
            req.body.text.match(/^http:\/\/.*$/)) {
                next();
            } else {
                alert('Please enter a valid URL(beginning with "http:\/\/" or ' +
                    '"https:\/\/")');
            }
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
            console.log(response);
            extractedText = response.article
            //use aylien classify method, if there is no error
            textapi.classifyByTaxonomy({
              text: extractedText,
              taxonomy: 'iab-qag'
            }, function(error, response) {
                if (error === null) {
                    //log the entire response to see what's there
                    console.log(response);
                    //log out the individual categories, recommended by the docs
                    response['categories'].forEach(function(c) {
                        console.log(c);
                    });
                    combinedResponse.push(response);
                    textapi.sentiment({
                        text: extractedText,
                        mode: 'article'
                    }, function(error, response) {
                        if (error === null) {
                            console.log(response);
                            //res.write(JSON.stringify(response))
                            combinedResponse.push(response);
                            res.send(JSON.stringify(combinedResponse));
                        } else {
                            console.log(error)
                        }
                    });
                } else {
                    console.log(error)
                }
            });
        } else {
            console.log(error)
        }
    });
}

exports.validateUrl = validateUrl
exports.classifyText = classifyText
