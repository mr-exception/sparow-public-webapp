import React from "react";
import Styles from "./Button.module.scss";

const Button: React.FC<IButtonProps> = ({
  children,
  fullWidth,
  round,
  onClick,
  loading = false,
  disabled = false,
  size = "medium",
}: IButtonProps) => {
  let btn_classes = !round ? `${Styles.button}` : `${Styles.btnRound}`;
  if (fullWidth) {
    btn_classes += ` ${Styles.btnBlock}`;
  }

  switch (size) {
    case "small":
      btn_classes += " " + Styles.sizeSmall;
      break;
    case "medium":
      btn_classes += " " + Styles.sizeMedium;
      break;
    case "large":
      btn_classes += " " + Styles.sizeLarge;
      break;
  }

  return (
    <button
      className={btn_classes}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading ? "..." : children}
    </button>
  );
};
export default Button;
