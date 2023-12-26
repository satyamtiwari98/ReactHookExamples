// useRef is a React Hook that lets you reference a value that’s not needed for rendering.
// const ref = useRef(initialValue)

import { useRef, useState } from "react";

const UseRef = () => {
  let count = useRef(0);
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const handleClick = () => {
    count.current += 1;
    alert("button clicked " + count.current + " times.");
  };

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <hr></hr>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default UseRef;
