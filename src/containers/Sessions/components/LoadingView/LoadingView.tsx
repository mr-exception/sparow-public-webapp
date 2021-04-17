import React from "react";
import Row from "ui-kit/Row";
import Col from "ui-kit/Col";
const LoadingView: React.FC = () => {
  return (
    <Row>
      <Col lg={4} md={6} sm={12} xs={12}>
        loading...
      </Col>
    </Row>
  );
};

export default LoadingView;
