import React from "react";
import { IAvatarProps } from "./props.inteface";
import Styles from "./Avatar.module.scss";

const Button:React.FC<IAvatarProps> = ({ children, size, round }: IAvatarProps) => {
  let avatar_classes = `${Styles.avatar}`
  if (round) {
    avatar_classes += ` ${Styles.round}`;
  }

  return <div className={avatar_classes} style={{width:size,height:size}}>{children}</div>;
};
export default Button;
