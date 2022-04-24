import { getParanthesesExpression } from './getParanthesesExpression';
import { performSimpleActions } from './performSimpleActions';
import { validateInput } from './validateInput'

export const handleExpression = (expression: string[]) => {

    if (!validateInput(expression)) return 'Uncorrect'//валидация прошла - true, нет - false и "Uncorrect"
    let resultWithoutParantheses = getParanthesesExpression(expression)// вычисляем, если есть, выражения в скобках
    return performSimpleActions(resultWithoutParantheses)//подчет оставшейся части 

}
