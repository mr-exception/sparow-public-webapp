import Context from "Context";
import React, { useContext } from "react";
import { AuthError } from "sparow-api/dist/errors/auth";
import Button from "ui-kit/Botton";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";

const Component = () => {
  const context = useContext(Context);
  const submit = async () => {
    try {
      await context.sparow.logout();
      context.unauthorize();
    } catch (error) {
      if (error instanceof AuthError) {
      }
    }
  };
  return (
    <Row>
      <Col col={12}>hello {context.user.user.username}</Col>
      <Col col={12}>
        <Button onClick={submit}>logout</Button>
      </Col>
    </Row>
  );
};

export default Component;
