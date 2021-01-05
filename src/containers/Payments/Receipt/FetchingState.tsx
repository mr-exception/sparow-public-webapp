import React from "react";
import { Card, CardHeader, CardBody } from "ui-kit/Card";
import Col from "ui-kit/Col";
import PayGate from "ui-kit/Payments/PayGate/PayGate";
import Row from "ui-kit/Row";
import Space from "ui-kit/Space";
import Table from "ui-kit/Payments/CartTable/CartTable";
import Styles from "./Receipt.module.scss";
const FetchingState: React.FC = () => {
  return (
    <Row align="center" verticalAlign="center">
      <Col lg={4} md={6} sm={8} xs={12}>
        <Space height={150} />
        <Card>
          <CardBody>
            <Row align="center">
              <Col col={12}>please wait</Col>
              <Col col={12}>verifing transaction information...</Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Space height={30} />
    </Row>
  );
};

export default FetchingState;
