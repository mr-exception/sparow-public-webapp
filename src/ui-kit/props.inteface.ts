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

  children?: any;
  style?: any;
  className?: string[] | string;
}
export interface IColProps {
  children?: any;
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
  children?: any;
}
export interface ICardHeaderProps {
  children?: any;
}
export interface ICardBodyProps {
  children?: any;
}
export interface ICardFooterProps {
  children?: any;
}
export interface IButtonProps {
  children?: any;
  fullWidth?: boolean;
  round?: boolean;
  onClick?: () => void;
}

export interface IAvatarProps {
  children?: any;
  size: number;
  round?: boolean;
  onClick?: () => void;
}
export interface IIconButtonProps {
  icon?: any;
  children?: any;
  onClick?: () => void;
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
  children?: any;
  url: string;
  style?: any;
  target?: "_blank" | "_self" | "_parent" | "_top";
}
