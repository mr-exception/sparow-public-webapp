import { AxiosResponse } from "axios";
import Sparow from "../Sparow";
import { catchApiValidationError } from "../errors/api-validation";
import { catchAuthError } from "../errors/auth";
import { catchNetworkError } from "../errors/network";
import { catchNotFoundError } from "../errors/not-found";
import { IApplication, IEditParams } from "../interfaces/application";
import Application from "./Application";
export function edit(
  id: string,
  params: IEditParams,
  sparow: Sparow
): Promise<Application> {
  return sparow.axios
    .post<{ application: IApplication }>(
      sparow.baseURL + `/applications/${id}`,
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
