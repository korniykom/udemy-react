import { useState } from "react";
export default function App() {
  const [bill, setBill] = useState(null);
  const [yourTip, setYourTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function handleBill(value) {
    setBill(value);
  }

  return (
    <div>
      <Bill bill={bill} onSetBill={handleBill} />
      <TipInput tip={yourTip} setTip={setYourTip}>
        How much did you like the service?
      </TipInput>
      <TipInput tip={friendTip} setTip={setFriendTip}>
        How much did your friend like the service?
      </TipInput>
      <Total bill={bill} yourTip={yourTip} friendTip={friendTip} />
      <Reset
        setBill={setBill}
        setFriendTip={setFriendTip}
        setYourTip={setYourTip}
      >
        Reset
      </Reset>
    </div>
  );
}

function Bill({ bill, onSetBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        value={bill}
        onChange={(e) => {
          onSetBill(e.target.value);
        }}
      ></input>
    </div>
  );
}

function TipInput({ tip, setTip, children }) {
  function handleTip(e) {
    setTip(e.target.value);
  }
  return (
    <div>
      <span>{children}</span>
      <select
        value={tip}
        onChange={(e) => {
          handleTip(e);
        }}
      >
        <option value={0}>Dissatified (0)</option>
        <option value={5}>It was okay (5)</option>
        <option value={10}>It was good (10)</option>
        <option value={20}>Absolutly amazing! (20)</option>
      </select>
    </div>
  );
}
function Total({ bill, yourTip, friendTip }) {
  const totalBill = +bill + (+bill * (+yourTip + +friendTip)) / 200;
  return (
    <strong>
      You pay ${totalBill} (${bill} + ${(+bill * (+yourTip + +friendTip)) / 200}
      )
    </strong>
  );
}
function Reset({ children, setBill, setYourTip, setFriendTip }) {
  function handleReset() {
    setBill(0);
    setYourTip(0);
    setFriendTip(0);
  }
  return <button onClick={handleReset}>{children}</button>;
}
