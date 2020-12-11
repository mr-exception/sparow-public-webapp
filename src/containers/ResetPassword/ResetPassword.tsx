import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "ui-kit/Card";
import Col from "ui-kit/Col";
import Image from "ui-kit/Image";
import Row from "ui-kit/Row";
import Space from "ui-kit/Space";
import ChangePasswordStep from "./ChangePasswordStep";
import { IResetPasswordParams } from "./params.interface";
import Styles from "./ResetPassword.module.scss";
import SendStep from "./SendStep";
import VerifyEmailState from "./VerifyEmailState";
import VerifyPhoneStep from "./VerifyPhoneStep";
const ResetPassword = () => {
  const [email, set_email] = useState<string>("");
  const [phone, set_phone] = useState<string>("");
  const [method, set_method] = useState<"email" | "phone">("email");
  const [step, set_step] = useState<
    "not_submitted" | "submitting" | "submitted" | "password_change"
  >("not_submitted");
  const submit = () => {
    set_step("submitted");
  };
  const [token, set_token] = useState<string>("");
  // check if user is redirected with a parameter
  const paramToken = useParams<IResetPasswordParams>().token;
  const didMount = () => {
    if (paramToken) {
      // first we have to validate the token. but it's just a mock view
      set_token(paramToken);
      set_step("password_change");
    }
  };
  useEffect(didMount, [paramToken]);
  return (
    <Row align="center" verticalAlign="center">
      <Col lg={4} md={6} sm={8} xs={12}>
        <Space height="10vh" />
        <Row>
          <Col lg={6} md={6} sm={6} xs={12}>
            <Image
              source="/logo192.png"
              alt="logo"
              className={Styles.applicationImage}
            />
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            <Image
              source="/logo192.png"
              alt="logo"
              className={Styles.applicationImage}
            />
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            sparow
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            application name
          </Col>
        </Row>
        <Space height="5vh" />
        <Card>
          <Card.Header>
            <Row align="start">
              <Col
                col={12}
                style={{
                  paddingLeft: 15,
                }}
              >
                <h3>
                  <b>Reset Password</b>
                </h3>
              </Col>
            </Row>
          </Card.Header>
          {step === "not_submitted" && (
            <SendStep
              email={email}
              set_email={(value) => {
                set_email(value);
              }}
              phone={phone}
              set_phone={(value) => {
                set_phone(value);
              }}
              method={method}
              set_method={(value) => {
                set_method(value);
              }}
              submit={submit}
            />
          )}
          {step === "submitted" && method === "email" && (
            <VerifyEmailState email={email} />
          )}
          {step === "submitted" && method === "phone" && (
            <VerifyPhoneStep
              phone={phone}
              goBack={() => {
                set_step("not_submitted");
              }}
              submited={(value) => {
                set_token(value);
                set_step("password_change");
              }}
            />
          )}
          {step === "password_change" && <ChangePasswordStep token={token} />}
        </Card>
      </Col>
    </Row>
  );
};

export default ResetPassword;
