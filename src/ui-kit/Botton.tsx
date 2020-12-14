import React from "react";
import { IButtonProps } from "./props.inteface";
import Styles from "./Button.module.scss";

const Button = ({ children, fullWidth, round, onClick }: IButtonProps) => {
  let btn_classes = !round ? `${Styles.button}` : `${Styles.btnRound}`;
  if (fullWidth) {
    btn_classes += ` ${Styles.btnBlock}`;
  }

  return <button className={btn_classes} onClick={onClick}>{children}</button>;
};
export default Button;
