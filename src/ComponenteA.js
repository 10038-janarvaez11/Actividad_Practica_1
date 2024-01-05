// ComponenteA.js
import React, { useState } from "react";

const ComponenteA = ({ onButtonClick }) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>Componente A</h2>
      <p>Contador: {counter}</p>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={onButtonClick}>Click en B</button>
    </div>
  );
};

export default ComponenteA;
