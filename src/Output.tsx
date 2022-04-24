import { useEffect, useState } from "react"

type propsType = {
    pressedButtons: string[]
    result: any
    inputStatus: boolean
}

export const Output: React.FC<propsType> = ({ inputStatus, result, pressedButtons }) => {

    let [expression, setExpression]: any = useState()

    useEffect(() => {
        if (inputStatus === false) setExpression('')
    }, [inputStatus, expression])

    useEffect(() => {
        setExpression(pressedButtons.join(''))
    }, [pressedButtons])

    return (
        <div className="output">
            <div className="expression">{expression}</div>
            <div className="result">{result}</div>
        </div>

    )
}