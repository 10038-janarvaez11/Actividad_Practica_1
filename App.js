// App.js
import React, { useState } from "react";
import ComponenteA from "./ComponenteA";
import ComponenteB from "./ComponenteB";

const App = () => {
  const [messageFromA, setMessageFromA] = useState("");

  const handleButtonClickA = () => {
    setMessageFromA("¡Click en A!");
  };

  return (
    <div>
      <ComponenteA onButtonClick={handleButtonClickA} />
      <ComponenteB message={messageFromA} />
    </div>
  );
};

export default App;
