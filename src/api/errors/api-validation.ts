import { AxiosError, AxiosResponse } from "axios";
export class ApiValidationError implements Error {
  name = "ApiValidation";
  message = "api validation error";
  stack?: string | undefined;
  constructor(public errors: { [field: string]: string[] }) {}
}
export const catchApiValidationError = (error: Error): any => {
  const axiosError = error as AxiosError;
  if (axiosError.response) {
    const response: AxiosResponse<any> = axiosError.response;
    if (response.status === 422) {
      throw new ApiValidationError(response.data.errors);
    }
  }
  throw error;
};
