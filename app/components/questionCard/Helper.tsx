export const HelperbgColor = (userAnswer:string|undefined , correctAnswer: string,answer:string):string=>{
  const isCorrectAnswer = userAnswer?userAnswer=== correctAnswer :undefined;
  if((isCorrectAnswer === true && answer === userAnswer) || (isCorrectAnswer===false && answer===correctAnswer)){
    return `bg-[#55ac72] text-white`
  }
 if(isCorrectAnswer === false && answer ===userAnswer)return 'bg-[#ec5050] text-white';
   
return "bg-orange-100 text-teal-900"

}