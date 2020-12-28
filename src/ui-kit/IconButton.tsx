import React from "react";
import { IIconButtonProps } from "./props.inteface";
import Styles from "./IconButton.module.scss";

const IconButton:React.FC<IIconButtonProps> = ({ children }: IIconButtonProps) => {
  return <button className={Styles.button}>{children}</button>;
};
export default IconButton;
