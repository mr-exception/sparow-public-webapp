import React from "react";
import Styles from "./Pane.module.scss";

const Pane: React.FC<IPaneProps> = ({ children }: IPaneProps) => {
  return <div className={Styles.pane}>{children}</div>;
};

export default Pane;
