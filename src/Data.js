import React, { useState } from 'react';
import "./Data.css";
function Data() {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('Initial Value');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setDisplayValue(event.target.value);
  };

  return (
    <div 
        style={{
            position:"relative",
            top:"70px",
            display: "flex",
      justifyContent: "center", // use proper capitalization
       allignItems: "center",
        }}>
    <div
      style={{
        
        width: '400px',
        height: '200px',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        padding: '20px',
      }}
    >
      <h2>Live Analysis</h2>
      <form>
        <label>
          Input Value:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
      </form>
      <p>Display Value: {displayValue}</p>
    </div>
    </div>
  );
}

export default Data;
