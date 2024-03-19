import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Select from "./Select";

describe("Select Component", () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  it("renders without crashing", () => {
    render(<Select options={options} />);
  });

  it("toggles dropdown when clicked", () => {
    const { getByRole, getByText } = render(<Select options={options} />);
    const selectInput = getByRole("textbox");
    fireEvent.click(selectInput);
    expect(getByText("Option 2")).toBeInTheDocument();
  });

  it("displays correct options in dropdown", () => {
    const { getByRole, getByText } = render(<Select options={options} />);
    const selectInput = getByRole("textbox");
    fireEvent.click(selectInput);
    expect(getByText("Option 2")).toBeInTheDocument();
    expect(getByText("Option 3")).toBeInTheDocument();
  });

  it("updates selected option on option select", () => {
    const { getByRole, getByText } = render(<Select options={options} />);
    const selectInput = getByRole("textbox");
    fireEvent.click(selectInput);
    const option2 = getByText("Option 2");
    fireEvent.click(option2);
    expect(selectInput).toHaveValue("Option 2");
  });

  it("displays the selected option label in TextField", () => {
    const { getByRole, getByText } = render(<Select options={options} />);
    const selectInput = getByRole("textbox");
    fireEvent.click(selectInput);
    const option2 = getByText("Option 2");
    fireEvent.click(option2);
    expect(selectInput).toHaveValue("Option 2");
  });
});
