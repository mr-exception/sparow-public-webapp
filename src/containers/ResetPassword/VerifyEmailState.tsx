import React from "react";
import Card from "ui-kit/Card";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";
import { IVerifyEmailStepProps } from "./props.interface";
const VerifyEmailState:React.FC<IVerifyEmailStepProps> = ({ email }: IVerifyEmailStepProps) => {
  return (
    <Card.Body>
      <Row align="start">
        <Col col={12} style={{ textAlign: "justify" }}>
          <h4>
            we have sent a mail to your email address inbox ({email}). please
            open your inbox and continue the reset password progress
          </h4>
        </Col>
      </Row>
    </Card.Body>
  );
};

export default VerifyEmailState;
