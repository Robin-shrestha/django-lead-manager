import BaseReducer from "./BaseReducer";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  BaseReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
