import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { Store } from "redux";
import { DispatchType, IAuthAction, IAuthState } from "types/storeActions";
import thunk from "redux-thunk";
import reducer from "./reduser";

const store: Store<IAuthState, IAuthAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

export default store;
