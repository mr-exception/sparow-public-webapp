type alignment = "start" | "center" | "end";
type verticalAlignment = "top" | "center" | "end";
type colFlex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export interface IRowProps {
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

  children?: React.ReactChild;
  style?: any;
  className?: string[] | string;
}
export interface IColProps {
  children?: React.ReactChild;
  style?: any;
  className?: string[] | string;

  col?: colFlex;
  colOffset?: colFlex;

  xs?: colFlex;
  sm?: colFlex;
  md?: colFlex;
  lg?: colFlex;

  xsOffset?: colFlex;
  smOffset?: colFlex;
  mdOffset?: colFlex;
  lgOffset?: colFlex;
}
export interface ICardProps {
  children?: React.ReactChild;
}
export interface ICardHeaderProps {
  children?: React.ReactChild;
}
export interface ICardBodyProps {
  children?: React.ReactChild;
}
export interface ICardFooterProps {
  children?: React.ReactChild;
}
export interface IButtonProps {
  children?: React.ReactChild;
  fullWidth?: boolean;
  round?: boolean;
  onClick?: () => void;
}
export interface IIconButtonProps {
  icon?: any;
  children?: React.ReactChild;
  onClick?: () => void;
}
export interface ITextInputProps {
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  disabled?: boolean;
  icon?: any;
  type?: "text" | "password" | "email";
}
export interface ICheckInputProps {
  checked?: boolean;
  name: string;
  onChange?: (value: string) => void;
  value?: string;
  label?: string;
  disabled?: boolean;
}
export interface ISpaceProps {
  height?: number | string;
  width?: number | string;
}
export interface IImageProps {
  source: any;
  alt?: string;
  style?: any;
  className?: string;
}

export interface ILinkProps {
  children?: React.ReactChild;
  url: string;
  style?: any;
  target?: "_blank" | "_self" | "_parent" | "_top";
}
