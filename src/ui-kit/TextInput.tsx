import React, { useState } from "react";
import { ITextInputProps } from "./props.inteface";
import Styles from "./TextInput.module.scss";

const TextInput = ({
  value = "",
  onChange = () => {},
  label = "label",
  disabled = false,
  type = "text",
  icon,
}: ITextInputProps) => {
  const [label_classes, set_label_classes] = useState<string[]>([
    Styles.label,
    Styles.labelOnFocus,
  ]);
  const [input_classes, set_input_classes] = useState<string[]>([
    Styles.input,
    Styles.inputOnFocus,
  ]);
  const [icon_classes, set_icon_classes] = useState<string[]>([
    Styles.icon,
    Styles.iconOnFocus,
  ]);
  const [container_classes, set_container_classes] = useState<string[]>([
    Styles.container,
    Styles.containerOnFocus,
  ]);
  const [focused, set_focused] = useState(false);

  if (focused) {
    if (!container_classes.includes(Styles.containerOnFocus)) {
      set_container_classes([...container_classes, Styles.containerOnFocus]);
    }
  } else {
    if (value !== "") {
      if (!container_classes.includes(Styles.containerOnFocus)) {
        set_container_classes([...container_classes, Styles.containerOnFocus]);
      }
      if (!input_classes.includes(Styles.input)) {
        set_input_classes([...input_classes, Styles.input]);
      }
      if (!icon_classes.includes(Styles.icon)) {
        set_icon_classes([...icon_classes, Styles.icon]);
      }
      if (!container_classes.includes(Styles.container)) {
        set_container_classes([...container_classes, Styles.container]);
      }
    } else if (value !== "") {
      if (label_classes !== [Styles.label, Styles.labelOnFocus]) {
        set_label_classes([Styles.label, Styles.labelOnFocus]);
      }
      if (input_classes !== [Styles.input, Styles.inputOnFocus]) {
        set_input_classes([Styles.input, Styles.inputOnFocus]);
      }
      if (icon_classes !== [Styles.icon, Styles.iconOnFocus]) {
        set_icon_classes([Styles.icon, Styles.iconOnFocus]);
      }

      // this is for now
      // later logic for real-time validation will be added here
      if (container_classes === [Styles.container, Styles.containerOnFocus]) {
        set_container_classes([Styles.container]);
      }
    }
  }
  if (disabled) {
    if (!container_classes.includes(Styles.containerDisabled)) {
      set_container_classes([...container_classes, Styles.containerDisabled]);
    }
  } else if (container_classes.includes(Styles.containerDisabled)) {
    set_container_classes(
      container_classes.filter((className: string) =>
        className === Styles.containerDisabled ? null : className
      )
    );
  }
  return (
    <div className={container_classes.join(" ")}>
      <input
        className={Styles.input}
        disabled={disabled}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => {
          set_focused(true);
        }}
        onBlur={() => {
          set_focused(false);
        }}
        type={type}
      />
      <label className={Styles.label}>{label}</label>
      <div className={Styles.icon}>{icon}</div>
    </div>
  );
};
export default TextInput;
