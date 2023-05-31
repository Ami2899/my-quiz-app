import React from 'react'
// import { useState } from 'react'

const Start = ({setStartTimer,setStart}) => {
   
    function startQuiz(){
        setStartTimer(true)
        setStart(false)
    }
  return (
    <div>
      <button className="start-button" onClick={startQuiz}>Start Quiz</button>
    </div>
  )
}

export default Start
