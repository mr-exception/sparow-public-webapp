import { AxiosResponse } from "axios";
import Sparow from "../Sparow";
import { catchApiValidationError } from "../errors/api-validation";
import { catchAuthError } from "../errors/auth";
import { catchNetworkError } from "../errors/network";
import { catchNotFoundError } from "../errors/not-found";
import { ISearchParams } from "../interfaces/session";
import { IList } from "../interfaces/general";
import { ISession } from "../interfaces/session";
import Session from "./Session";
export function all(
  params: ISearchParams,
  sparow: Sparow
): Promise<IList<Session>> {
  return sparow.axios
    .get<IList<ISession>>(sparow.baseURL + "/sessions", {
      params,
    })
    .then((response: AxiosResponse<IList<ISession>>) => ({
      ...response.data,
      data: response.data.data.map((item) => new Session(item, sparow)),
    }))
    .catch(catchApiValidationError)
    .catch(catchNotFoundError)
    .catch((error) => catchAuthError(error, sparow.authError$))
    .catch((error) => catchNetworkError(error, sparow.networkError$));
}
