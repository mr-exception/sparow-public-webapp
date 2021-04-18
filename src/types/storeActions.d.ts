import Session from "api/sessions/Session";
import Sparow from "api/Sparow";

// base action definition
type ActionType =
  | "LOG_IN"
  | "LOG_OUT"
  | "SET_SPAROW"
  | "UPDATE_USER"
  | "UPDATE_SESSIONS";

type IAction = {
  type: ActionType;
  profile?: Profile;
  sparow?: Sparow;
  sessions?: {
    current_page?: number;
    page_count?: number;
    data?: Session[];
  };
};

// extra data
type ExtraData = {
  sessions: {
    current_page: number;
    page_count: number;
    data: Session[];
  };
};

// step 0
type IState = {
  profile?: Profile;
  loggedIn: boolean;
  sparow?: Sparow;
} & ExtraData;

// step 1
type IInitializedState = {
  profile?: Profile;
  loggedIn: boolean;
  sparow: Sparow;
} & ExtraData;

// step 2
type ILoggedInState = {
  profile: Profile;
  loggedIn: true;
  sparow: Sparow;
} & ExtraData;

// dispatch type
type DispatchType = (args: IAction) => IAction;
