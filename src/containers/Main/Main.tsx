import React from "react";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";
import Wrapper from "ui-kit/Wrapper";
import { Card, CardBody } from "ui-kit/Card";
const Main: React.FC = () => {
  return (
    <Wrapper>
      <Row align="center" verticalAlign="center">
        <Col lg={12} md={12} sm={12} xs={12}>
          <Card>
            <CardBody>
              <h1 style={{ height: "500px" }}>Dashboard Page</h1>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Main;
