import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas"

import homeReducer from "./modules/Home";

const sagaMiddleware = createSagaMiddleware()

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      home: homeReducer,
    }),
    applyMiddleware(
      sagaMiddleware,
      logger
    ),
  );
  sagaMiddleware.run(rootSaga)
  return store;
}
