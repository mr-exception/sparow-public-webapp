import { AxiosResponse } from "axios";
import Sparow from "../Sparow";
import { catchApiValidationError } from "../errors/api-validation";
import { catchAuthError } from "../errors/auth";
import { catchNetworkError } from "../errors/network";
import { catchNotFoundError } from "../errors/not-found";
import { IList } from "../interfaces/general";
import { IRedirectUrl, ISearchParams } from "../interfaces/redirect_url";
import RedirectUrl from "./RedirectUrl";
export function search(
  params: ISearchParams,
  sparow: Sparow
): Promise<IList<RedirectUrl>> {
  return sparow.axios
    .get<IList<IRedirectUrl>>(sparow.baseURL + "/redirect-urls", {
      params,
    })
    .then((response: AxiosResponse<IList<IRedirectUrl>>) => ({
      ...response.data,
      data: response.data.data.map((item) => new RedirectUrl(item, sparow)),
    }))
    .catch(catchApiValidationError)
    .catch(catchNotFoundError)
    .catch((error) => catchAuthError(error, sparow.authError$))
    .catch((error) => catchNetworkError(error, sparow.networkError$));
}
