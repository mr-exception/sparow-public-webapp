export interface IImageInputProps {
  value?: File | string;
  onChange?: (value: File) => void;
  label?: string;
  disabled?: boolean;
  errors?: string[];
  cropToSqure?: boolean;
}
