import React from "react";
import Button from "./Button/Button";

/* eslint-disable no-console */

const App: React.FC = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick} size="medium">
        Click me
      </Button>
      <Button variant="outlined" disabled size="large">
        Disabled Button
      </Button>
      <Button variant="text" onClick={handleClick} size="small">
        Text Button
      </Button>
    </div>
  );
};

export default App;
