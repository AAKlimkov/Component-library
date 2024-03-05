import React from "react";
import "./Button.less";

interface ButtonProps {
  variant?: "text" | "contained" | "outlined";
  disabled?: boolean;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  children: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  disabled = false,
  onClick,
  size = "medium",
  children,
}) => {
  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`button ${variant} ${size} ${disabled ? "disabled" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
