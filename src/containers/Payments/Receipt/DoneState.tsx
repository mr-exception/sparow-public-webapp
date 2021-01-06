import React from "react";
import { Card, CardHeader, CardBody } from "ui-kit/Card";
import Col from "ui-kit/Col";
import PayGate from "ui-kit/Payments/PayGate/PayGate";
import Row from "ui-kit/Row";
import Space from "ui-kit/Space";
import Table from "ui-kit/Payments/CartTable/CartTable";
import Styles from "./Receipt.module.scss";
const DoneState: React.FC = () => {
  return (
    <Row align="center" verticalAlign="center">
      <Col lg={10} md={10} sm={12} xs={12}>
        <Space height="45px" />
        <Card>
          <CardHeader>
            <Row align="center">
              <Col col={12} className={Styles.title}>
                Receipt
              </Col>
              <Col col={10} className={Styles.description}>
                <p>transaction was successful</p>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Row align="center">
              <Col col={10}>
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
              <Col col={10} className={Styles.description}>
                <p>date: 2021/01/14 15:43</p>
                <p>ref ID: 03948293</p>
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
