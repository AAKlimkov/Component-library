import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TextField from "../TextField/TextField";
/* eslint-disable no-console */
interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
}

const Select: React.FC<SelectProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>({
    value: "option1",
    label: "Option 1",
  });
  const toggleDropdown = () => setIsOpen(!isOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef}>
      <TextField
        icon={isOpen ? KeyboardArrowUpIcon : KeyboardArrowDownIcon}
        onClick={toggleDropdown}
        value={selectedOption ? selectedOption.label : ""}
        readOnly
      />
      {isOpen &&
        ReactDOM.createPortal(
          <div
            style={{ position: "absolute", top: "80%", left: 0, zIndex: 999 }}
          >
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleOptionSelect(option)}
              >
                {option.label}
              </div>
            ))}
          </div>,
          document.body,
        )}
    </div>
  );
};

export default Select;
