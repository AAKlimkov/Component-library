import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Switch from "./Switch";

describe("Switch component", () => {
  it("renders correctly with default props", () => {
    render(<Switch checked={false} onChange={() => {}} />);

    const switchElement = screen.getByRole("checkbox");

    expect(switchElement).toBeInTheDocument();
    expect(switchElement).not.toBeChecked();
    expect(switchElement.parentElement).toHaveClass("switch");
    expect(switchElement.parentElement).not.toHaveClass("checked");
    expect(switchElement.parentElement).not.toHaveClass("disabled");
    expect(switchElement.parentElement).not.toHaveAttribute("disabled");
  });

  it("renders correctly in checked state", () => {
    render(<Switch checked={true} onChange={() => {}} />);

    const switchElement = screen.getByRole("checkbox");

    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toBeChecked();
    expect(switchElement.parentElement).toHaveClass("switch");
    expect(switchElement.parentElement).toHaveClass("checked");
    expect(switchElement.parentElement).not.toHaveClass("disabled");
    expect(switchElement.parentElement).not.toHaveAttribute("disabled");
  });

  it("calls onChange handler when clicked", () => {
    const handleChange = jest.fn();
    render(<Switch checked={false} onChange={handleChange} />);

    fireEvent.click(screen.getByRole("checkbox"));

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("does not call onChange handler when clicked if disabled", () => {
    const handleChange = jest.fn();
    render(<Switch checked={false} onChange={handleChange} disabled />);

    userEvent.click(screen.getByRole("checkbox"));

    expect(handleChange).not.toHaveBeenCalled();
  });
});
