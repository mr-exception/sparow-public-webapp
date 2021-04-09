import { IAction, IState } from "types/storeActions";

const initialState: IState = {
  loggedIn: false,
};
const reducer = (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case "LOG_IN":
      return { loggedIn: true, profile: action.profile };
    case "LOG_OUT":
      return { loggedIn: false };
    default:
      return state;
  }
};

export default reducer;
