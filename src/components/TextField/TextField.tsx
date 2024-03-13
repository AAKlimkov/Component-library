import React, { useState } from "react";
import styles from "./TextField.module.less";

export interface TextFieldProps {
  variant?: "outlined" | "filled" | "standard";
  error?: string;
  label?: string;
  disabled?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  variant = "standard",
  error,
  label,
  disabled,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const isError = !!error;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div
      className={`${styles.textfield} ${isError ? styles.error : ""} ${disabled ? styles.disabled : ""}`}
    >
      <input
        type="text"
        className={`${styles.input} ${isError ? styles.error : ""} ${disabled ? styles.disabled : ""}
         ${styles[variant]}`}
        placeholder={label}
        disabled={disabled}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {label && (
        <label
          id={`${inputValue && !isFocused ? styles.grayLabel : ""}`}
          className={`${styles.label} ${isError ? styles.error : ""}`}
        >
          {label}
        </label>
      )}
      {isError && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default TextField;
