import React from "react";
import { FaTimes } from "react-icons/fa";
import Col from "ui-kit/Col";
import Styles from "./Styles.module.scss";

const ModalHeader: React.FC<IModalHeaderProps> = ({
  children,
  close,
}: IModalHeaderProps) => {
  return (
    <Col className={Styles.modalHeader} col={12}>
      {children}
      <FaTimes className={Styles.modalCloseButton} onClick={close} />
    </Col>
  );
};
export default ModalHeader;
