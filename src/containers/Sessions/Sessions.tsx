import React, { useEffect, useState } from "react";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";
import Wrapper from "ui-kit/Wrapper";
import { Card, CardBody } from "ui-kit/Card";
import { useDispatch, useSelector } from "react-redux";
import { ILoggedInState } from "types/storeActions";
import Sparow from "api/Sparow";
import LoadingView from "./components/LoadingView/LoadingView";
import ResultView from "./components/ResultView/ResultView";
import { updateSessions } from "store/actions";
import ModalHeader from "ui-kit/Modal/ModalHeader";
import Modal from "ui-kit/Modal/Modal";
import ModalBody from "ui-kit/Modal/ModalBody";
import ModalFooter from "ui-kit/Modal/ModalFooter";
import Button from "ui-kit/Button/Botton";
const Sessions: React.FC = () => {
  const dispatch = useDispatch();
  const sparow: Sparow = useSelector((state: ILoggedInState) => state.sparow);
  const { current_page } = useSelector(
    (state: ILoggedInState) => state.sessions
  );
  const sessions = useSelector((state: ILoggedInState) => state.sessions.data);

  // terminate function
  const [deleting_session, set_deleting_session] = useState<boolean>(false);
  const [terminating, set_terminating] = useState<boolean>(false);
  const terminateSession = async () => {
    set_terminating(true);
    try {
      // delete the selection session
      await sparow.deleteAllSessions();
      // reload the sessions list
      loadSessions();
      set_deleting_session(false);
    } catch (error) {
      console.log(error);
    } finally {
      set_terminating(false);
    }
  };
  // fetch sessions api
  const [loading, set_loading] = useState<LoadingStatus>("not_loaded");
  const loadSessions = async () => {
    try {
      set_loading("loading");
      const results = await sparow.allSessions({
        page: current_page,
        pageSize: 10,
      });
      dispatch(
        updateSessions({
          data: results.data,
          page_count: Math.ceil(results.meta.total / results.meta.per_page),
        })
      );
      set_loading("loaded");
    } catch (error) {
      console.log(error);
      set_loading("error");
    }
  };

  useEffect(() => {
    loadSessions();
  }, [current_page]);
  return (
    <Wrapper>
      <Row align="center" verticalAlign="center">
        <Col lg={10} md={10} sm={12} xs={12}>
          <Card>
            <CardBody>
              <Col col={12}>
                <h2>All Sessions</h2>
              </Col>
              <Col col={12} style={{ textAlign: "right" }}>
                <Button
                  size="small"
                  onClick={() => {
                    set_deleting_session(true);
                  }}
                >
                  delete all
                </Button>
              </Col>
              {loading === "not_loaded" ? <LoadingView /> : null}
              {loading === "loading" && sessions.length === 0 ? (
                <LoadingView />
              ) : null}
              {loading === "loaded" ||
              (sessions.length > 0 && loading === "loading") ? (
                <ResultView
                  sessions={sessions}
                  pageChanged={(current_page) => {
                    dispatch(updateSessions({ current_page }));
                  }}
                  loading={loading}
                />
              ) : null}
            </CardBody>
          </Card>
        </Col>
      </Row>
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
          terminate all sessions
        </ModalHeader>
        <ModalBody>
          are you sure to remove all session? current session wont be removed
        </ModalBody>
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
    </Wrapper>
  );
};

export default Sessions;
