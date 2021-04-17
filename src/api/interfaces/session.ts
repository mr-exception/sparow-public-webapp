import { IApplication } from "./application";
export interface ISearchParams {
  page?: number;
  pageSize?: number;
  id?: string;
  application_id?: string;
  others?: boolean;
  current?: boolean;
}
export interface ISession {
  id: string;
  application?: IApplication;
  agent: string;
  scopes: string[];
  current: boolean;
}
