import Sparow from "../Sparow";
import { catchApiValidationError } from "../errors/api-validation";
import { catchAuthError } from "../errors/auth";
import { catchNetworkError } from "../errors/network";
import { catchNotFoundError } from "../errors/not-found";
import Profile from "./Profile";
export function getProfile(sparow: Sparow): Promise<Profile> {
  return sparow.axios
    .get<{ user: IProfile }>(sparow.baseURL + `/profile`)
    .then((response) => new Profile(response.data.user, sparow))
    .catch(catchApiValidationError)
    .catch(catchNotFoundError)
    .catch((error) => catchAuthError(error, sparow.authError$))
    .catch((error) => catchNetworkError(error, sparow.networkError$));
}
