import { useQuiz } from "../contexts/QuizContext";

export default function FinishScreen() {
  const { points, questions, highscore, dispatch } = useQuiz();
  const maxAmountOfPoints = questions.reduce((accumulator, currentValue) => {
    return +accumulator + currentValue.points;
  }, 0);
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxAmountOfPoints}
      </p>
      <p className="highscore">Highscore : {`${highscore}`} points</p>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "restart" });
        }}
      >
        Restart
      </button>
    </>
  );
}
