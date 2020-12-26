import React from "react";
import Button from "ui-kit/Botton";
import Card from "ui-kit/Card";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";
import TextInput from "ui-kit/TextInput";
import CheckInput from "ui-kit/CheckInput";
import { FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { ISendStepProps } from "./props.interface";
const SendStep:React.FC<ISendStepProps> = ({
  email,
  set_email,
  phone,
  set_phone,
  method,
  set_method,
  submit,
}: ISendStepProps) => {
  return (
    <>
      <Card.Body>
        <Row align="start">
          <Col col={12} style={{ textAlign: "justify" }}>
            <h4>
              enter your email or phone number to get a verification message
              from sparow
            </h4>
          </Col>
        </Row>
        <Row align="start">
          <Col col={12}>
            <CheckInput
              name="method"
              checked={method === "email"}
              value="email"
              onChange={(value) => {
                set_method(value as "email" | "phone");
              }}
              label="send message to my email address"
            />
          </Col>
          <Col col={12}>
            <TextInput
              value={email}
              onChange={set_email}
              label="email address"
              disabled={method !== "email"}
              icon={<GrMail />}
            />
          </Col>
          <Col col={12}>
            <CheckInput
              name="method"
              checked={method === "phone"}
              value="phone"
              onChange={(value) => {
                set_method(value as "email" | "phone");
                console.log(value)
              }}
              label="send message to my phone number"
            />
          </Col>
          <Col col={12}>
            <TextInput
              value={phone}
              onChange={set_phone}
              label="phone number"
              disabled={method !== "phone"}
              icon={<FaPhone />}
            />
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        <Row style={{ marginTop: 15 }} align="end">
          <Col col={12}>
            <Button
              onClick={() => {
                submit();
              }}
            >
              submit
            </Button>
          </Col>
        </Row>
      </Card.Footer>
    </>
  );
};

export default SendStep;
