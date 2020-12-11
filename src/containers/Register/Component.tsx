import React, { useState } from "react";
import Button from "ui-kit/Botton";
import Card from "ui-kit/Card";
import Col from "ui-kit/Col";
import Image from "ui-kit/Image";
import Row from "ui-kit/Row";
import Space from "ui-kit/Space";
import TextInput from "ui-kit/TextInput";
import Link from "ui-kit/Link";
import Styles from "./Register.module.scss";
import { IconContext } from "react-icons";
import { FaGoogle, FaGithub, FaTwitter, FaUser, FaLock } from "react-icons/fa";
const Component = () => {
  const [username, set_username] = useState("");
  const [email, set_email] = useState("");
  const [phone_number, set_phone_number] = useState("");
  const [password, set_password] = useState("");
  return (
    <Row align="center" verticalAlign="center">
      <Col lg={4} md={6} sm={8} xs={12}>
        <Space height="45px" />
        <Card>
          {/* start of card header */}
          <Card.Header>
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
          </Card.Header>
          {/* end of card header */}

          {/* start of card body */}
          <Card.Body>
            <Row align="start">
              <Col col={12}>
                <TextInput
                  value={username}
                  onChange={set_username}
                  label="Username"
                  // icon={
                  //   <IconContext.Provider
                  //     value={{ color: "blue", size: "10px" }}
                  //   >
                  //     <div>
                  //       <FaUser />
                  //     </div>
                  //   </IconContext.Provider>
                  // }
                  type="text"
                />
              </Col>
              <Col col={12}>
                <TextInput
                  value={email}
                  onChange={set_email}
                  label="Email"
                  // icon={<FaLock />}
                  type="email"
                />
              </Col>
              <Col col={12}>
                <TextInput
                  value={phone_number}
                  onChange={set_phone_number}
                  label="Phone Number"
                  // icon={<FaLock />}
                  type="text"
                />
              </Col>
              <Col col={12}>
                <TextInput
                  value={password}
                  onChange={set_password}
                  label="Password"
                  // icon={<FaLock />}
                  type="password"
                />
              </Col>
              <Col className={Styles.mt25} col={12}>
                <Button fullWidth={true}>Register</Button>
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
          </Card.Body>
          {/* end of card body */}
          {/* start of card footer */}
          <Card.Footer>
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
          </Card.Footer>
          {/* end of card footer */}
        </Card>
      </Col>
    </Row>
  );
};

export default Component;
