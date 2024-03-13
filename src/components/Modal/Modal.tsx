import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.less";

export interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
  open: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, onClose, open }) => {
  const closeModal = () => {
    if (onClose) {
      setTimeout(() => onClose(), 0);
    }
  };

  return (
    <>
      {open &&
        createPortal(
          <div className={styles.modal}>
            <div>{children}</div>
            <button onClick={closeModal}>Close</button>
          </div>,
          document.body,
        )}
    </>
  );
};

export default Modal;
