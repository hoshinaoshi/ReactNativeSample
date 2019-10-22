import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import homeReducer from "./modules/Home";

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      home: homeReducer,
    }),
  );

  return store;
}
