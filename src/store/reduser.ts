import { IAction, IState } from "types/storeActions";

const initialState: IState = {
  loggedIn: false,
  sessions: {
    data: [],
    current_page: 1,
    page_count: 0,
  },
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

    case "UPDATE_SESSIONS":
      if (action.sessions) {
        if (action.sessions.data) {
          state.sessions.data = action.sessions.data;
        }
        if (action.sessions.current_page) {
          state.sessions.current_page = action.sessions.current_page;
        }
        if (action.sessions.page_count) {
          state.sessions.page_count = action.sessions.page_count;
        }
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
