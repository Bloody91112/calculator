import { getParanthesesExpression } from './getParanthesesExpression';


test('should not change the array', () => {

    let expression = ['5', '-', '4']


    expect(getParanthesesExpression(expression)).toStrictEqual(["5", "-", "4"])
})

test('should change the array', () => {

    let expression = ['(','5', '-', '4',')']
    expect(getParanthesesExpression(expression)).toStrictEqual([1])
})


