import React from "react";
import { IRowProps } from "./props.inteface";

const Row = ({
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
}: IRowProps) => {
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
    <div className={classes.join(" ")} style={style}>
      {children}
    </div>
  );
};

export default Row;
