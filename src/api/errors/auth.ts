import { AxiosError, AxiosResponse } from "axios";
import { Subject } from "rxjs";
export class AuthError implements Error {
  name = "AuthError";
  message = "auth error";
  stack?: string | undefined;
}
export const catchAuthError = (error: Error, emitter: Subject<void>): any => {
  const axiosError = error as AxiosError;
  if (axiosError.response) {
    const response: AxiosResponse<any> = axiosError.response;
    if (response.status === 401) {
      emitter.next();
      throw new AuthError();
    }
  }
  throw error;
};
