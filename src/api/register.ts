import Axios, { AxiosResponse } from "axios";
import Sparow from "./Sparow";
import { catchApiValidationError } from "./errors/api-validation";
import { catchAuthError } from "./errors/auth";
import { catchNetworkError } from "./errors/network";
import { catchNotFoundError } from "./errors/not-found";
import { IPlainRegisterParams } from "./interfaces/auth";
import { IProfile } from "./interfaces/profile";
import { subProfile } from "./socket-handlers/profile";
export const plainRegsiter = async (
  data: IPlainRegisterParams,
  sparow: Sparow
): Promise<IProfile> => {
  return sparow.axios
    .post<{ user: IProfile }>(sparow.baseURL + "/register/plain", {
      ...data,
      agent: sparow.agent,
    })
    .then((response: AxiosResponse<{ user: IProfile }>) => {
      sparow.profile$.next(response.data.user);
      sparow.authToken = response.data.user.access_token;
      sparow.axios = Axios.create({
        baseURL: sparow.baseURL,
        headers: { Authorization: "Bearer " + response.data.user.access_token },
      });
      // subscribe to profile channel
      subProfile(sparow, response.data.user.id);
      return response.data.user;
    })
    .catch(catchApiValidationError)
    .catch(catchNotFoundError)
    .catch((error) => catchAuthError(error, sparow.authError$))
    .catch((error) => catchNetworkError(error, sparow.networkError$));
};
