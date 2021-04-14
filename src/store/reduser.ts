import { IAction, IState } from "types/storeActions";

const initialState: IState = {
  loggedIn: false,
};
const reducer = (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case "LOG_IN":
      state.loggedIn = true;
      state.profile = action.profile;
      return state;

    case "LOG_OUT":
      state.loggedIn = false;
      state.profile = undefined;
      return state;

    case "SET_SPAROW":
      state.sparow = action.sparow;
      return state;

    case "UPDATE_USER":
      state.profile = action.profile;
      return state;

    default:
      return state;
  }
};

export default reducer;
