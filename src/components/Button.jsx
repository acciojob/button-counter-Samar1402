import React, { useState } from "react";

function Button() {
  const [counter, setCounter] = useState(0);
  function increament() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <p>Button clicked {counter} times</p>
      <button onClick={increament}>Click me</button>
    </div>
  );
}

export default Button;
