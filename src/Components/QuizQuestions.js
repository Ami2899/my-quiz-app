import React, { useState } from 'react'
import { questions } from './Quizdata'
import "../App.css"

const QuizQuestions = ({
  score,
  qnumber,
  setScore,
  setQNumber,
  setRes,
  setSeconds,
  setStart,
  setSelectedOptions,
  selectedOptions,
  setStartTimer
}
) => {
const [selectedOption,setSelectedOption]=useState(null)
const [isAnswered,setIsAnswered]=useState(false)
 function handleAnswer(isCorrect,optiontext){
  return(
    setTimeout(()=>{
    setStart(false)
    setIsAnswered(true)
    setSelectedOption(optiontext)
      if(qnumber+1 < questions.length){
          setQNumber(qnumber+1)
      }
      if(qnumber+1===questions.length){
          setRes(true)
      }
      if(isCorrect){
          setScore((score)=>score+1)
      }
      setSeconds(20)

      setSelectedOptions((prevSelectedOptions) => {
        const updatedOptions = [...prevSelectedOptions];
        updatedOptions[qnumber] = optiontext;
        return updatedOptions;
      });
  },100)
  )
}
const handleAnswerOnClick = (options) => {
    setSelectedOption(options.optiontext)
    handleAnswer(options.isCorrect,options.optiontext)
  };
  return (
    <div className='question-card'>
      <h3>Score is {score}</h3> 
      <h2>Question {qnumber+1} of {questions.length}</h2>
      <h2>{questions[qnumber].questiontext}</h2>
      <ul>
        {questions[qnumber].options.map((options)=>{
            return(
              <div>
                    <li className="answer" onClick={()=>handleAnswerOnClick(options)} key={options.id}>
                    {options.optiontext}
                    </li>
                    <br/>
              </div>
                )
            })}
        </ul>
        
    </div>
    
  )
}

export default QuizQuestions
