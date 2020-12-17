export interface ITextInputProps {
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  disabled?: boolean;
  icon?: any;
  type?: "text" | "password" | "email";
  errors?: string[];
}
