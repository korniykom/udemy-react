import "./App.css";
import { useState } from "react";

function Counter({ step, setStep, counter, setCounter }) {
  const [slider, setSlider] = useState(1);
  const [inputField, setInputField] = useState(0);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + inputField);

  function handleSlider(e) {
    setSlider(+e.target.value);
  }
  function handleInputField(e) {
    setInputField(e.target.value);
  }

  function handleResetButton() {
    setSlider(1);
    setInputField(0);
  }

  function handleIncreaseCount() {
    setInputField((count) => +count + +slider);
  }
  function handleDecreaseCount() {
    setInputField((count) => +count - +slider);
  }
  return (
    <div className="center">
      <div>
        <span>
          {" "}
          <input
            type="range"
            min="1"
            max="10"
            value={slider}
            onChange={handleSlider}
          />
          <p>{slider}</p>
        </span>
      </div>
      <div>
        <button onClick={handleDecreaseCount}>-</button>
        <span>
          <input value={+inputField} onChange={handleInputField} />
        </span>
        <button onClick={handleIncreaseCount}>+</button>
      </div>
      <p>
        <span>
          {inputField === 0
            ? "Today is "
            : inputField > 0
            ? `${inputField} days from today is `
            : `${Math.abs(inputField)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <button onClick={handleResetButton}>Reset</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
