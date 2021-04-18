import React, { useState } from "react";
import Table from "ui-kit/Table/Table";
import { FaTrash } from "react-icons/fa";
import { ISessionsResultViewProps } from "../../interfaces";
import Row from "ui-kit/Row";
import Col from "ui-kit/Col";
import Pagination from "ui-kit/Pagination/Pagination";
import Session from "api/sessions/Session";
import Modal from "ui-kit/Modal/Modal";
import ModalHeader from "ui-kit/Modal/ModalHeader";
import ModalBody from "ui-kit/Modal/ModalBody";
import ModalFooter from "ui-kit/Modal/ModalFooter";
import Button from "ui-kit/Button/Botton";
import Sparow from "api/Sparow";
import { useDispatch, useSelector } from "react-redux";
import { ILoggedInState } from "types/storeActions";
import { updateSessions } from "store/actions";
import Badge from "ui-kit/Badge/Badge";
import Pane from "ui-kit/Pane/Pane";
import SessionRow from "../SessionRow/SessionRow";

const renderScopes = (scopes: string[]): any[] => {
  return scopes.map((scope) => {
    switch (scope) {
      case "applications":
        return <Badge color={1}>applications</Badge>;
      case "info":
        return <Badge color={2}>profile</Badge>;
      case "permissions":
        return <Badge color={3}>permissions</Badge>;
      case "sessions":
        return <Badge color={4}>sessions</Badge>;
      case "payment":
        return <Badge color={5}>payment</Badge>;
    }
  });
};

const ResultView: React.FC<ISessionsResultViewProps> = ({
  loading,
  pageChanged,
}: ISessionsResultViewProps) => {
  const dispatch = useDispatch();

  const sparow: Sparow = useSelector((state: ILoggedInState) => state.sparow);
  const [deleting_session, set_deleting_session] = useState<boolean>(false);
  const [selected_session, set_selected_session] = useState<Session>();

  // sessions state
  const { page_count, current_page, data } = useSelector(
    (state: ILoggedInState) => state.sessions
  );
  // terminate function
  const [terminating, set_terminating] = useState<boolean>(false);
  const terminateSession = async () => {
    set_terminating(true);
    try {
      if (selected_session) {
        // delete the selection session
        await sparow.deleteSession(selected_session.id);
        // reload the sessions list
        const results = await sparow.allSessions({
          page: current_page,
          pageSize: 10,
        });
        dispatch(
          updateSessions({
            data: results.data,
            current_page: results.meta.current_page,
            page_count: Math.ceil(results.meta.total / 10),
          })
        );
      }
      set_deleting_session(false);
      set_selected_session(undefined);
    } catch (error) {
      console.log(error);
    } finally {
      set_terminating(false);
    }
  };
  return (
    <Row>
      {data.map((session) => (
        <SessionRow session={session} key={session.id} />
      ))}
      <Col col={12}>
        <Pagination
          loading={loading === "loading"}
          current_page={current_page}
          pageChanged={(value) => {
            pageChanged(value);
          }}
          page_count={page_count}
        />
      </Col>
    </Row>
  );
};

export default ResultView;
