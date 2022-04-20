import { getParanthesesExpression } from './getParanthesesExpression';
import { performSimpleActions } from './performSimpleActions';
import {validateInput} from './validateInput'

export const handleExpression = (expression:string[]) => {

    if(!validateInput(expression)) {
        return 'Uncorrect'
    }
    
    let resultWithoutParantheses = getParanthesesExpression(expression)
    
    return performSimpleActions(resultWithoutParantheses)

}
