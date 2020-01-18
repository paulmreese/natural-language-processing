var aylienHandler = require('../src/server/aylienApi');
const app = require('../src/server/index')
const httpMocks = require('node-mocks-http')

describe('Aylien API', () => {
    describe('validateURL function', () => {
        test('it should be defined', () => {
          expect(aylienHandler.validateUrl).toBeDefined()
        })
        test('it should be a function', () => {
          expect(typeof aylienHandler.validateUrl).toBe('function')
        })
        test('it should not accept blank input', () => {
            const blankInput = ''
            const expectedResponseCode = 400
            const req = httpMocks.createRequest({
                  method: 'POST',
                  mode: 'cors',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: blankInput
            })
            const res = httpMocks.createResponse()
            const next = jest.fn()
            aylienHandler.validateUrl(req, res, next)
            expect(res.statusCode).toBe(expectedResponseCode)
        }),

        test('it should reject strings that don\'t begin with "http"', () => {
            const nonHttpInput = 'ab'
            const expectedResponseCode = 400
            const req = httpMocks.createRequest({
                  method: 'POST',
                  mode: 'cors',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: nonHttpInput
            })
            const res = httpMocks.createResponse()
            const next = jest.fn()
            aylienHandler.validateUrl(req, res, next)
            expect(res.statusCode).toEqual(expectedResponseCode)
        })
    }),
    describe('classifyText function', () => {
        test('it should be defined', () => {
          expect(aylienHandler.classifyText).toBeDefined()
        })
        test('it should be a function', () => {
          expect(typeof aylienHandler.classifyText).toBe('function')
        })
        /* This test requires the creation of a mock aylien API

        test('it should extract an article from a given URL', () => {
            //test
            const url = 'https://millercenter.org/the-presidency/' +
                        'presidential-speeches/january-18-2001-farewell-address'
            const expectedResponseCode = 200
            const req = httpMocks.createRequest({
                  method: 'POST',
                  mode: 'cors',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: url
            })
            const res = httpMocks.createResponse()
            const next = jest.fn()
            aylienHandler.classifyText(req, res, next).catch(error => console.log(error))
            expect(res.statusCode).toEqual(expectedResponseCode)
        })*/
    })
});
