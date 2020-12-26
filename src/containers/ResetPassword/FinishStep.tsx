import React from "react";
import Button from "ui-kit/Botton";
import Card from "ui-kit/Card";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";
import { useHistory } from "react-router-dom";
const FinishStep:React.FC = () => {
  const history = useHistory();
  return (
    <>
      <Card.Body>
        <Row align="start">
          <Col col={12} style={{ textAlign: "justify" }}>
            <h4>
              you have changed your password successfully, now you can login
              again
            </h4>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        <Row style={{ marginTop: 15 }}>
          <Col col={12}>
            <Row align="end">
              <Button
                onClick={() => {
                  history.push("/login");
                }}
              >
                login
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </>
  );
};

export default FinishStep;
