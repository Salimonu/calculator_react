import { useState } from 'react';

function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [bill, setBill] = useState('');
  const [percentage, setPercentage] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const billPercent = (bill * ((percentage + percentage2) / 2)) / 100;

  function resetHandler() {
    setBill('');
    setPercentage(0);
    setPercentage2(0);
  }

  return (
    <>
      <Bill curBill={bill} newBill={setBill} />
      <Percentage curPercent={percentage} newPercent={setPercentage}>
        How did you like the service?
      </Percentage>
      <Percentage curPercent={percentage2} newPercent={setPercentage2}>
        How did your friend like the service?
      </Percentage>

      {bill > 0 && (
        <>
          <Total curBill={bill} billPercent={billPercent} />
          <Reset onReset={resetHandler} />
        </>
      )}
    </>
  );
}

function Bill({ curBill, newBill }) {
  return (
    <div>
      <label for="bill">How much was the bill? </label>
      <input
        type="text"
        id="bill"
        placeholder="Bill value"
        value={curBill}
        onChange={e => newBill(Number(e.target.value))}
      />
    </div>
  );
}

function Percentage({ children, curPercent, newPercent }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={curPercent}
        onChange={e => newPercent(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Total({ curBill, billPercent }) {
  const total = curBill + billPercent;
  return (
    <strong>
      You'll pay ${total} (${curBill} + ${billPercent} tip){' '}
    </strong>
  );
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default App;
