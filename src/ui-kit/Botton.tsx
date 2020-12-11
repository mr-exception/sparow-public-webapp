import React from "react";
import { IButtonProps } from "./props.inteface";
import Styles from "./Button.module.scss";

const Button = ({ children, fullWidth, round }: IButtonProps) => {
  let btn_classes = !round ? `${Styles.button}` : `${Styles.btnRound}`;
  if (fullWidth) {
    btn_classes += ` ${Styles.btnBlock}`;
  }

  return <button className={btn_classes}>{children}</button>;
};
export default Button;
