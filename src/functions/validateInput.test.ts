import { validateInput } from './validateInput';



test('uncorrect', () => {
    expect(validateInput(['1', '(', '(', '4', ')'])).toBeFalsy()
})


test('correct', () => {
    expect(validateInput([ '(', '4', '+', '6', ')'])).toBeTruthy()
})