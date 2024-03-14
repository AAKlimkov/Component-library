import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Modal from "./Modal/Modal";
import TextField from "./TextField/TextField";
import Select from "./Select/Select";

/* eslint-disable no-console */

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div>
      {/* <Button variant="contained" onClick={handleClick} size="medium">
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
      <h1>TextField Example</h1>

      <Switch checked={isSwitchOn} disabled onChange={handleSwitchChange} /> */}
      {/* <p>{isSwitchOn ? "Switch is ON" : "Switch is OFF"}</p> */}
      {/* <h1>Select Component Example</h1>

      <Select
        label="Choose a Fruit"
        variant="outlined"
        onChange={handleChange}
        value={selectedOption} // You can use the `value` prop to control the selected option
      >
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </Select>

      <p>Selected Fruit: {selectedOption}</p> */}

      <TextField label="Standard Text Field" icon={KeyboardArrowDownIcon} />
      <TextField label="Outlined Text Field" variant="outlined" />
      <TextField label="Filled Text Field" variant="filled" />
      <TextField label="Disabled Text Field" disabled />

      <TextField
        label="Error Text Field"
        error="This field is required"
        variant="filled"
        icon={KeyboardArrowDownIcon}
      />

      <TextField
        label="Custom Styled Text Field"
        variant="outlined"
        error="Invalid input"
        disabled
      />
      <button onClick={() => setIsOpen(true)}>
        Show modal using a portal
        <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          Children from App
        </Modal>
      </button>
      <div>
        <h1>Select Component Example</h1>
        <Select options={options} />
      </div>
    </div>
  );
};

export default App;
