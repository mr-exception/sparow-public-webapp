import React from "react";
import { alignment, verticalAlignment } from "./props.inteface";

export interface IProps {
  align?: alignment;
  alignXS?: alignment;
  alignSM?: alignment;
  alignMD?: alignment;
  alignLG?: alignment;

  verticalAlign?: verticalAlignment;
  verticalAlignXS?: verticalAlignment;
  verticalAlignSM?: verticalAlignment;
  verticalAlignMD?: verticalAlignment;
  verticalAlignLG?: verticalAlignment;

  children?: any;
  style?: any;
  className?: string[] | string;

  onClick?: () => void;
}
const Row: React.FC<IProps> = ({
  children = "",
  style = {},
  align,
  alignLG,
  alignMD,
  alignSM,
  alignXS,
  verticalAlign,
  verticalAlignLG,
  verticalAlignMD,
  verticalAlignSM,
  verticalAlignXS,
  className,
  onClick = () => {
    return;
  },
}: IProps) => {
  let classes: string[] = ["row"];
  if (align)
    classes = classes.concat([
      `${align}-xs`,
      `${align}-sm`,
      `${align}-md`,
      `${align}-lg`,
    ]);
  if (alignLG) classes.push(`${alignLG}-lg`);
  if (alignMD) classes.push(`${alignMD}-md`);
  if (alignSM) classes.push(`${alignSM}-sm`);
  if (alignXS) classes.push(`${alignXS}-xs`);
  if (verticalAlign)
    classes = classes.concat([
      `${verticalAlign}-xs`,
      `${verticalAlign}-sm`,
      `${verticalAlign}-md`,
      `${verticalAlign}-lg`,
    ]);
  if (verticalAlignLG) classes.push(`${verticalAlignLG}-lg`);
  if (verticalAlignMD) classes.push(`${verticalAlignMD}-md`);
  if (verticalAlignSM) classes.push(`${verticalAlignSM}-sm`);
  if (verticalAlignXS) classes.push(`${verticalAlignXS}-xs`);
  if (className) {
    if (Array.isArray(className)) classes = classes.concat(className);
    else classes.push(className);
  }
  return (
    <div className={classes.join(" ")} style={style} onClick={onClick}>
      {children}
    </div>
  );
};

export default Row;
