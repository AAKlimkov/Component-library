import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TextField from "../TextField/TextField";
import styles from "./Select.module.less";
/* eslint-disable no-console */
export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  options: Option[];
}

const Select: React.FC<SelectProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>();
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
    <div ref={dropdownRef} className={styles.selectContainer}>
      <TextField
        icon={isOpen ? KeyboardArrowUpIcon : KeyboardArrowDownIcon}
        onClick={toggleDropdown}
        value={selectedOption ? selectedOption.label : ""}
        label="make your choise"
        readOnly
      />
      {isOpen &&
        ReactDOM.createPortal(
          <div className={styles["select-dropdown"]}>
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleOptionSelect(option)}
                className={styles["select-option"]}
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
