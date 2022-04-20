
import { useEffect, useState } from 'react';
import './App.css';
import { Buttons } from './Buttons';
import { Output } from './Output';

export const App: React.FC = () => {

  
  let [pressedButtons, addButton]: any = useState([])
  let [inputStatus, setInputStatus] = useState(true)
  let [result, setResult]:any =useState()



  useEffect(() => {
    if (inputStatus === false) {
      pressedButtons.length = 0;
      setInputStatus(true)
    }
  }, [inputStatus, pressedButtons])


  return (
    <div className="calculator">
      <Output inputStatus={inputStatus} result={result} pressedButtons={pressedButtons} />
      <Buttons setResult ={setResult} setInputStatus={setInputStatus} addButton={addButton} pressedButtons={pressedButtons} />
    </div>
  );
}
