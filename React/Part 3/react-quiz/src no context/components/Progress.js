export default function Progress({
  index,
  numberOfQuestions,
  points,
  maxAmountOfPoints,
}) {
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
