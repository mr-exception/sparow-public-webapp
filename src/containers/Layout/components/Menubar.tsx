import React from "react";
import Styles from "./MenuBar.module.scss";

interface IProps {
  children: any;
}
const Button: React.FC<IProps> = ({ children }: IProps) => {
  return <div className={Styles.burgerBtn}>{children}</div>;
};
export default Button;
