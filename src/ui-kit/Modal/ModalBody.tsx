import React from "react";
import Col from "ui-kit/Col";
import Styles from "./Styles.module.scss";

const ModalBody: React.FC<IModalBodyProps> = ({
  children,
}: IModalBodyProps) => {
  return (
    <Col className={Styles.modalBody} col={12}>
      {children}
    </Col>
  );
};
export default ModalBody;
