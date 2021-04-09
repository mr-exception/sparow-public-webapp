import { IProfile } from "api/interfaces/profile";
import Sparow from "api/Sparow";

type ActionType = "LOG_IN" | "LOG_OUT" | "SET_SPAROW";

type IAction = {
  type: ActionType;
  profile?: IProfile;
  sparow?: Sparow;
};

type IState = {
  profile?: IProfile;
  loggedIn: boolean;
};
type DispatchType = (args: IAction) => IAction;
