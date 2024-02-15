"use client"
import React, { useState } from "react";
import { useRouter} from "next/navigation";
import { QuestionsState } from "@/types/Quiz";
import Button from "../components/button/Button";
import Questioncard from "../components/questionCard/QuestionCard";
type Props ={
  questions :QuestionsState,
  totalQuestionNumber:number
}

const Quiz =({questions,totalQuestionNumber}:Props)=>{
  const router = useRouter()
  const [currentQuestionIndex ,setCurrentQuestionIndex] = useState(0)
  const [score,setScore]= useState(0)
  const[userAnswer,setUserAnswer]=useState<Record<number,string>>({})

  const isQuestionAnswered =userAnswer[currentQuestionIndex]?true:false;
  const hundleAnswerClick = (answer:string,currentQuestionIndex:number)=>{
    if(isQuestionAnswered)return;
    const isCorrect = questions[currentQuestionIndex].correct_answer === answer
    if(isCorrect)setScore(prev=>prev + 1)
    setUserAnswer(prev=>({...prev,[currentQuestionIndex]:answer}))
  }
  const handleChangeQuestion =(step:number)=>{
    const newQuestionIndex = currentQuestionIndex + step
    if(currentQuestionIndex <0 || newQuestionIndex >= totalQuestionNumber ) return;
    setCurrentQuestionIndex(newQuestionIndex)
  }

return(
  <>
  <div className="flex flex-row justify-between items-center  w-[100%]">
  <button className="btn bg-orange-50 border-none hover:bg-orange-100">
  Score
  <div className="badge bg-[#50c8db] border-none hover:bg-orange-100 text-white" >{score}</div>
</button>
<button className="btn bg-orange-50 border-none hover:bg-orange-100">
  Question
  <div className="badge bg-[#ffc230] border-none hover:bg-orange-100 text-white">{currentQuestionIndex + 1}</div>
  out of
  <div className="badge bg-[#ffc230] border-none hover:bg-orange-100 text-white">{totalQuestionNumber}</div>
</button>
  </div>
  {/* question card */}
<div className="bg-orange-50 w-full rounded-md p-5 my-8 h-[390px] text-center">
<Questioncard 
  currentQuestionIndex={currentQuestionIndex}
  question={questions[currentQuestionIndex].question}
  answers={ questions[currentQuestionIndex].answers}
  correctAnswer={questions[currentQuestionIndex].correct_answer}
  userAnswer={userAnswer[currentQuestionIndex]}
 onclick={hundleAnswerClick}



/>
</div>
  <div className="flex justify-between w-[25%] items-center gap-4 ">
    <Button text = "Prev" onclick={()=>handleChangeQuestion(-1)}/>
    <Button text = {currentQuestionIndex ===totalQuestionNumber - 1?"End":"Next"} onclick={currentQuestionIndex ===totalQuestionNumber - 1?()=>router.push("/"):()=>handleChangeQuestion(1)}/>

  </div>
  </>
)


}
export default Quiz;