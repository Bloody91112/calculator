import { performSimpleActions } from './performSimpleActions';

test('should return 0', () => {
    expect(performSimpleActions(['1', '2', '3', '*', '0'])).toStrictEqual([0])
})

test('should return 10', () => {
    expect(performSimpleActions(['1', '3', '-', '3'])).toStrictEqual([10])
})

test('should return 100', () => {
    expect(performSimpleActions(['10', '*', '10'])).toStrictEqual([100])
})

test('calculatePathOfExp', () => {

    let expression = ['3', '*', '3']
    let expressionMark = '*'

    let calculatePartOfExpression = (expressionMark: string) => {

        let number1: Array<string | number> = []
        let number2: Array<string | number> = []
        let indexOfMark = expression.indexOf(expressionMark)

        for (let n = indexOfMark - 1; n >= 0; n--) {
            if (Number.isInteger(+expression[n])) {
                number1 = [expression[n], ...number1]
            } else break
        }
        for (let n = indexOfMark + 1; n < 10; n++) {
            if (Number.isInteger(+expression[n])) {
                number2 = [...number2, expression[n]]
            } else break
        }
        let partLength = number1.length + 1 + number2.length

        let equality: any

        switch (expressionMark) {
            case '*': equality = +number1.join('') * +number2.join('')
                break;

            case '/': equality = +number1.join('') / +number2.join('')
                break;

            case '-': equality = +number1.join('') - +number2.join('')
                break;

            case '+': equality = +number1.join('') + +number2.join('')
                break;

            default:
                break;
        }
        expression.splice(indexOfMark - number1.length, partLength, equality)
    }

    calculatePartOfExpression(expressionMark)


    expect(expression).toStrictEqual([9])

})