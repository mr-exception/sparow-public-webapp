import React, { useState } from "react";
import Button from "ui-kit/Button/Botton";
import { Card, CardHeader, CardBody, CardFooter } from "ui-kit/Card";
import Col from "ui-kit/Col";
import Image from "ui-kit/Image";
import Row from "ui-kit/Row";
import Space from "ui-kit/Space";
import TextInput from "ui-kit/TextInput/TextInput";
import Link from "ui-kit/Link";
import Styles from "./Login.module.scss";
import { ApiValidationError } from "api/errors/api-validation";
import { AuthError } from "api/errors/auth";
import { useDispatch, useSelector } from "react-redux";
import { IAction, IInitializedState } from "types/storeActions";
import { storeUser } from "store/actions";
import AuthProfile from "api/profile/AuthProfile";
const Component: React.FC = () => {
  const [username, set_username] = useState<string>("");
  const [password, set_password] = useState<string>("");
  const [errors, set_errors] = useState<{ [key: string]: string[] }>({});
  const [loading, set_loading] = useState<boolean>(false);

  const [login_failed, set_login_failed] = useState<boolean>(false);
  const sparow = useSelector((state: IInitializedState) => state.sparow);

  const dispatch = useDispatch();

  const submit = async () => {
    set_errors({});
    set_login_failed(false);
    try {
      set_loading(true);
      const result: AuthProfile = await sparow.login({
        username,
        password,
        scopes: ["applications"],
      });

      localStorage.setItem("user", JSON.stringify(result.jsonObject()));
      localStorage.setItem("auth_token", result.access_token);
      localStorage.setItem("expires_at", result.expires_at.toString());

      dispatch<IAction>(storeUser(result));
      set_loading(false);
    } catch (error) {
      set_loading(false);
      if (error instanceof ApiValidationError) {
        set_errors(error.errors);
      }
      if (error instanceof AuthError) {
        set_login_failed(true);
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
                login to access your information
              </Col>
            </Row>
          </CardHeader>
          {/* end of card header */}

          {/* start of card body */}
          <CardBody>
            <Row align="start">
              {login_failed ? (
                <Col col={12} className={Styles.authError}>
                  incorrect username and password
                </Col>
              ) : null}
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
                  value={password}
                  onChange={set_password}
                  label="Password"
                  // icon={<FaLock />}
                  type="password"
                  errors={errors?.password}
                />
                <br />
                <Link
                  style={{
                    fontSize: 12,
                    color: "#8a8989",
                  }}
                  url={"https://google.com"}
                >
                  forget password?
                </Link>
              </Col>
              <Col className={Styles.mt25} col={12}>
                <Button fullWidth={true} onClick={submit} loading={loading}>
                  Login
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
                Not a Member?{" "}
                <Link
                  style={{
                    fontWeight: "bold",
                  }}
                  url="/register"
                >
                  Create an Account
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
