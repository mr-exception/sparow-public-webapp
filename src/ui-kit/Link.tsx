import React from "react";
import { ILinkProps } from "./props.inteface";
import Styles from "./Link.module.scss";

const Link = ({ children, url, target, style }: ILinkProps) => {
  return (
    <a href={url} className={Styles.link} style={style} target={target}>
      {children}
    </a>
  );
};
export default Link;
