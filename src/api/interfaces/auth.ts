export interface IPlainLoginParams {
  username: string;
  password: string;
  scopes: string[];
  application_token?: string;
}
export interface IPlainRegisterParams {
  username: string;
  password: string;
  email: string;
  scopes: string[];
  application_token?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
}
