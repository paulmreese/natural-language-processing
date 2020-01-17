const supertest = require('supertest');
const aylienHandler = require('../src/server/aylienApi');
const app = require('../src/server/index')

const request = supertest(app)

/* This file tests the server paths as well as the functions they rely on

    Special thanks to this article for helping me understand endpoint testing
    using jest and supertest in combination!
    https://zellwk.com/blog/endpoint-testing/

*/

//Start the express server
app.listen(8080)

describe('Async functionality', () => {
    it('should not pass this test', () => {
        expect(1).toBe(2)
    }),
    it('should POST to /results', async done => {
        const response = await request.post('/result')
            .send({ method: 'POST'})
            .send({ mode: 'cors'})
            .send({ headers : { 'Content-Type': 'application/json',}})
            .send({ body: 'http:\/\/www.google.com'})
            .end(function (err, res) {
                if (err) return done(err);
            });
        expect(response.status).toBe(200);
    })
})

describe('Aylien API', () => {
    describe('validateURL function', () => {
        test('it should not accept blank input', () => {
            const blankInput = ''
            const expectedResponse = 404
            /*const req = {
                body : {
                    text : blankInput
                }
            }
            const res = {
                status : function(num) {
                    return num
                }
            }*/
            expect(aylienHandler.validateUrl()).toEqual(expectedResponse)
        }),

        test('it should reject strings that don\'t begin with "http"', () => {
            const nonHttpInput = 'ab'
            const expectedResponse = ''
            const req = {
                body : {
                    text : nonHttpInput
                }
            }
        })
    }),
    describe('classifyText function', () => {
        test('it should extract an article from a given URL', () => {
            //test
            const url = 'https://millercenter.org/the-presidency/' +
                        'presidential-speeches/january-18-2001-farewell-address'
            const output = ''

            console.log(aylienHandler.validateUrl())
            //expect(aylienHandler.validateUrl(url), aylienHandler.classifyText()).toEqual(output)
        })
    })
});
