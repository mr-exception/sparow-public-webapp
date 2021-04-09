import { IProfile } from "api/interfaces/profile";
import Sparow from "api/Sparow";

// base action definition
type ActionType = "LOG_IN" | "LOG_OUT" | "SET_SPAROW";
type IAction = {
  type: ActionType;
  profile?: IProfile;
  sparow?: Sparow;
};

// step 0
type IState = {
  profile?: IProfile;
  loggedIn: boolean;
  sparow?: Sparow;
};

// step 1
type IInitializedState = {
  profile?: IProfile;
  loggedIn: boolean;
  sparow: Sparow;
};

// step 2
type ILoggedInState = {
  profile: IProfile;
  loggedIn: true;
  sparow: Sparow;
};

// dispatch type
type DispatchType = (args: IAction) => IAction;
