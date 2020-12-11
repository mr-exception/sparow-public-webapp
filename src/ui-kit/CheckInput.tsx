import React from "react";
import { ICheckInputProps } from "./props.inteface";
import Styles from "./CheckInput.module.scss";

const TextInput = ({
  name,
  onChange = () => {},
  label = "label",
  value = "value",
  disabled = false,
  checked = false,
}: ICheckInputProps) => {
  return (
    <div
      className={Styles.container}
      onClick={() => {
        onChange(value);
      }}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => {
          onChange(value);
        }}
      />
      <span className={Styles.label}>{label}</span>
    </div>
  );
};
export default TextInput;
