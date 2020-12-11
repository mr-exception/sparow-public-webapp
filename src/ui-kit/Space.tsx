import React from "react";
import { ISpaceProps } from "./props.inteface";

const Space = ({ height = 15, width = "100%" }: ISpaceProps) => {
  return <div style={{ height, width }}></div>;
};

export default Space;
