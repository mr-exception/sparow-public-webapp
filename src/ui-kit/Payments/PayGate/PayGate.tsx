import React from "react";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";
import Styles from "./PayGate.module.scss";
interface IProps {
  icon: any;
  caption: string;
  onClick: () => void;
}

const PayGate: React.FC<IProps> = ({ icon, caption, onClick }: IProps) => {
  return (
    <Row align="center" className={Styles.container} onClick={onClick}>
      <Col col={12}>
        <img className={Styles.logo} src={icon} />
      </Col>
      <Col className={Styles.caption} col={12}>
        {caption}
      </Col>
    </Row>
  );
};
export default PayGate;
