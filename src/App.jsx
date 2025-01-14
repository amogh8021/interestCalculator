import React, { useState } from 'react';


const InterestCalculator = () => {
 

  const[principal, setPrincipal] = useState('');
  const[interestRate, setInterestRate] = useState('');
  const[time, setTime] = useState('');
  const[result,setresult] = useState('');

  const handleSimple = (e) => {
    e.preventDefault();
    const ans = (principal * interestRate * time) / 100 ;

    setresult(`simple interest : ${ans}`)
    
  }



  const handleCompound =(e)=>{
    e.preventDefault();
    const compound = principal * Math.pow(1 + interestRate / 100, time) - principal;
    setresult(`Compound Interest: ${compound.toFixed(2)}`);
    
  }

  const handleReset=(e)=>{
    e.preventDefault();
    setPrincipal('');
    setInterestRate('');
    setTime('');
    setresult('');
    
  }

  return (
    <div className="calculator-container">
      <h1>Interest Calculator</h1>
      <div className="input-group">
        <label htmlFor="principal">Principal Amount:</label>
        <input type="number" id="principal" placeholder="Enter principal amount" value={principal} onChange={(e)=>setPrincipal(e.target.value)}/>
      </div>
      <div className="input-group">
        <label htmlFor="rate">Interest Rate (%):</label>
        <input type="number" id="rate" placeholder="Enter interest rate" value={interestRate} onChange={(e)=>setInterestRate(e.target.value)} />
      </div>
      <div className="input-group">
        <label htmlFor="time">Time (Years):</label>
        <input type="number" id="time" placeholder="Enter time in years" value={time} onChange={(e)=>setTime(e.target.value)} />
      </div>
      <div className="button-group">
        <button id="simple-btn" onClick={handleSimple}>Simple</button>
        <button id="compound-btn" onClick={handleCompound}>Compound</button>
        <button id="reset-btn" onClick={handleReset}>Reset</button>
      </div>
      <div className="result">
        <h2>Result:{result}</h2>
       
      </div>
    </div>
  );
};

export default InterestCalculator;
