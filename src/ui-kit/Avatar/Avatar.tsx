import React from "react";
import Styles from "./Avatar.module.scss";

const Avatar: React.FC<IAvatarProps> = ({
  caption,
  size,
  round,
  src,
  style,
}: IAvatarProps) => {
  let avatar_classes = `${Styles.avatar}`;
  if (round) {
    avatar_classes += ` ${Styles.round}`;
  }

  const summerized_caption = caption
    .split(/[-_\s]/)
    .map((part) => part.charAt(0))
    .join(" ");
  if (src) {
    return (
      <div className={avatar_classes} style={{ ...style }}>
        <img className={`${Styles.avatarImage} ${Styles.round}`} src={src} />
      </div>
    );
  }
  return (
    <div
      className={avatar_classes}
      style={{ width: size, height: size, ...style }}
    >
      {summerized_caption}
    </div>
  );
};
export default Avatar;
