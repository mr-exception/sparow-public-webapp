import React, { useEffect, useState } from "react";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";
import Wrapper from "ui-kit/Wrapper";
import { Card, CardBody } from "ui-kit/Card";
import { useSelector } from "react-redux";
import { ILoggedInState } from "types/storeActions";
import Sparow from "api/Sparow";
import Session from "api/sessions/Session";
import LoadingView from "./components/LoadingView/LoadingView";
import TableView from "./components/TableView/TableView";
const Sessions: React.FC = () => {
  const sparow: Sparow = useSelector((state: ILoggedInState) => state.sparow);
  const [page, set_page] = useState<number>(1);
  const [sessions, set_sessions] = useState<Session[]>([]);
  const [loading, set_loading] = useState<LoadingStatus>("not_loaded");
  const loadSessions = async () => {
    try {
      set_loading("loading");
      const results = await sparow.allSessions({ page, pageSize: 15 });
      set_sessions(results.data);
      set_loading("loaded");
      console.log(results.data);
    } catch (error) {
      console.log(error);
      set_loading("error");
    }
  };

  useEffect(() => {
    loadSessions();
  }, [page]);
  return (
    <Wrapper>
      <Row align="center" verticalAlign="center">
        <Col lg={10} md={10} sm={12} xs={12}>
          <Card>
            <CardBody>
              {loading === "not_loaded" ? <LoadingView /> : null}
              {loading === "loading" ? <LoadingView /> : null}
              {loading === "loaded" ? <TableView sessions={sessions} /> : null}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Sessions;
