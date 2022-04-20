import { useEffect } from "react"
import { handleExpression } from "./functions/handleExpression"

type propsType = {
    addButton: Function
    pressedButtons: string[]
    setInputStatus: (boolean: boolean) => void
    setResult: (result:"Uncorrect" | (string | number)[]) => void
}

export const Buttons: React.FC<propsType> = ({setResult, addButton, pressedButtons, setInputStatus }) => {
    useEffect(() => {
        let handleKeyPressEvent = (event: KeyboardEvent) => {

            if (event.key === 'Enter') handleExpression(pressedButtons)

            if (!((event.key >= '0' && event.key <= '9') || event.key === '-'
                || event.key === '+' || event.key === '/' || event.key === '*'
                || event.key === '(' || event.key === ')' )) return
            
            

            addButton(() => [...pressedButtons, event.key])
        }
        document.addEventListener('keypress', handleKeyPressEvent)
        return () => {
            document.removeEventListener('keypress', handleKeyPressEvent)
        }
    }, [addButton, pressedButtons])



    return (
        <div className='buttonsBlock'>
            <div className="group">
                <button onClick={() => { setInputStatus(false) }}>C</button>
                <button onClick={() => { addButton(() => [...pressedButtons, '(']) }} >(</button>
                <button onClick={() => { addButton(() => [...pressedButtons, ')']) }} >)</button>
                <button onClick={() => { addButton(() => [...pressedButtons, '/']) }} >/</button>
            </div>
            <div className="group">
                <button onClick={() => { addButton(() => [...pressedButtons, '7']) }} >7</button>
                <button onClick={() => { addButton(() => [...pressedButtons, '8']) }} >8</button>
                <button onClick={() => { addButton(() => [...pressedButtons, '9']) }} >9</button>
                <button onClick={() => { addButton(() => [...pressedButtons, '*']) }} >*</button>
            </div>
            <div className="group">
                <button onClick={() => { addButton(() => [...pressedButtons, '4']) }} >4</button>
                <button onClick={() => { addButton(() => [...pressedButtons, '5']) }} >5</button>
                <button onClick={() => { addButton(() => [...pressedButtons, '6']) }} >6</button>
                <button onClick={() => { addButton(() => [...pressedButtons, '-']) }} >-</button>
            </div>
            <div className="group">
                <button onClick={() => { addButton(() => [...pressedButtons, '1']) }} >1</button>
                <button onClick={() => { addButton(() => [...pressedButtons, '2']) }} >2</button>
                <button onClick={() => { addButton(() => [...pressedButtons, '3']) }} >3</button>
                <button onClick={() => { addButton(() => [...pressedButtons, '+']) }} >+</button>
            </div>
            <div className="group">
                <button onClick={() => { addButton(() => [...pressedButtons, '00']) }} >00</button>
                <button onClick={() => { addButton(() => [...pressedButtons, '0']) }} >0</button>
                <button>,</button>
                <button onClick={() => { setResult(handleExpression(pressedButtons))}}>=</button>
            </div>
        </div>
    )
}