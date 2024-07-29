import { useEffect } from "react";

export default function Timer({ dispatch, secondsRemaining }) {
  const MINUTES = Math.floor(secondsRemaining / 60);
  const SECONDS = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);

      return () => {
        clearInterval(id);
      };
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {MINUTES < 10 && "0"}
      {MINUTES}:{SECONDS < 10 && "0"}
      {SECONDS}
    </div>
  );
}
