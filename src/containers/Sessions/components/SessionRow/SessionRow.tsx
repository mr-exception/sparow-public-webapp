import React, { useState } from "react";
import Sparow from "api/Sparow";
import { useDispatch, useSelector } from "react-redux";
import { ILoggedInState } from "types/storeActions";
import { updateSessions } from "store/actions";
import Badge from "ui-kit/Badge/Badge";
import Pane from "ui-kit/Pane/Pane";
import { ISessionRowProps } from "containers/Sessions/interfaces";
import Styles from "./Styles.module.scss";
import Col from "ui-kit/Col";
import { FaTrash } from "react-icons/fa";
import ModalHeader from "ui-kit/Modal/ModalHeader";
import ModalBody from "ui-kit/Modal/ModalBody";
import ModalFooter from "ui-kit/Modal/ModalFooter";
import Button from "ui-kit/Button/Botton";
import Modal from "ui-kit/Modal/Modal";

const renderScopes = (scopes: string[]): any[] => {
  return scopes.map((scope) => {
    switch (scope) {
      case "applications":
        return (
          <Badge key="applications" size="small" color={1}>
            applications
          </Badge>
        );
      case "info":
        return (
          <Badge key="profile" size="small" color={2}>
            profile
          </Badge>
        );
      case "permissions":
        return (
          <Badge key="permissions" size="small" color={3}>
            permissions
          </Badge>
        );
      case "sessions":
        return (
          <Badge key="sessions" size="small" color={4}>
            sessions
          </Badge>
        );
      case "payment":
        return (
          <Badge key="payment" size="small" color={5}>
            payment
          </Badge>
        );
    }
  });
};

const SessionRow: React.FC<ISessionRowProps> = ({
  session,
}: ISessionRowProps) => {
  const dispatch = useDispatch();

  const sparow: Sparow = useSelector((state: ILoggedInState) => state.sparow);
  const [deleting_session, set_deleting_session] = useState<boolean>(false);

  // sessions state
  const { current_page } = useSelector(
    (state: ILoggedInState) => state.sessions
  );
  // terminate function
  const [terminating, set_terminating] = useState<boolean>(false);
  const terminateSession = async () => {
    set_terminating(true);
    try {
      // delete the selection session
      await sparow.deleteSession(session.id);
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
      set_deleting_session(false);
    } catch (error) {
      console.log(error);
    } finally {
      set_terminating(false);
    }
  };
  return (
    <Col col={12}>
      <Pane>
        <div className={Styles.idLabel}>{session.getIdCheckSum()}</div>
        <div className={Styles.removeLabel}>
          {session.current ? null : (
            <FaTrash
              onClick={() => {
                set_deleting_session(true);
              }}
            />
          )}
        </div>
        <Col className={Styles.propRow} col={12}>
          <span className={Styles.propTitle}>application:</span>{" "}
          {session.getApplicationTitle()}{" "}
          <i style={{ fontSize: 13 }}>({session.ip})</i>
        </Col>
        <Col className={Styles.propRow} col={12}>
          <span className={Styles.propTitle}>agent:</span> {session.agent}
        </Col>
        <Col className={Styles.propRow} col={12}>
          <span className={Styles.propTitle}>scopes:</span>{" "}
          {renderScopes(session.scopes)}
        </Col>
        <Col className={Styles.propRow} col={12}>
          <span className={Styles.propTitle}>last request:</span>{" "}
          {session.current ? (
            <Badge size="small" color={5}>
              current session
            </Badge>
          ) : (
            session.getLastRequestString()
          )}
        </Col>
      </Pane>
      <Modal
        size="small"
        show={deleting_session}
        onClose={() => {
          set_deleting_session(false);
        }}
      >
        <ModalHeader
          close={() => {
            set_deleting_session(false);
          }}
        >
          terminate session
        </ModalHeader>
        <ModalBody>are you sure to delete this session?</ModalBody>
        <ModalFooter>
          <Button
            size="small"
            loading={terminating}
            disabled={terminating}
            onClick={terminateSession}
          >
            yes
          </Button>
          <Button
            size="small"
            disabled={terminating}
            onClick={() => {
              set_deleting_session(false);
            }}
          >
            no
          </Button>
        </ModalFooter>
      </Modal>
    </Col>
  );
};

export default SessionRow;
