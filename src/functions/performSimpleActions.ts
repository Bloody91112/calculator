export const performSimpleActions = (expression: Array<string | number>) => {
    // создаем массивы для знаков +,- и знаков *,/
    let expressionMarksEasy: Array<string | number> = []
    let expressionMarksHard: Array<string | number> = []
    //заполняем их
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '+' || expression[i] === '-') {
            expressionMarksEasy = [...expressionMarksEasy, expression[i]]
        }
        if (expression[i] === '*' || expression[i] === '/') {
            expressionMarksHard = [...expressionMarksHard, expression[i]]
        }
    }
    //проходимся по массиву с * и /
    //элементы в массиве расположены так же, как и в исходном выражении
    //поэтому сохраняется правильный порядок операций
    for (let i = 0; i < expressionMarksHard.length; i++) {

        if (expressionMarksHard[i] === '*') {
            calculatePartOfExpression(expression, "*")
        }

        if (expressionMarksHard[i] === '/') {
            calculatePartOfExpression(expression, "/")
        }
    }
    //так же проходимся по массиву с + и -
    for (let i = 0; i < expressionMarksEasy.length; i++) {
        if (expressionMarksEasy[i] === '+') {
            calculatePartOfExpression(expression, "+")
        }

        if (expressionMarksEasy[i] === '-') {
            calculatePartOfExpression(expression, "-")
        }
    }
    //возвращаем результат
    return expression

}
//эта функция для вычисления отдельных частей выражения
let calculatePartOfExpression = (expression: Array<number | string>, expressionMark: string) => {

    let number1: Array<string | number> = []//число слева от знака
    let number2: Array<string | number> = []//число справа от знака
    let indexOfMark = expression.indexOf(expressionMark)//позиция знака выражения в самом выражении

    for (let n = indexOfMark - 1; n >= 0; n--) {
        if (Number.isInteger(+expression[n])) {
            number1 = [expression[n], ...number1]//пока попадаются цифры, число не определено до конца
        } else break
    }
    for (let n = indexOfMark + 1; n < 10; n++) {
        if (Number.isInteger(+expression[n])) {
            number2 = [...number2, expression[n]]
        } else break
    }
    let partLength = number1.length + 1 + number2.length//длина получившейся части выражения

    let equality: any

    switch (expressionMark) {// вычисляем получившееся выражения
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
    // вырезаем из исходного выражения часть, и вставляем вместо неё вычисленное значение
    expression.splice(indexOfMark - number1.length, partLength, equality)
}