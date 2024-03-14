import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal Component", () => {
  it("renders without crashing", () => {
    render(<Modal open={true}>Test Modal</Modal>);
  });

  it("renders children when open prop is true", () => {
    const { getByText } = render(<Modal open={true}>Test Modal</Modal>);
    expect(getByText("Test Modal")).toBeInTheDocument();
  });

  it("does not render children when open prop is false", () => {
    const { queryByText } = render(<Modal open={false}>Test Modal</Modal>);
    expect(queryByText("Test Modal")).toBeNull();
  });

  it("calls onClose when close button is clicked", async () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <Modal open={true} onClose={onClose}>
        Test Modal
      </Modal>,
    );
    fireEvent.click(getByText("Close"));
    await waitFor(() => expect(onClose).toHaveBeenCalled());
  });

  it("does not call onClose when close button is clicked and onClose is not provided", async () => {
    const onClose = jest.fn();
    const { getByText } = render(<Modal open={true}>Test Modal</Modal>);
    fireEvent.click(getByText("Close"));
    await waitFor(() => expect(onClose).not.toHaveBeenCalled());
  });
});
