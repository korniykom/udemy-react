export default function FinishScreen({
  points,
  maxAmountOfPoints,
  highscore,
  dispatch,
}) {
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
