// Button.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button, { ButtonProps } from "./Button";

describe("Button Component", () => {
  const defaultProps: ButtonProps = {
    children: "Click me",
  };

  it("renders with default props", () => {
    const { getByText } = render(<Button {...defaultProps} />);
    const buttonElement = getByText("Click me");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("button");
    expect(buttonElement).toHaveClass("contained");
    expect(buttonElement).toHaveClass("medium");
  });

  it("renders with specified props", () => {
    const props: ButtonProps = {
      variant: "outlined",
      disabled: true,
      onClick: jest.fn(),
      size: "small",
      children: "Submit",
    };

    const { getByText } = render(<Button {...props} />);
    const buttonElement = getByText("Submit");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("button");
    expect(buttonElement).toHaveClass("outlined");
    expect(buttonElement).toHaveClass("small");
    expect(buttonElement).toHaveClass("disabled");
  });

  it("calls onClick callback when clicked and not disabled", () => {
    const onClickMock = jest.fn();
    const props: ButtonProps = {
      onClick: onClickMock,
      children: "Click me",
    };

    const { getByText } = render(<Button {...props} />);
    const buttonElement = getByText("Click me");

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });

  it("does not call onClick callback when clicked and disabled", () => {
    const onClickMock = jest.fn();
    const props: ButtonProps = {
      onClick: onClickMock,
      disabled: true,
      children: "Click me",
    };

    const { getByText } = render(<Button {...props} />);
    const buttonElement = getByText("Click me");

    fireEvent.click(buttonElement);

    expect(onClickMock).not.toHaveBeenCalled();
  });
});
