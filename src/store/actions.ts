import Profile from "api/profile/Profile";
import Session from "api/sessions/Session";
import Sparow from "api/Sparow";
import { IAction } from "types/storeActions";

// stores the user
export const storeUser = (profile: Profile): IAction => {
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

// update profile information
export const setProfile = (profile: Profile): IAction => {
  return { type: "UPDATE_USER", profile };
};

export const updateSessions = (sessions: {
  data?: Session[];
  current_page?: number;
  page_count?: number;
}): IAction => {
  return { type: "UPDATE_SESSIONS", sessions };
};
