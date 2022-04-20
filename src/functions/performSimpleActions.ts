export const performSimpleActions = (expression: Array<string | number>) => {
    debugger
    let expressionMarksEasy: Array<string | number> = []
    let expressionMarksHard: Array<string | number> = []

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '+' || expression[i] === '-') {
            expressionMarksEasy = [...expressionMarksEasy, expression[i]]
        }
        if (expression[i] === '*' || expression[i] === '/') {
            expressionMarksHard = [...expressionMarksHard, expression[i]]
        }
    }

    for (let i = 0; i < expressionMarksHard.length; i++) {

        if (expressionMarksHard[i] === '*') {
            let number1: Array<string | number> = []
            let number2: Array<string | number> = []
            let indexOfMark = expression.indexOf('*')

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
            let equality = +number1.join('') * +number2.join('')
            expression.splice(indexOfMark - number1.length, partLength, equality)
        }

        if (expressionMarksHard[i] === '/') {
            let number1: Array<string | number> = []
            let number2: Array<string | number> = []
            let indexOfMark = expression.indexOf('/')

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
            let equality = +number1.join('') / +number2.join('')
            expression.splice(indexOfMark - number1.length, partLength, equality)
        }
    }



    for (let i = 0; i < expressionMarksEasy.length; i++) {
        if (expressionMarksEasy[i] === '+') {
            let number1: Array<string | number> = []
            let number2: Array<string | number> = []
            let indexOfMark = expression.indexOf('+')

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
            let equality = +number1.join('') + +number2.join('')
            expression.splice(indexOfMark - number1.length, partLength, equality)
        }

        if (expressionMarksEasy[i] === '-') {
            let number1: Array<string | number> = []
            let number2: Array<string | number> = []
            let indexOfMark = expression.indexOf('-')

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
            let equality = +number1.join('') - +number2.join('')
            expression.splice(indexOfMark - number1.length, partLength, equality)
        }
    }
    return expression

}