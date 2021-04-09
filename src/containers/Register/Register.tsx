import React, { useState } from "react";
import Button from "ui-kit/Button/Botton";
import { Card, CardHeader, CardBody, CardFooter } from "ui-kit/Card";
import Col from "ui-kit/Col";
import Image from "ui-kit/Image";
import Row from "ui-kit/Row";
import Space from "ui-kit/Space";
import TextInput from "ui-kit/TextInput/TextInput";
import Link from "ui-kit/Link";
import Styles from "./Register.module.scss";
import { IProfile } from "api/interfaces/profile";
import { ApiValidationError } from "api/errors/api-validation";
import { IAction, IInitializedState } from "types/storeActions";
import { useDispatch, useSelector } from "react-redux";
const Component: React.FC = () => {
  const dispatch = useDispatch();
  const sparow = useSelector((state: IInitializedState) => state.sparow);

  const [username, set_username] = useState<string>("");
  const [email, set_email] = useState<string>("");
  const [phone, set_phone] = useState<string>("");
  const [password, set_password] = useState<string>("");
  const [errors, set_errors] = useState<{ [key: string]: string[] }>({});
  const [loading, set_loading] = useState<boolean>(false);

  const submit = async () => {
    set_errors({});
    try {
      set_loading(true);
      const result: IProfile = await sparow.registerPlain({
        username,
        email,
        phone,
        password,
        scopes: ["applications"],
      });
      dispatch<IAction>({ type: "LOG_IN", profile: result });
      set_loading(false);
    } catch (error) {
      set_loading(false);
      if (error instanceof ApiValidationError) {
        set_errors(error.errors);
      }
    }
  };
  return (
    <Row align="center" verticalAlign="center">
      <Col lg={4} md={6} sm={8} xs={12}>
        <Space height="45px" />
        <Card>
          {/* start of card header */}
          <CardHeader>
            <Row align="center">
              <Col col={12}>
                <Image
                  source="/assets/sparrow-logo.png"
                  alt="logo"
                  className={Styles.logoImage}
                />
              </Col>
              <Col col={12} className={Styles.logoText}>
                sparow
              </Col>
              <Col col={12} className={Styles.descriptionText}>
                register to access your information
              </Col>
            </Row>
          </CardHeader>
          {/* end of card header */}

          {/* start of card body */}
          <CardBody>
            <Row align="start">
              <Col col={12}>
                <TextInput
                  value={username}
                  onChange={set_username}
                  label="Username"
                  type="text"
                  errors={errors?.username}
                />
              </Col>
              <Col col={12}>
                <TextInput
                  value={email}
                  onChange={set_email}
                  label="Email"
                  type="email"
                  errors={errors?.email}
                />
              </Col>
              <Col col={12}>
                <TextInput
                  value={phone}
                  onChange={set_phone}
                  label="Phone Number"
                  type="text"
                  errors={errors?.phone}
                />
              </Col>
              <Col col={12}>
                <TextInput
                  value={password}
                  onChange={set_password}
                  label="Password"
                  type="password"
                  errors={errors?.password}
                />
              </Col>
              <Col className={Styles.mt25} col={12}>
                <Button onClick={submit} fullWidth={true} loading={loading}>
                  Register
                </Button>
              </Col>
              <Col
                col={12}
                className={
                  Styles.descriptionText +
                  " " +
                  Styles.text14 +
                  " " +
                  Styles.textCenter
                }
              >
                Already have An Account?{" "}
                <Link
                  style={{
                    fontWeight: "bold",
                  }}
                  url={"#"}
                >
                  Sign In
                </Link>
              </Col>
            </Row>
          </CardBody>
          {/* end of card body */}
          {/* start of card footer */}
          <CardFooter>
            <Row align="center">
              <Col
                lg={8}
                md={8}
                sm={12}
                xs={12}
                className={Styles.descriptionText + " " + Styles.text14}
              >
                <span className={Styles.signInOptionSeperator}>OR</span>
              </Col>
              <Col lg={8} md={8} sm={12} xs={12}>
                <Row align="center">
                  <Col col={12}>
                    <Button round={true}>
                      <Image
                        source="assets/google.svg"
                        alt="logo"
                        className={Styles.signInIcon}
                      />
                    </Button>
                    <Button round={true}>
                      <Image
                        source="assets/facebook.svg"
                        alt="logo"
                        className={Styles.signInIcon}
                      />
                    </Button>
                    <Button round={true}>
                      <Image
                        source="assets/twitter.svg"
                        alt="logo"
                        className={Styles.signInIcon}
                      />
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </CardFooter>
          {/* end of card footer */}
        </Card>
      </Col>
    </Row>
  );
};

export default Component;
