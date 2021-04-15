interface IImageInputProps {
  value?: File | string;
  onChange?: (value: File) => void;
  label?: string;
  disabled?: boolean;
  errors?: string[];
  crop?: number;
  onCroped?: (value: File) => void;
}

interface IUrlPreviewProps {
  value: string;
  onChange: (value: File) => void;
  label: string;
  disabled: boolean;
  errors: string[];
}

interface IImagePreviewProps {
  value: File;
  onChange: (value: File) => void;
  label: string;
  disabled: boolean;
  errors: string[];
  aspect: number;
  onCropped: (value: File) => void;
}
