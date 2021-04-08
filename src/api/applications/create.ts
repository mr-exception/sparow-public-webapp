import { AxiosResponse } from "axios";
import Sparow from "../Sparow";
import { catchApiValidationError } from "../errors/api-validation";
import { catchAuthError } from "../errors/auth";
import { catchNetworkError } from "../errors/network";
import { catchNotFoundError } from "../errors/not-found";
import { IApplication, ICreateParams } from "../interfaces/application";
import Application from "./Application";
export function create(
  params: ICreateParams,
  sparow: Sparow
): Promise<Application> {
  return sparow.axios
    .post<{ application: IApplication }>(
      sparow.baseURL + "/applications",
      params,
      {}
    )
    .then(
      (response: AxiosResponse<{ application: IApplication }>) =>
        new Application(response.data.application, sparow)
    )
    .catch(catchApiValidationError)
    .catch(catchNotFoundError)
    .catch((error) => catchAuthError(error, sparow.authError$))
    .catch((error) => catchNetworkError(error, sparow.networkError$));
}
