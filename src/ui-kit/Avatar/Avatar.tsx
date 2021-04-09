import React from "react";
import Styles from "./Avatar.module.scss";

const Button: React.FC<IAvatarProps> = ({
  caption,
  size,
  round,
}: IAvatarProps) => {
  let avatar_classes = `${Styles.avatar}`;
  if (round) {
    avatar_classes += ` ${Styles.round}`;
  }

  const summerized_caption = caption
    .split(/[-_\s]/)
    .map((part) => part.charAt(0))
    .join(" ");

  return (
    <div className={avatar_classes} style={{ width: size, height: size }}>
      {summerized_caption}
    </div>
  );
};
export default Button;
