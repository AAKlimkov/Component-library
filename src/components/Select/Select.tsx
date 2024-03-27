import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TextField from "../TextField/TextField";
import styles from "./Select.module.less";

export interface Option {
  value: string;
  label: string;
  selected?: boolean;
}

export interface SelectProps {
  options: Option[];
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({ options, disabled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>();
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
  const toggleDropdown = () => setIsOpen(!isOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const textFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textFieldRect = textFieldRef.current?.getBoundingClientRect();
    if (textFieldRect) {
      setPosition({
        top: textFieldRect.bottom,
        left: textFieldRect.left,
        width: textFieldRect.width,
      });
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);
  useEffect(() => {
    const initiallySelectedOption = options.find((option) => option.selected);
    if (initiallySelectedOption) {
      setSelectedOption(initiallySelectedOption);
    }
  }, [options]);

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.selectContainer} onClick={toggleDropdown}>
      <div ref={textFieldRef}>
        <TextField
          icon={isOpen ? KeyboardArrowUpIcon : KeyboardArrowDownIcon}
          value={selectedOption ? selectedOption.label : ""}
          label="make your choice"
          disabled={disabled}
          readOnly
        />
      </div>
      {isOpen &&
        ReactDOM.createPortal(
          <div
            ref={dropdownRef}
            className={styles["select-dropdown"]}
            style={{
              top: position.top,
              left: position.left,
              width: position.width,
            }}
          >
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
