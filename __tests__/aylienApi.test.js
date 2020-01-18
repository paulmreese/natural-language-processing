const aylienHandler = require('../src/server/aylienApi');
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
            const expectedResponse = {}
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
            expect(aylienHandler.validateUrl(req, res, next))
                .toEqual(expectedResponse)
        }),

        test('it should reject strings that don\'t begin with "http"', () => {
            const nonHttpInput = 'ab'
            const expectedResponse = ''
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
            expect(aylienHandler.validateUrl(req, res, next))
                .toEqual(expectedResponse)
        })
    }),
    describe('classifyText function', () => {
        test('it should extract an article from a given URL', () => {
            //test
            const url = 'https://millercenter.org/the-presidency/' +
                        'presidential-speeches/january-18-2001-farewell-address'
            const output = ''
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
            expect(aylienHandler.classifyText(req, res, next)).toEqual(output)
        })
    })
});
