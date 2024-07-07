import { useEffect, useState } from "react";

export default function App() {
  const [input, setInput] = useState(0);
  const [convertTo, setConvertTo] = useState("USD");
  const [convertFrom, setConvertFrom] = useState("EUR");
  const [result, setResult] = useState(0);

  useEffect(
    function () {
      async function fetchMoney() {
        // API throw error if convertFrom and convertTo the same
        if (convertFrom !== convertTo) {
          const response = await fetch(
            `https://api.frankfurter.app/latest?amount=${input}&from=${convertFrom}&to=${convertTo}`
          );
          const responseJSON = await response.json();

          setResult(() => {
            return responseJSON.rates[convertTo];
          });
          // handle if convertFrom and convertTo are the same
        } else {
          setResult(input);
        }
      }
      fetchMoney();
    },
    [input, convertFrom, convertTo]
  );

  return (
    <div>
      <input
        onChange={(e) => {
          setInput(+e.target.value);
        }}
      ></input>
      <select
        value={convertFrom}
        onChange={(e) => {
          setConvertFrom(e.target.value);
        }}
      >
        <option value={"USD"}>USD</option>
        <option value={"EUR"}>EUR</option>
      </select>
      <select
        value={convertTo}
        onChange={(e) => {
          setConvertTo(e.target.value);
        }}
      >
        <option value={"USD"}>USD</option>
        <option value={"EUR"}>EUR</option>
      </select>
      <p>{result}</p>
    </div>
  );
}
