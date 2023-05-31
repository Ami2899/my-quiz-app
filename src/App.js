import './App.css';
import { useState } from 'react';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import Timer from './Components/Timer';
import { questions } from './Components/Quizdata';
// import {BrowserRouter,Routes, Route} from "react-router-dom"

function App() {
    const [res,setRes]=useState(false)
    const [startTimer,setStartTimer]=useState(false)
    const [qnumber, setQNumber]=useState(0)
    const [score,setScore]=useState(0)
    const [seconds, setSeconds] = useState(20)
    const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null))

  return (
    <>
        {res?(<Result
          score={score}
          setQNumber={setQNumber}
          setRes={setRes}
          setScore={setScore}
          setStartTimer={setStartTimer}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />):
        (<> 
        <Quiz 
            score={score}
            qnumber={qnumber}
            setScore={setScore}
            setQNumber={setQNumber}  
            setRes={setRes} 
            setStartTimer={setStartTimer}
            setSeconds={setSeconds}
            seconds={seconds}
            setSelectedOptions={setSelectedOptions}
            selectedOptions={selectedOptions}
        />
        {startTimer && (<Timer 
            setRes={setRes}
            setQNumber={setQNumber}
            seconds={seconds}
            setSeconds={setSeconds}
            qnumber={qnumber}
            questions={questions}
            setSelectedOptions={setSelectedOptions}
            selectedOptions={selectedOptions}
        />)}
        </>
        )}
    </>
  );
}

export default App;
