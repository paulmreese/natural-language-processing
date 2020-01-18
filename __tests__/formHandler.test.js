import { handleSubmit } from '../src/client/js/formHandler'

describe('The formHandler function', () => {
    test('it should be defined', () => {
        expect(handleSubmit).toBeDefined()
    })

    test('it should be a function', () => {
        expect(typeof handleSubmit).toBe('function')
    })
})
