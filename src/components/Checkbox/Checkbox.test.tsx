import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Checkbox from "./Checkbox";

describe("Checkbox component", () => {
  it("renders correctly with default props", () => {
    render(
      <Checkbox checked={false} onChange={() => {}} label="Checkbox Label" />,
    );

    const checkboxElement = screen.getByRole("checkbox");

    expect(checkboxElement).toBeInTheDocument();
    expect(checkboxElement).not.toBeChecked();
    expect(checkboxElement.parentElement).toHaveClass("checkbox");
    expect(checkboxElement.parentElement).not.toHaveClass("disabled");
    expect(checkboxElement.parentElement).not.toHaveAttribute("disabled");
  });

  it("calls onChange handler when clicked", () => {
    const handleChange = jest.fn();
    render(
      <Checkbox
        checked={false}
        onChange={handleChange}
        label="Checkbox Label"
      />,
    );

    fireEvent.click(screen.getByLabelText("Checkbox Label"));

    expect(handleChange).toHaveBeenCalled();
  });

  it("does not call onChange handler when clicked if disabled", () => {
    const handleChange = jest.fn();
    render(
      <Checkbox
        checked={false}
        onChange={handleChange}
        disabled
        label="Checkbox Label"
      />,
    );

    fireEvent.click(screen.getByLabelText("Checkbox Label"));

    expect(handleChange).not.toHaveBeenCalled();
  });
});
