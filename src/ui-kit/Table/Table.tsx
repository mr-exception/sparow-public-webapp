import React from "react";
import Styles from "./Table.module.scss";
interface IRow {
  [key: string]: any;
}
interface IProps {
  headers: {
    [key: string]: string;
  };
  data: IRow[];
}

const Table: React.FC<IProps> = ({ data, headers }: IProps) => {
  const headerKeys = Object.keys(headers);
  return (
    <div className={Styles.container}>
      {" "}
      <table className={Styles.table}>
        <thead>
          <tr>
            {headerKeys.map((key, index) => {
              if (headers.hasOwnProperty(key)) {
                return (
                  <th className={Styles.headerCell} key={index}>
                    {headers[key]}
                  </th>
                );
              } else {
                return (
                  <th className={Styles.headerCell} key={index}>
                    unknown
                  </th>
                );
              }
            })}
          </tr>
        </thead>
        <tbody className={Styles.body}>
          {data.map((row, index) => {
            return (
              <tr className={Styles.row} key={index}>
                {headerKeys.map((key, index) => {
                  if (row.hasOwnProperty(key)) {
                    return (
                      <td className={Styles.cell} key={index}>
                        {row[key]}
                      </td>
                    );
                  } else {
                    return (
                      <td className={Styles.cell} key={index}>
                        unknown
                      </td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
