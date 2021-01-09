import React, { useState } from "react";
import Styles from "./SelectInput.module.scss";
interface IOption {
  value: string;
  label: string;
}
interface IProps {
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  disabled?: boolean;
  icon?: any;
  options?: IOption[];
}
const SelectInput: React.FC<IProps> = ({
  value = "",
  onChange = () => {
    // do nothing.
  },
  label = "label",
  disabled = false,
  icon,
  options = [],
}: IProps) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.label}>{label}</div>
      <select
        className={Styles.input}
        disabled={disabled}
        value={value}
        onChange={(el) => {
          onChange(el.target.value);
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectInput;
