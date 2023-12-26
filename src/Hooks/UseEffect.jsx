// useEffect is a React Hook that lets you synchronize a component with an external system.
// useEffect(setup, dependencies?)

import { useEffect, useState } from "react";
import "./UseEffect.css";

const UseEffect = () => {
  const [photo1, setPhoto1] = useState("");
  const [change, setChange] = useState(0);
  const [photo2, setPhoto2] = useState("");
  const [change2, setChange2] = useState(0);

  async function call() {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const image = await res.json();
    console.log(image);
    setPhoto1(image.message);
  }
  useEffect(() => {
    call();
  }, [change]);

  const click = () => {
    setChange(change + 1);
  };

  async function cat() {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const msg = await res.json();
    console.log(msg);
    setPhoto2(msg.message);
  }

  useEffect(() => {
    cat();
  }, [change2]);

  const click2 = () => {
    setChange2(change2 + 1);
  };

  return (
    <div>
      <h4>Click me to change</h4>
      <div className="im">
        <img
          src={photo1}
          className="photo"
          alt="Image is missing"
          onClick={click}
        />
        <img
          src={photo2}
          className="photo"
          alt="Image is missing"
          onClick={click2}
        />
      </div>
    </div>
  );
};

export default UseEffect;
