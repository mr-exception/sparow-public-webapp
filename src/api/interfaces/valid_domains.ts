import { IApplication } from "./application";
export interface ISearchParams {
  page?: number;
  pageSize?: number;
  id?: string;
  application_id?: string;
}
export interface IValidDomains {
  id: string;
  application: IApplication;
  url: string;
}
