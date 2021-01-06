import React from "react";
import { Card, CardHeader, CardBody } from "ui-kit/Card";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";
import Space from "ui-kit/Space";
import Styles from "./Receipt.module.scss";
import Button from "ui-kit/Botton";
import { useHistory } from "react-router-dom";
const DoneState: React.FC = () => {
  const history = useHistory();
  return (
    <Row align="center" verticalAlign="center">
      <Col lg={10} md={10} sm={12} xs={12}>
        <Space height="45px" />
        <Card>
          <CardHeader>
            <Row align="center">
              <Col col={12} className={Styles.title}>
                Transaction canceled!
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Row align="center">
              <Col col={10} className={Styles.description}>
                <p>you canceled transaction</p>
              </Col>
            </Row>
            <Row align="center">
              <Col col={10} className={Styles.description}>
                <Button
                  onClick={() => {
                    history.push("/pay");
                  }}
                >
                  go back to details
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Space height={30} />
    </Row>
  );
};

export default DoneState;
