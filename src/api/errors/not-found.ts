import { AxiosError, AxiosResponse } from "axios";
export class NotFoundError implements Error {
  name = "NotFoundError";
  message = "entity not found";
  stack?: string | undefined;
}
export const catchNotFoundError = (error: Error): any => {
  const axiosError = error as AxiosError;
  if (axiosError.response) {
    const response: AxiosResponse<any> = axiosError.response;
    if (response.status === 404) {
      throw new NotFoundError();
    }
  }
  throw error;
};
