import React, { useState } from "react";
import Button from "ui-kit/Button/Botton";
import { CardBody, CardFooter } from "ui-kit/Card";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";
import TextInput from "ui-kit/TextInput/TextInput";
import { FaPen } from "react-icons/fa";
import { IChangePasswordStepProps } from "./props.interface";
import FinishStep from "./FinishStep";
const ChangePasswordStep: React.FC<IChangePasswordStepProps> = ({
  token,
}: IChangePasswordStepProps) => {
  console.debug(token);
  const [password, set_password] = useState<string>("");
  const [password_confirmation, set_password_confirmation] = useState<string>(
    ""
  );
  const [submitting, set_submitting] = useState<
    "not_submitted" | "submitting" | "submitted"
  >("not_submitted");
  const [loading, set_loading] = useState<boolean>(false);

  const submit = () => {
    set_submitting("submitted");
  };

  if (submitting === "submitted") return <FinishStep />;
  else
    return (
      <>
        <CardBody>
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
        </CardBody>
        <CardFooter>
          <Row style={{ marginTop: 15 }}>
            <Col col={12}>
              <Row align="end">
                <Button
                  onClick={() => {
                    submit();
                  }}
                  loading={loading}
                >
                  submit
                </Button>
              </Row>
            </Col>
          </Row>
        </CardFooter>
      </>
    );
};

export default ChangePasswordStep;
