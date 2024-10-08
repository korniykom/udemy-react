import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((currentStep) => currentStep - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep((currentStep) => currentStep + 1);
    }
  }

  return (
    <>
      <button
        className="close"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          {" "}
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button title={"Previous"} callbackFunction={handlePrevious} />
            <Button title={"Next"} callbackFunction={handleNext} />
          </div>
        </div>
      )}
    </>
  );
  function Button({ title, callbackFunction }) {
    return (
      <button
        style={{ backgroundColor: "#7950f2", color: "white" }}
        onClick={callbackFunction}
      >
        {title}
      </button>
    );
  }
}
