import React from "react";
import styles from "./Switch.module.less";

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  disabled = false,
}) => {
  const handleSwitchChange = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <label
      className={`${styles.switch} ${checked ? styles.checked : ""} ${disabled ? styles.disabled : ""}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleSwitchChange}
        disabled={disabled}
      />
      <span
        className={`${styles.slider} ${disabled ? styles.disabled : ""}`}
      ></span>
    </label>
  );
};

export default Switch;
