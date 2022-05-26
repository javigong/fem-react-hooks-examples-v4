import { useState, useRef } from "react";

const RefComponent = () => {
  const [stateNumber, setStateNumber] = useState(0);
  const numRef = useRef(0);
  const myH1 = useRef();
  console.log(myH1);

  function incrementAndDelayLogging() {
    setStateNumber(stateNumber + 1);
    numRef.current++;
    setTimeout(
      () => alert(`state: ${stateNumber} | ref: ${numRef.current}`),
      1000
    );
  }

  return (
    <div>
      <h1 ref={(el) => (myH1.current = el)}>useRef Example</h1>
      <button onClick={incrementAndDelayLogging}>delay logging</button>
      <h4>state: {stateNumber}</h4>
      <h4>ref: {numRef.current}</h4>
    </div>
  );
};

export default RefComponent;
