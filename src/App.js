// App.js
import React, { useState } from "react";
import ComponenteA from "./ComponenteA";
import ComponenteB from "./ComponenteB";

const App = () => {
  const [messageFromA, setMessageFromA] = useState("");

  const handleButtonClickA = () => {
    setMessageFromA("¡Hola Mundo! Se ha presionado en A!");
  };

  return (
    <div>
      <ComponenteA onButtonClick={handleButtonClickA} />
      <ComponenteB message={messageFromA} />
    </div>
  );
};

export default App;
