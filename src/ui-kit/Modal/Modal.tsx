import React from "react";
import Row from "ui-kit/Row";
import Styles from "./Modal.module.scss";

const Modal: React.FC<IModalProps> = ({
  show,
  children,
  onClose,
  size = "medium",
}: IModalProps) => {
  if (!show) return null;
  const calculateWidth = (): string => {
    switch (size) {
      case "small":
        return "30vw";
      case "medium":
        return "50vw";
      case "large":
        return "70vw";
    }
  };

  return (
    <div className={Styles.modal} onClick={onClose}>
      <div
        className={Styles.modalContent}
        style={{ width: calculateWidth() }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Row>{children}</Row>
      </div>
    </div>
  );
};
export default Modal;
