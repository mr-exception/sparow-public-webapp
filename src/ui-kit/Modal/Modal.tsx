import React from "react";
import Row from "ui-kit/Row";
import Styles from "./Styles.module.scss";

const Modal: React.FC<IModalProps> = ({
  show,
  children,
  onClose,
  size = "medium",
}: IModalProps) => {
  if (!show) return null;

  return (
    <div className={Styles.modal} onClick={onClose}>
      <div
        className={`${Styles.modalContent} ${Styles[size]}`}
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
