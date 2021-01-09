import React, { useState } from "react";
import { Link } from "react-router-dom";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";
import SelectInput from "ui-kit/SelectInput/SelectInput";
import Styles from "./Transactions.module.scss";
interface IRow {
  id: string;
  amount: string;
  date: number;
  status: string;
  type: string;
  method: string;
  refId: string;
}
interface IProps {
  rows?: IRow[];
}
const Transactions: React.FC<IProps> = ({ rows = [] }: IProps) => {
  const [type, set_type] = useState<string>("all");
  const renderDescription = (row: IRow): any => {
    switch (row.type) {
      case "charge":
        return <td></td>;
      case "payment":
        return (
          <td>
            see <Link to="/receipt">details</Link>
          </td>
        );
    }
  };
  return (
    <Row align="center">
      <Col col={12}>
        <Row>
          <Col col={4}>
            <SelectInput
              value={type}
              onChange={set_type}
              label="transaction type"
              options={[
                { value: "all", label: "all" },
                { value: "payment", label: "payment" },
                { value: "charge", label: "charge" },
                { value: "withdraw", label: "withdraw" },
              ]}
            />
          </Col>
        </Row>
      </Col>
      <Col col={12}>
        <div className={Styles.tableContainer}>
          <table className={Styles.table}>
            <thead>
              <tr>
                <th style={{ width: "3%" }}>#</th>
                <th style={{ width: "15%" }}>amount</th>
                <th style={{ width: "15%" }}>date</th>
                <th style={{ width: "10%" }}>status</th>
                <th style={{ width: "10%" }}>type</th>
                <th style={{ width: "10%" }}>method</th>
                <th style={{ width: "20%" }}>refrence Id</th>
                <th></th>
              </tr>
            </thead>
            <tbody className={Styles.body}>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{row.amount}</td>
                  <td>{row.date}</td>
                  <td>{row.status}</td>
                  <td>{row.type}</td>
                  <td>{row.method}</td>
                  <td>{row.refId}</td>
                  {renderDescription(row)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Col>
    </Row>
  );
};

export default Transactions;
