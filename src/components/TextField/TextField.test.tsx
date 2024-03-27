import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextField from "./TextField";

describe("TextField component", () => {
  it("renders correctly with default props", () => {
    render(<TextField />);

    const textFieldElement = screen.getByRole("textbox");

    expect(textFieldElement).toBeInTheDocument();
    expect(textFieldElement).toHaveClass("input");
  });

  it("displays label when provided", () => {
    render(<TextField label="Username" />);

    const labelElement = screen.getByText("Username");

    expect(labelElement).toBeInTheDocument();
  });

  it("applies error styles when error prop is provided", () => {
    render(<TextField error="Invalid input" />);

    const textFieldElement = screen.getByRole("textbox");

    expect(textFieldElement).toHaveClass("error");
  });

  it("applies disabled styles when disabled prop is true", () => {
    render(<TextField disabled />);

    const textFieldElement = screen.getByRole("textbox");

    expect(textFieldElement).toHaveClass("disabled");
    expect(textFieldElement).toHaveAttribute("disabled");
  });

  it("applies styles based on the variant prop", () => {
    render(<TextField variant="outlined" />);

    const textFieldElement = screen.getByRole("textbox");

    expect(textFieldElement).toHaveClass("outlined");
  });
  it("updates input value on change", () => {
    render(<TextField />);
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: "Test input" } });

    expect(inputElement.value).toBe("Test input");
  });

  it("sets isFocused state to false on blur", () => {
    render(<TextField />);
    const inputElement = screen.getByRole("textbox");

    fireEvent.focus(inputElement);
    fireEvent.blur(inputElement);

    expect(inputElement).not.toHaveFocus();
  });
  it("applies error style to label when error prop is provided", () => {
    render(<TextField label="Username" error="Invalid input" />);
    const labelElement = screen.getByText("Username");

    expect(labelElement).toHaveClass("error");
  });
});
