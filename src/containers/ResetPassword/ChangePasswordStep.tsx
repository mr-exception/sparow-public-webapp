import React, { useState } from "react";
import Button from "ui-kit/Botton";
import Card from "ui-kit/Card";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";
import TextInput from "ui-kit/TextInput";
import { FaPen } from "react-icons/fa";
import { IChangePasswordStepProps } from "./props.interface";
import FinishStep from "./FinishStep";
const ChangePasswordStep = ({ token }: IChangePasswordStepProps) => {
  const [password, set_password] = useState<string>("");
  const [password_confirmation, set_password_confirmation] = useState<string>(
    ""
  );
  const [submitting, set_submitting] = useState<
    "not_submitted" | "submitting" | "submitted"
  >("not_submitted");
  const submit = () => {
    set_submitting("submitted");
  };

  if (submitting === "submitted") return <FinishStep />;
  else
    return (
      <>
        <Card.Body>
          <Row align="start">
            <Col col={12} style={{ textAlign: "justify" }}>
              <h4>done! now you can change your password.</h4>
            </Col>
          </Row>
          <Row align="start">
            <Col col={12}>
              <TextInput
                value={password}
                onChange={set_password}
                label="password"
                icon={<FaPen />}
                type="password"
              />
            </Col>
            <Col col={12}>
              <TextInput
                value={password_confirmation}
                onChange={set_password_confirmation}
                label="password confirmation"
                icon={<FaPen />}
                type="password"
              />
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Row style={{ marginTop: 15 }}>
            <Col col={12}>
              <Row align="end">
                <Button
                  onClick={() => {
                    submit();
                  }}
                >
                  submit
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </>
    );
};

export default ChangePasswordStep;
