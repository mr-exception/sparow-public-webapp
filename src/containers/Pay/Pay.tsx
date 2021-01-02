import React from "react";
import { Card, CardHeader, CardBody } from "ui-kit/Card";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";
import Space from "ui-kit/Space";
import Table from "ui-kit/Table/Table";
const Component: React.FC = () => {
  return (
    <Row align="center" verticalAlign="center">
      <Col lg={6} md={8} sm={8} xs={12}>
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
                  data={[
                    {
                      row: 1,
                      title: "membership account (3 month)",
                      application: "sinkron",
                      price: "13000t",
                      offer: "2000t",
                      count: "1",
                      total_price: "11000t",
                    },
                  ]}
                  headers={{
                    row: "#",
                    title: "title",
                    application: "application",
                    price: "price",
                    offer: "offer",
                    count: "count",
                    total_price: "total price",
                  }}
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
