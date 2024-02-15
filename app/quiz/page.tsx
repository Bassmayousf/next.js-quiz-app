import { QuestionsState } from "@/types/Quiz";
import { shuffleArray } from "@/utilites/ArrayUtils";
import Quiz from "./Quiz";
import { Question, Difficulty } from "@/types/Quiz";
const TOTAL_QUESIONS = 10;

const getQuestions = async (
  amount: number,
  difficulty: Difficulty
): Promise<QuestionsState> => {
  const endPoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  
  const data: { results: Array<Question> } = await  (await fetch(endPoint)).json();
  return data.results.map((quesion) => ({
    ...quesion,
    answers: shuffleArray([
      ...quesion.incorrect_answers,
      quesion.correct_answer,
    ]),
  }));
};

const HomePage = async () => {
  const questions = await getQuestions(TOTAL_QUESIONS, Difficulty.EASY);

  return <Quiz questions={questions} totalQuestionNumber={TOTAL_QUESIONS} />;
};

export default HomePage;
