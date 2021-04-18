import React, { useEffect, useState } from "react";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";
import Wrapper from "ui-kit/Wrapper";
import { Card, CardBody } from "ui-kit/Card";
import { useDispatch, useSelector } from "react-redux";
import { ILoggedInState } from "types/storeActions";
import Sparow from "api/Sparow";
import Session from "api/sessions/Session";
import LoadingView from "./components/LoadingView/LoadingView";
import TableView from "./components/TableView/TableView";
import { updateSessions } from "store/actions";
const Sessions: React.FC = () => {
  const dispatch = useDispatch();
  const sparow: Sparow = useSelector((state: ILoggedInState) => state.sparow);
  const page = useSelector(
    (state: ILoggedInState) => state.sessions.current_page
  );
  const sessions = useSelector((state: ILoggedInState) => state.sessions.data);
  const page_count = useSelector(
    (state: ILoggedInState) => state.sessions.page_count
  );
  const [loading, set_loading] = useState<LoadingStatus>("not_loaded");
  const loadSessions = async () => {
    try {
      set_loading("loading");
      const results = await sparow.allSessions({
        page,
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
  }, [page]);
  console.log(sessions);
  return (
    <Wrapper>
      <Row align="center" verticalAlign="center">
        <Col lg={10} md={10} sm={12} xs={12}>
          <Card>
            <CardBody>
              {loading === "not_loaded" ? <LoadingView /> : null}
              {loading === "loading" && sessions.length === 0 ? (
                <LoadingView />
              ) : null}
              {loading === "loaded" ||
              (sessions.length > 0 && loading === "loading") ? (
                <TableView
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
    </Wrapper>
  );
};

export default Sessions;
