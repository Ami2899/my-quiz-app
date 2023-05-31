import React, { useState } from 'react'
import QuizQuestions from './QuizQuestions'
import Start from './Start'

const Quiz = ({res,setRes, startTimer, setStartTimer,qnumber,setQNumber,score,setScore,seconds,setSeconds,setSelectedOptions,selectedOptions}) => {
    const [start,setStart]=useState(true)
   
  return (
    <div>
    {start?<Start
        setStartTimer={setStartTimer}
        setStart={setStart}
    />: 
    <QuizQuestions
        score={score}
        qnumber={qnumber}
        setScore={setScore}
        setQNumber={setQNumber}
        setRes={setRes}
        setSeconds={setSeconds}
        seconds={seconds}
        startTimer={startTimer}
        setStart={setStart}
        setSelectedOptions={setSelectedOptions}
        selectedOptions={selectedOptions}
        setStartTimer={setStartTimer}
      />
      }
     
    </div>
  )
}

export default Quiz
