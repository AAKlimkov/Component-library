import React from "react";
import styles from "./Checkbox.module.less";

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
}) => {
  const handleChange = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <label className={`${styles.checkbox} ${disabled ? styles.disabled : ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

export default Checkbox;
