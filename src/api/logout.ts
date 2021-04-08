import Axios from "axios";
import Sparow from "./Sparow";
import { catchApiValidationError } from "./errors/api-validation";
import { catchAuthError } from "./errors/auth";
import { catchNetworkError } from "./errors/network";
import { catchNotFoundError } from "./errors/not-found";

export function logout(sparow: Sparow): Promise<void> {
  return sparow.axios
    .post(sparow.baseURL + "/logout", {})
    .then(() => {
      sparow.axios = Axios.create({
        baseURL: sparow.baseURL,
      });
    })
    .catch(catchApiValidationError)
    .catch(catchNotFoundError)
    .catch((error) => catchAuthError(error, sparow.authError$))
    .catch((error) => catchNetworkError(error, sparow.networkError$));
}
