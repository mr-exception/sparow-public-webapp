export interface ISendStepProps {
  email: string;
  set_email: (value: string) => void;
  phone: string;
  set_phone: (value: string) => void;
  method: "email" | "phone";
  set_method: (value: "email" | "phone") => void;
  submit: () => void;
}
export interface IVerifyEmailStepProps {
  email: string;
}
export interface IVerifyPhoneStepProps {
  phone: string;
  goBack: () => void;
  submited: (token: string) => void;
}
export interface IChangePasswordStepProps {
  token: string;
}
