interface IModalProps {
  children: any;
  show: boolean;
  size?: "small" | "medium" | "large";
  onClose: () => void;
}

interface IModalHeaderProps {
  children: any;
  close: () => void;
}

interface IModalBodyProps {
  children: any;
}

interface IModalFooterProps {
  children: any;
}
