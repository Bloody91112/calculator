
export const getParanthesesExpression = (expression: string[]) => {

    if (expression.includes('(')) {
        for (let i = 0; i < expression.length; i++) {
            if (expression[i] === '(') {
                let startIndex = i
                let value = '';
                for (let j = i + 1; j < expression.length; j++) {

                    if (expression[j] !== ')') {
                        value += (expression[j])

                    } else {
                        let sum: any = 0
                        if (value.includes('*')) {
                            i = value.indexOf('*')
                            let number1: string[] = []
                            let number2: string[] = []

                            for (let n = i - 1; n >= 0; n--) {
                                if (typeof +value[n] === 'number') {
                                    number1 = [value[n], ...number1]
                                } else break
                            }
                            for (let n = i + 1; n < value.length; n++) {
                                if (typeof +value[n] === 'number') {
                                    number2 = [...number2, value[n]]
                                } else break
                            }
                            sum += +number1.join('') * +number2.join('')
                            alert(sum)
                        }

                        if (value.includes('/')) {
                            i = value.indexOf('/')
                            let number1: string[] = []
                            let number2: string[] = []

                            for (let n = i - 1; n >= 0; n--) {
                                if (typeof +value[n] === 'number') {
                                    number1 = [value[n], ...number1]
                                } else break
                            }
                            for (let n = i + 1; n < value.length; n++) {
                                if (typeof +value[n] === 'number') {
                                    number2 = [...number2, value[n]]
                                } else break
                            }
                            sum += +number1.join('') / +number2.join('')

                        }

                        if (value.includes('-')) {
                            i = value.indexOf('-')
                            let number1: string[] = []
                            let number2: string[] = []

                            for (let n = i - 1; n >= 0; n--) {
                                if (typeof +value[n] === 'number') {
                                    number1 = [value[n], ...number1]
                                } else break
                            }
                            for (let n = i + 1; n < value.length; n++) {
                                if (typeof +value[n] === 'number') {
                                    number2 = [...number2, value[n]]
                                } else break
                            }
                            sum += +number1.join('') - +number2.join('')

                        }

                        if (value.includes('+')) {
                            i = value.indexOf('+')
                            let number1: string[] = []
                            let number2: string[] = []

                            for (let n = i - 1; n >= 0; n--) {
                                if (typeof +value[n] === 'number') {
                                    number1 = [value[n], ...number1]
                                } else break
                            }
                            for (let n = i + 1; n < value.length; n++) {
                                if (typeof +value[n] === 'number') {
                                    number2 = [...number2, value[n]]
                                } else break
                            }
                            sum += +number1.join('') + +number2.join('')
                            
                        }

                        expression.splice(startIndex, value.length + 2, sum)
                        break
                    }
                }
            }
        }

    }
    return expression
}
