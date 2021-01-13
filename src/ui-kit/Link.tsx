import React from "react";
import { ILinkProps } from "./props.inteface";
import {Link as RouterLink} from "react-router-dom";
import Styles from "./Link.module.scss";

const Link:React.FC<ILinkProps> = ({ children, url, target, style }: ILinkProps) => {
  return (
    <RouterLink to={url} className={Styles.link} style={style} target={target}>
      {children}
    </RouterLink>
  );
};
export default Link;
