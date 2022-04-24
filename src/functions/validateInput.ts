
export const validateInput = (expression: string[]) => {

    let expressions = ['+', "-", '*', "/"]

    let checkParantheses = (expression: string[]) => {// эта функция проверяет правильность скобок и возвращает либо true,либо false
        let arrayCopy = [...expression] // делаем копию выражения и работаем с ней
        if (arrayCopy.includes('(') || arrayCopy.includes(')')) {
            let a;
            let expressionsMarks;
            for (let i = 0; i < arrayCopy.length; i++) {
                if (arrayCopy[i] === ')') return false
                if (arrayCopy[i] === '(' && i + 1 === arrayCopy.length) return false
                if (arrayCopy[i] === '(') { // нашли открываещую скобку
                    a = i
                    arrayCopy.splice(i, 1) // убираем её, чтобы больше не попадалась
                    for (let j = a + 1; j < arrayCopy.length; j++) {
                        if (expressions.includes(arrayCopy[j])) expressionsMarks = true
                        if (arrayCopy[j] === ')') { //нашли закрываещую скобку
                            if (!expressionsMarks) return false // если в скобках нет знаков выражения - ошибка
                            if (j - a === 1) return false // и если они пустые - тоже
                            arrayCopy.splice(j, 1)// убрали скобку
                            i += 1
                            break
                        } else if (j + 1 >= arrayCopy.length) return false // если закрывающей скобки так и не нашлось...
                    }
                }
            }

        }
        return true
    }


    let expressionMarkCheck = (expression: string[]) => {
        //эта функция проверяет правильно ли поставлены знаки выражения
        let expressionsMarks = 0

        for (let i = 0; i < expression.length; i++) {
            if (expressions.includes(expression[i])) {
                //если нашли знак выражения, справа и слева их быть не должно
                if (expressions.includes(expression[i - 1])) return false
                if (expressions.includes(expression[i + 1])) return false
                expressionsMarks += 1
            }
        }
        // также проверяем наличие знаков выражения
        if (expressionsMarks > 0) return true
    }

    // вернет true если обе проверки прошли
    return (checkParantheses(expression) && expressionMarkCheck(expression))

}