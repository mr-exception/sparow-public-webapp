import Sparow from "api/Sparow";

// base action definition
type ActionType = "LOG_IN" | "LOG_OUT" | "SET_SPAROW";
type IAction = {
  type: ActionType;
  profile?: Profile;
  sparow?: Sparow;
};

// step 0
type IState = {
  profile?: Profile;
  loggedIn: boolean;
  sparow?: Sparow;
};

// step 1
type IInitializedState = {
  profile?: Profile;
  loggedIn: boolean;
  sparow: Sparow;
};

// step 2
type ILoggedInState = {
  profile: Profile;
  loggedIn: true;
  sparow: Sparow;
};

// dispatch type
type DispatchType = (args: IAction) => IAction;
