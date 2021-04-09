import { AuthError } from "api/errors/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "store/actions";
import { IAction, IState } from "types/storeActions";
import Button from "ui-kit/Botton";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";

const Component: React.FC = () => {
  const dispatch = useDispatch();

  const profile = useSelector((state: IState) => state.profile);

  const submit = async () => {
    try {
      dispatch<IAction>(removeUser());
    } catch (error) {
      if (error instanceof AuthError) {
      }
    }
  };
  return (
    <Row>
      <Col col={12}>hello {profile?.username}</Col>
      <Col col={12}>
        <Button onClick={submit}>logout</Button>
      </Col>
    </Row>
  );
};

export default Component;
