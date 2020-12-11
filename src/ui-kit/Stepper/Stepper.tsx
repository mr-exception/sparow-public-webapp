import React from "react";
import Styles from "./styles.module.scss";
import { IProps } from "./interface";

const Button = ({ steps = [], index = 0 }: IProps) => {
  const result = [];
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    const circleClasses = [Styles.stepCircle];
    const spaceClasses = [Styles.stepSpace];
    if (i <= index) circleClasses.push(Styles.active);
    if (i < index) spaceClasses.push(Styles.active);
    result.push(
      <div className={Styles.step} key={`circle-${i}`}>
        <div className={circleClasses.join(" ")} />
      </div>
    );
    if (i < steps.length - 1) {
      result.push(
        <div key={`space-${i}`} className={spaceClasses.join(" ")} />
      );
    }
  }
  return <div className={Styles.container}>{result}</div>;
};
export default Button;
