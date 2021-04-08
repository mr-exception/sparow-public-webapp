import { Subject } from "rxjs";

export class NetworkError implements Error {
  name = "AuthError";
  message = "auth error";
  stack?: string | undefined;
}
export const catchNetworkError = (
  error: Error,
  emitter: Subject<void>
): any => {
  if (error.message === "Network Error") {
    emitter.next();
    throw new NetworkError();
  }
  throw error;
};
