
export const validateInput = (expression: string[]) => {

    let expressions = ['+', "-", '*', "/"]

    let checkParantheses = (expression: string[]) => {
        let arrayCopy = [...expression]
        if (arrayCopy.includes('(') || arrayCopy.includes(')')) {
            let a;
            let expressionsMarks;
            for (let i = 0; i < arrayCopy.length; i++) {
                if (arrayCopy[i] === ')') return false
                if (arrayCopy[i] === '(' && i + 1 === arrayCopy.length) return false
                if (arrayCopy[i] === '(') {
                    a = i
                    arrayCopy.splice(i, 1)
                    for (let j = a + 1; j < arrayCopy.length; j++) {
                        if (expressions.includes(arrayCopy[j])) {
                            expressionsMarks = true
                        }
                        if (arrayCopy[j] === ')') {
                            if (!expressionsMarks) return false
                            if (j - a === 1) return false
                            arrayCopy.splice(j, 1)
                            i += 1
                            break
                        } else if (j + 1 >= arrayCopy.length) return false
                    }
                }
            }

        }
        return true
    }


    let expressionMarkCheck = (expression: string[]) => {

        let expressionsMarks = 0

        for (let i = 0; i < expression.length; i++) {
            if (expressions.includes(expression[i])) {
                if (expressions.includes(expression[i - 1])) return false
                if (expressions.includes(expression[i + 1])) return false
                expressionsMarks += 1
            }
        }
        if (expressionsMarks > 0) return true
    }

    return (checkParantheses(expression) && expressionMarkCheck(expression))

}