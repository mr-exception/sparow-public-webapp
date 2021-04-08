import { IProfile } from "api/interfaces/profile";

type IAuthAction = {
  type: "LOG_IN" | "LOG_OUT";
  profile?: IProfile;
};
type IAuthState = {
  profile?: IProfile;
  loggedIn: boolean;
};
type DispatchType = (args: IAuthAction) => IAuthAction;
