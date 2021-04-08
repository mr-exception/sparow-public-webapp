import { IAuthAction, IAuthState } from "types/storeActions";

const initialState: IAuthState = {
  loggedIn: false,
};
const reducer = (
  state: IAuthState = initialState,
  action: IAuthAction
): IAuthState => {
  switch (action.type) {
    case "LOG_IN":
      return { loggedIn: true, profile: state.profile };
    case "LOG_OUT":
      return { loggedIn: false };
    default:
      return state;
  }
};

export default reducer;
