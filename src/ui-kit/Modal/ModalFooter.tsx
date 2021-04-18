import React from "react";
import Col from "ui-kit/Col";
import Styles from "./Styles.module.scss";

const ModalFooter: React.FC<IModalFooterProps> = ({
  children,
}: IModalFooterProps) => {
  return (
    <Col className={Styles.modalFooter} col={12}>
      {children}
    </Col>
  );
};
export default ModalFooter;
