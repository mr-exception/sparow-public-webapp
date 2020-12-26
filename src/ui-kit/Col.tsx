import React from "react";
import { IColProps } from "./props.inteface";

const Col:React.FC<IColProps> = ({
  style = {},
  children = "",
  className,
  col = 12,
  colOffset,
  xs,
  xsOffset,
  sm,
  smOffset,
  md,
  mdOffset,
  lg,
  lgOffset,
}: IColProps) => {
  let classes: string[] = [];
  if (className) {
    if (Array.isArray(className)) classes = classes.concat(className);
    else classes.push(className);
  }
  if (xs) {
    classes.push("col-xs-" + xs);
  }
  if (sm) {
    classes.push("col-sm-" + sm);
  }
  if (md) {
    classes.push("col-md-" + md);
  }
  if (lg) {
    classes.push("col-lg-" + lg);
  }
  if (col) {
    if (!(xs || sm || md || lg)) {
      classes.push("col-xs-" + col);
      classes.push("col-sm-" + col);
      classes.push("col-md-" + col);
      classes.push("col-lg" + col);
    }
  }
  if (xsOffset) {
    classes.push("col-offset-xs-" + xsOffset);
  }
  if (smOffset) {
    classes.push("col-offset-sm-" + smOffset);
  }
  if (mdOffset) {
    classes.push("col-offset-md-" + mdOffset);
  }
  if (lgOffset) {
    classes.push("col-offset-lg-" + lgOffset);
  }
  if (colOffset) {
    if (!(xs || sm || md || lg)) {
      classes.push("col-xs-offset-" + colOffset);
      classes.push("col-sm-offset-" + colOffset);
      classes.push("col-md-offset-" + colOffset);
      classes.push("col-lg-offset-" + colOffset);
    }
  }
  return (
    <div className={classes.join(" ")} style={style}>
      {children}
    </div>
  );
};

export default Col;
