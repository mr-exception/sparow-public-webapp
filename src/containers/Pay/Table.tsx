import React from "react";
import Styles from "./Pay.module.scss";
interface IRow {
  title: string;
  application: string;
  price: string;
  offer: string;
  count: string;
  total_price: string;
}
interface IProps {
  rows?: IRow[];
}
const Table: React.FC<IProps> = ({ rows = [] }: IProps) => {
  let total_cost = 0;
  rows.forEach((row) => {
    total_cost += parseInt(row.total_price);
  });
  return (
    <div className={Styles.tableContainer}>
      <table className={Styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>application</th>
            <th>price</th>
            <th>offer</th>
            <th>count</th>
            <th>total price</th>
          </tr>
        </thead>
        <tbody className={Styles.body}>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.title}</td>
              <td>{row.application}</td>
              <td>{row.price} usd</td>
              <td>{row.offer} %</td>
              <td>{row.count}</td>
              <td>{row.total_price} usd</td>
            </tr>
          ))}
          <tr>
            <td> - </td>
            <td colSpan={5}>total cost</td>
            <td>{total_cost} usd</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
