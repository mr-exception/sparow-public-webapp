import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { Store } from "redux";
import { DispatchType, IAction, IState } from "types/storeActions";
import thunk from "redux-thunk";
import reducer from "./reduser";

const store: Store<IState, IAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

export default store;
