import React, { useState } from "react";

const INCREMENT = "increment";
const DECREAMENT = "decreament";
function App() {
  const [value, setValue] = useState(0);
  const handleClick = (value, operation) => {
    setValue((prev) => (operation === INCREMENT ? prev + value : prev - value));
  };
  return (
    <div>
      <h1>Current Value -: {value}</h1>
      <h2>Increment By: </h2>
      {[5, 10, 15, 20].map((ele) => (
        <button key={ele} onClick={() => handleClick(ele, INCREMENT)}>
          Increment By {ele}
        </button>
      ))}
      <br />
      <h2>Decreament By: </h2>
      {[5, 10, 15, 20].map((ele) => (
        <button key={ele} onClick={() => handleClick(ele, DECREAMENT)}>
          Decrease By {ele}
        </button>
      ))}
    </div>
  );
}

export default App;
