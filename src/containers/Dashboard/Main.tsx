import React from "react";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";
import Space from "ui-kit/Space";
import Wrapper from 'ui-kit/Wrapper';
import {Card,CardBody} from "ui-kit/Card";
const Main:React.FC = () => {
  return (
    <>
      <Space height="45px" />
      <Wrapper>
        <Row align="center" verticalAlign="center">
          <Col lg={8} md={10} sm={12} xs={12}>
            <Card>
              <CardBody><h1 style={{height:"50vh"}}>Dashboard Page</h1></CardBody>
            </Card>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};

export default Main;