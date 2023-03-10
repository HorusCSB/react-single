import React, { useState } from "react";

const App = ({ name }) => {
  const [counter, stateCounter] = useState(0);

  const handleChange = (type) => {
    stateCounter((oldCounter) => counter + type);
  };

  return (
    <>
      <h1>{name}</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={() => handleChange(-1)}>Menos</button>
      <button onClick={() => handleChange(1)}>Mais</button>
    </>
  );
};

export default App;
