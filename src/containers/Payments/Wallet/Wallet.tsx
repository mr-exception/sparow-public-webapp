import React from "react";
import { Card, CardBody, CardHeader } from "ui-kit/Card";
import Col from "ui-kit/Col";
import Transactions from "ui-kit/Payments/Transactions/Transactions";
import Row from "ui-kit/Row";
import Space from "ui-kit/Space";
import Styles from "./Wallet.module.scss";
const Component: React.FC = () => {
  return (
    <Row align="center" verticalAlign="center">
      <Space height={64} />
      <Col lg={10} md={10} sm={12} xs={12}>
        <Card>
          <CardHeader>
            <Row>
              <Col className={Styles.title}>wallet</Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <img className={Styles.walletIcon} src="/assets/wallet.svg" />
              </Col>
              <Col lg={8} md={8} sm={12} xs={12} className={Styles.details}>
                <p>balance: 35.05 usd</p>
              </Col>
            </Row>
            <Row>
              <Col col={12}>
                <Transactions
                  rows={[
                    {
                      id: "48487982",
                      amount: "36 usd",
                      date: Date.now(),
                      method: "online",
                      type: "charge",
                      status: "paid",
                      refId: "489389232734",
                    },
                    {
                      id: "48487982",
                      amount: "12 usd",
                      date: Date.now(),
                      method: "online",
                      type: "payment",
                      status: "paid",
                      refId: "489732782734",
                    },
                    {
                      id: "48487982",
                      amount: "43 usd",
                      date: Date.now(),
                      method: "credit",
                      type: "payment",
                      status: "paid",
                      refId: "489394837434",
                    },
                  ]}
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
