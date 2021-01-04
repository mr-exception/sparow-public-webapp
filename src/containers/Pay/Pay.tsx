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
              <Col col={12} className={Styles.title}>
                Payment
              </Col>
              <Col col={10} className={Styles.description}>
                <p>
                  Dolore minim duis ex amet eiusmod ipsum id consequat tempor
                  excepteur sint enim. Qui eu consectetur excepteur occaecat eu
                  mollit. Et reprehenderit nisi culpa adipisicing eu sit ex
                  culpa dolor aute deserunt ipsum anim.
                </p>
                <p>
                  Commodo sit pariatur et dolor laboris commodo elit veniam
                  excepteur nisi. Incididunt enim sunt nostrud commodo ex. Aute
                  nisi ipsum ullamco adipisicing proident tempor. Mollit labore
                  reprehenderit laboris anim amet magna deserunt deserunt.
                  Ullamco sint tempor sint amet pariatur dolore amet occaecat id
                  in sit consectetur minim fugiat. Tempor dolor ad Lorem
                  laborum. Nulla elit velit elit non deserunt Lorem Lorem.
                </p>
                <p>
                  Incididunt aute et occaecat sunt. Nostrud dolor aliqua laborum
                  labore incididunt laborum nulla qui dolore dolor est qui
                  excepteur excepteur. Do pariatur do deserunt occaecat tempor
                  nisi excepteur incididunt sint sunt amet incididunt voluptate.
                  Id culpa sit deserunt deserunt culpa velit velit id labore.
                  Minim sit duis enim excepteur consectetur laboris excepteur
                  exercitation. Aliqua ullamco cupidatat do ad duis sint
                  excepteur officia magna consequat tempor.
                </p>
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
              <Col col={12} className={Styles.choosePayment}>
                choose your payment method
              </Col>
            </Row>
            <Row align="center">
              <Col col={12} className={Styles.gatesRow}>
                <Row align="center">
                  <Col lg={2} md={3} sm={12} xs={12}>
                    <PayGate
                      icon="/assets/pay-gate-logo/bitcoin.svg"
                      caption="bitcoin"
                      onClick={() => {
                        alert("choosed bitcoin");
                      }}
                    />
                  </Col>
                  <Col lg={2} md={3} sm={12} xs={12}>
                    <PayGate
                      icon="/assets/pay-gate-logo/pasargad.svg"
                      caption="pasargad bank"
                      onClick={() => {
                        alert("choosed pasargad bank");
                      }}
                    />
                  </Col>
                  <Col lg={2} md={3} sm={12} xs={12}>
                    <PayGate
                      icon="/assets/pay-gate-logo/melli.svg"
                      caption="melli bank"
                      onClick={() => {
                        alert("choosed melli bank");
                      }}
                    />
                  </Col>
                  <Col lg={2} md={3} sm={12} xs={12}>
                    <PayGate
                      icon="/assets/pay-gate-logo/saman.svg"
                      caption="saman bank"
                      onClick={() => {
                        alert("choosed saman bank");
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Space height={30} />
    </Row>
  );
};

export default Component;
