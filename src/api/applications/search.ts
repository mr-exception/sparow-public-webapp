import { AxiosResponse } from "axios";
import Sparow from "../Sparow";
import { catchApiValidationError } from "../errors/api-validation";
import { catchAuthError } from "../errors/auth";
import { catchNetworkError } from "../errors/network";
import { catchNotFoundError } from "../errors/not-found";
import { IApplication, ISearchParams } from "../interfaces/application";
import { IList } from "../interfaces/general";
import Application from "./Application";
export function search(
  params: ISearchParams,
  sparow: Sparow
): Promise<IList<Application>> {
  return sparow.axios
    .get<IList<IApplication>>(sparow.baseURL + "/applications", {
      params,
    })
    .then((response: AxiosResponse<IList<IApplication>>) => ({
      ...response.data,
      data: response.data.data.map((item) => new Application(item, sparow)),
    }))
    .catch(catchApiValidationError)
    .catch(catchNotFoundError)
    .catch((error) => catchAuthError(error, sparow.authError$))
    .catch((error) => catchNetworkError(error, sparow.networkError$));
}
