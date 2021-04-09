import React from "react";
import Styles from "./Button.module.scss";

const Button: React.FC<IButtonProps> = ({
  children,
  fullWidth,
  round,
  onClick,
  loading = false,
}: IButtonProps) => {
  let btn_classes = !round ? `${Styles.button}` : `${Styles.btnRound}`;
  if (fullWidth) {
    btn_classes += ` ${Styles.btnBlock}`;
  }

  return (
    <button className={btn_classes} onClick={onClick}>
      {loading ? "..." : children}
    </button>
  );
};
export default Button;
