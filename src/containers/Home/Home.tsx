import { AuthError } from "api/errors/auth";
import { emptyProfile, IProfile } from "api/interfaces/profile";
import Context from "Context";
import React, { useContext, useState, useEffect } from "react";
import Button from "ui-kit/Botton";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";

const Component: React.FC = () => {
  const context = useContext(Context);
  const [user, set_user] = useState<IProfile>(emptyProfile);
  const submit = async () => {
    try {
      await context.sparow.logout();
      context.unauthorize();
    } catch (error) {
      if (error instanceof AuthError) {
      }
    }
  };
  const didMount = () => {
    console.log("mounting");
    context.sparow.profile$.subscribe((data) => {
      console.log(data);
      set_user(data);
    });
  };
  useEffect(didMount, [context]);
  return (
    <Row>
      <Col col={12}>hello {user.username}</Col>
      <Col col={12}>
        <Button onClick={submit}>logout</Button>
      </Col>
    </Row>
  );
};

export default Component;
