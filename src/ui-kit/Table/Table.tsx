import React from "react";
import Styles from "./Table.module.scss";
const Table: React.FC<ITableProps> = ({ headers, rows }: ITableProps) => {
  return (
    <table cellSpacing="0" className={Styles.table}>
      <tbody>
        <tr className={Styles.header}>
          {headers.map((header) => (
            <th style={{ width: header.width }} key={header.key}>
              {header.label}
            </th>
          ))}
        </tr>
        {rows.map((row: ITableRow, index: number) => {
          const cells: any[] = [];
          headers.forEach((header) => {
            cells.push(
              <td style={{ width: header.width }}>{row[header.key]}</td>
            );
          });
          return (
            <tr className={Styles.row} key={index}>
              {cells}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
