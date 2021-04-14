interface IButtonProps {
  children?: any;
  fullWidth?: boolean;
  round?: boolean;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}
