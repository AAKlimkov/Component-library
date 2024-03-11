import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Checkbox from "./Checkbox";

describe("Checkbox component", () => {
  it("renders correctly with default props", () => {
    const { getByLabelText } = render(
      <Checkbox checked={false} onChange={() => {}} label="Checkbox Label" />,
    );
    const checkboxElement = getByLabelText("Checkbox Label");

    expect(checkboxElement).toBeInTheDocument();
    expect(checkboxElement.tagName).toBe("LABEL");
    expect(checkboxElement).toHaveClass("checkbox");
    expect(checkboxElement).not.toHaveClass("disabled");
    expect(checkboxElement).not.toHaveAttribute("disabled");
  });
});
