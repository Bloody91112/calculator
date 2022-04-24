import { performSimpleActions } from './performSimpleActions';
//эта функция определяет наличие скобок, отдает выражение в них основной функции вычисления
//и получив результат, вставляет вместо исходного выражения в скобках получившееся значение
export const getParanthesesExpression = (expression: string[]) => {

    if (expression.includes('(')) {
        for (let i = 0; i < expression.length; i++) {
            if (expression[i] === '(') {//нашли начало
                let startIndex = i
                let value: any = '';
                for (let j = i + 1; j < expression.length; j++) {

                    if (expression[j] !== ')') {
                        value += (expression[j])

                    } else {//нашли конец
                        let valueArr = value.split('')//сделали массив, так как функция ниже работает с ними
                        let sum: any = performSimpleActions(valueArr).join('')//полученное значение делаем строкой
                        expression.splice(startIndex, value.length + 2, sum)//вставляем полученное значение вместо того, что было в скобках
                        break
                    }
                }
            }
        }

    }
    return expression
}
