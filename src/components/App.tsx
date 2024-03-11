import React, { useState } from "react";
import Button from "./Button/Button";
import Checkbox from "./Checkbox/Checkbox";
import Switch from "./Switch/Switch";

/* eslint-disable no-console */

const App: React.FC = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  const [isChecked, setIsChecked] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };
  const handleSwitchChange = (checked: boolean) => {
    setIsSwitchOn(checked);
    console.log(isSwitchOn);
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
      <Checkbox
        checked={isChecked}
        onChange={handleCheckboxChange}
        label="Enable Feature"
        disabled
      />
      <Switch checked={isSwitchOn} disabled onChange={handleSwitchChange} />
      <p>{isSwitchOn ? "Switch is ON" : "Switch is OFF"}</p>
    </div>
  );
};

export default App;
