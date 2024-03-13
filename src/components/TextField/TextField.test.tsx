import React from "react";
import { render, screen } from "@testing-library/react";
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
});
