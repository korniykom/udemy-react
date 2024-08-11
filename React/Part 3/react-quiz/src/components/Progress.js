import { useQuiz } from "../contexts/QuizContext";

export default function Progress() {
  const { questions, index, points } = useQuiz();
  const numberOfQuestions = questions.length;
  const maxAmountOfPoints = questions.reduce((accumulator, currentValue) => {
    return +accumulator + currentValue.points;
  }, 0);
  return (
    <header className="progress">
      <progress max={numberOfQuestions} value={index} />
      <p>
        Question <strong>{index}</strong> /{numberOfQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxAmountOfPoints}
      </p>
    </header>
  );
}
