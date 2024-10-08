import { useQuiz } from "../contexts/QuizContext";

export default function NextButton() {
  const { dispatch, answer, index, questions } = useQuiz();
  const numberOfQuestions = questions.length;
  if (answer === null) return;
  if (index < numberOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "nextQuestion" });
        }}
      >
        Next
      </button>
    );
  if (index === numberOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "finish" });
        }}
      >
        Finish
      </button>
    );
}
