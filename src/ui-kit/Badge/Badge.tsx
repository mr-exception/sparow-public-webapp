import React from "react";
import Styles from "./Styles.module.scss";

const Badge: React.FC<IBadgeProps> = ({
  children,
  color = 1,
  size = "small",
}: IBadgeProps) => {
  return (
    <span
      className={`${Styles.badge} ${Styles["color" + color]} ${Styles[size]}`}
    >
      {children}
    </span>
  );
};

export default Badge;
