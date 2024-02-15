import { HelperbgColor } from "./Helper";

type Props = {
  currentQuestionIndex: number;
  question: string;
  answers: Array<string>;
  userAnswer: string | undefined;
  correctAnswer: string;
  onclick: (answer: string, currentQuestionIndex: number) => void;
};
const Questioncard = ({
  currentQuestionIndex,
  question,
  answers,
  userAnswer,
  correctAnswer,
  onclick,
}: Props) => {
  return (
    <div>
      <p className=" text-[20px] " dangerouslySetInnerHTML={{__html:question}} />
      {answers.map((answer) => {
        return (
          <div
            key={answer}
            className={`${HelperbgColor(userAnswer,correctAnswer,answer)} cursor-pointer flex flex-col justify-between items-center w-full rounded-xl border-opacity-10  mt-5`} 
            onClick={()=>onclick(answer, currentQuestionIndex)}
          >
            <span className={`  py-[15px] `} dangerouslySetInnerHTML={{__html:answer}}/>
          </div>
        );
      })}
    </div>
  );
};
export default Questioncard;
