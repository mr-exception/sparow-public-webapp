import React from "react";
import Table from "ui-kit/Table/Table";
import { FaTrash } from "react-icons/fa";
import { ISessionsTableViewProps } from "../../interfaces";
import Row from "ui-kit/Row";
import Col from "ui-kit/Col";
const TableView: React.FC<ISessionsTableViewProps> = ({
  sessions,
}: ISessionsTableViewProps) => {
  return (
    <Row>
      <Col col={12}>
        <Table
          headers={[
            { key: "row", label: "#", width: "10%" },
            {
              key: "application",
              label: "application name",
              width: "20%",
            },
            {
              key: "agent",
              label: "agent",
              width: "20%",
            },
            { key: "scopes", label: "scopes", width: "40%" },
            { key: "menu", label: "", width: "10%" },
          ]}
          rows={sessions.map((session, index) => {
            const application_name = session.application
              ? session.application.title
              : "direct access";
            return {
              row: index + 1,
              application: application_name,
              agent: session.agent,
              scopes: session.scopes,
              menu: <FaTrash />,
            };
          })}
        />
      </Col>
    </Row>
  );
};

export default TableView;
