const aylienHandler = require('../src/server/aylienApi');

describe('Aylien API', () => {
    describe('validateURL function', () => {
        test('it should not accept blank input', () => {
            const blankInput = ''
            const expectedResponse = ''
        }),

        test('it should reject strings that don\'t begin with "http"', () => {
            const nonHttpInput = 'ab'
            const expectedResponse = ''
        })
    }),
    describe('classifyText function', () => {
        test('it should extract an article from a given URL', () => {
            //test
            const url = 'https://millercenter.org/the-presidency/' +
                        'presidential-speeches/january-18-2001-farewell-address'
            const output = ''

            console.log(aylienHandler.validateUrl(url))
            //expect(aylienHandler.validateUrl(url), aylienHandler.classifyText()).toEqual(output)
        })
    })
});
