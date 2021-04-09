import { IProfile } from "api/interfaces/profile";
import Sparow from "api/Sparow";
import { IAction } from "types/storeActions";

// stores the user
export const storeUser = (profile: IProfile): IAction => {
  localStorage.setItem("user", JSON.stringify(profile));
  localStorage.setItem("auth_token", profile.access_token);
  localStorage.setItem("expires_at", profile.expires_at.toString());
  return { type: "LOG_IN", profile };
};

// remove the user
export const removeUser = (): IAction => {
  localStorage.removeItem("user");
  localStorage.removeItem("auth_token");
  localStorage.removeItem("expires_at");
  return { type: "LOG_OUT" };
};

// set sparow
export const setSparow = (sparow: Sparow): IAction => {
  return { type: "SET_SPAROW", sparow };
};
