import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
import styles from "./TextField.module.less";

export interface TextFieldProps {
  variant?: "outlined" | "filled" | "standard";
  error?: string;
  label?: string;
  disabled?: boolean;
  icon?: IconType;
  onClick?: () => void;
  readOnly?: boolean;
  value?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  variant = "standard",
  error,
  label,
  disabled,
  icon: Icon,
  readOnly,
  onClick,
  value,
}) => {
  const [inputValue, setInputValue] = useState<string>(value ?? "");
  const isError = !!error;

  useEffect(() => {
    setInputValue(value ?? "");
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
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
        readOnly={readOnly}
        onClick={onClick}
      />

      {label && (
        <label className={`${styles.label} ${isError ? styles.error : ""}`}>
          {label}
        </label>
      )}
      {Icon && (
        <Icon className={`${styles.icon} ${isError ? styles.error : ""}`} />
      )}
      {isError && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default TextField;
