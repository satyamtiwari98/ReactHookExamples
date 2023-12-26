// Counter App to demostrate useState Hook
// useState is a React Hook that lets you add a state variable to your component
// const [state, setState] = useState(initialState);

import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [oddEven, setOddEven] = useState("");
  const [flag, setFlag] = useState(false);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleNumber = (event) => {
    setFlag(false);
    setNumber(event.target.value);
  };

  const check = () => {
    if (number % 2 == 0) {
      setOddEven("Even");
    } else {
      setOddEven("Odd");
    }
    setFlag(true);
  };
  return (
    <div>
      {name.length > 0 ? (
        <h2>
          Hello, {name}
          <hr />
        </h2>
      ) : (
        <h2></h2>
      )}
      <button onClick={handleCount}>You pressed me {count} times</button>

      <hr />

      <input
        type="text"
        placeholder="Enter Your name :-"
        onChange={handleName}
      />

      <hr />

      <h3>check for even or odd number :- </h3>
      <input placeholder="Enter a number" onChange={handleNumber} />
      <button onClick={check}>Check</button>

      {flag ? (
        <h4>
          {number} is {oddEven}
        </h4>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UseState;
