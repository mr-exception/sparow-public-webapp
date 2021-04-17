interface ITableCol {
  label: string;
  width: string;
  key: string;
}
interface ITableRow {
  [key: string]: any;
}
interface ITableProps {
  headers: ITableCol[];
  rows: ITableRow;
}
