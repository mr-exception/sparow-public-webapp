export interface ISearchParams {
  page?: number;
  pageSize?: number;
  id?: string;
  title?: string;
}
export interface IEditParams {
  title?: string;
  description?: string;
}
export interface ICreateParams {
  title: string;
  description: string;
}
export interface IApplication {
  id: string;
  title: string;
  description: string;
  tokens: {
    public: string;
    secret: string;
  };
  created_at: Date;
  updated_at: Date;
}
