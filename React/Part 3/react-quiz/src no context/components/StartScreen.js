export default function StartScreen({ numberOfQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to React Quiz!</h2>
      <h3>{numberOfQuestions} questions to test your React mastery</h3>
      <button
        onClick={() => {
          dispatch({ type: "start" });
        }}
        className="btn"
      >
        Let's start!
      </button>
    </div>
  );
}
