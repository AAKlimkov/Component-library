// Modal.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "./Modal";

describe("Modal component", () => {
  it("renders correctly when open", () => {
    const onCloseMock = jest.fn();
    render(
      <Modal open={true} onClose={onCloseMock}>
        <div>Modal Content</div>
      </Modal>,
    );

    const modalContent = screen.getByText("Modal Content");
    const closeButton = screen.getByText("Close");

    expect(modalContent).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(
      <Modal open={false}>
        <div>Modal Content</div>
      </Modal>,
    );

    const modalContent = screen.queryByText("Modal Content");
    const closeButton = screen.queryByText("Close");

    expect(modalContent).not.toBeInTheDocument();
    expect(closeButton).not.toBeInTheDocument();
  });

  it("calls onClose when Close button is clicked", () => {
    const onCloseMock = jest.fn();
    render(
      <Modal open={true} onClose={onCloseMock}>
        <div>Modal Content</div>
      </Modal>,
    );

    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalled();
  });
});
