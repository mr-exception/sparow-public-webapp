import React from "react";
import { Card, CardHeader, CardBody } from "ui-kit/Card";
import Col from "ui-kit/Col";
import PayGate from "ui-kit/PayGate/PayGate";
import Row from "ui-kit/Row";
import Space from "ui-kit/Space";
import Table from "./Table";
import Styles from "./Pay.module.scss";
const Component: React.FC = () => {
  return (
    <Row align="center" verticalAlign="center">
      <Col lg={10} md={10} sm={12} xs={12}>
        <Space height="45px" />
        <Card>
          <CardHeader>
            <Row align="center">
              <Col col={12}>checkout</Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Row align="start">
              <Col col={12}>
                <Table
                  rows={[
                    {
                      title: "membership account (3 month)",
                      application: "sinkron",
                      price: "13000",
                      offer: "2000",
                      count: "1",
                      total_price: "11000",
                    },
                    {
                      title: "gold package",
                      application: "absenat",
                      price: "250000",
                      offer: "0",
                      count: "3",
                      total_price: "750000",
                    },
                  ]}
                />
              </Col>
            </Row>
            <Row align="center">
              <Col col={12} className={Styles.gatesRow}>
                <PayGate
                  icon="/assets/pay-gate-logo/bitcoin.svg"
                  caption="bitcoin"
                  clicked={() => {
                    return;
                  }}
                  active={true}
                />
                <PayGate
                  icon="/assets/pay-gate-logo/pasargad.svg"
                  caption="pasargad bank"
                  clicked={() => {
                    return;
                  }}
                  active={true}
                />
                <PayGate
                  icon="/assets/pay-gate-logo/melli.svg"
                  caption="melli bank"
                  clicked={() => {
                    return;
                  }}
                  active={true}
                />
                <PayGate
                  icon="/assets/pay-gate-logo/saman.svg"
                  caption="saman bank"
                  clicked={() => {
                    return;
                  }}
                  active={true}
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Component;
