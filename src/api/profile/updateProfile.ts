import Sparow from "../Sparow";
import { catchApiValidationError } from "../errors/api-validation";
import { catchAuthError } from "../errors/auth";
import { catchNetworkError } from "../errors/network";
import { catchNotFoundError } from "../errors/not-found";
import Profile from "./Profile";
export function updateProfile(
  data: IUpdateProfileParams,
  sparow: Sparow
): Promise<Profile> {
  {
    const formData = new FormData();
    if (data.username) {
      formData.append("username", data.username);
    }
    if (data.first_name) {
      formData.append("first_name", data.first_name);
    }
    if (data.last_name) {
      formData.append("last_name", data.last_name);
    }
    if (data.password) {
      formData.append("password", data.password);
    }
    if (data.email) {
      formData.append("email", data.email);
    }
    if (data.phone) {
      formData.append("phone", data.phone);
    }
    if (data.avatar) {
      formData.append("avatar", data.avatar);
    }
    console.log(data);
    return sparow.axios
      .post<{ user: IProfile }>(sparow.baseURL + `/profile`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => new Profile(response.data.user, sparow))
      .catch(catchApiValidationError)
      .catch(catchNotFoundError)
      .catch((error) => catchAuthError(error, sparow.authError$))
      .catch((error) => catchNetworkError(error, sparow.networkError$));
  }
}
