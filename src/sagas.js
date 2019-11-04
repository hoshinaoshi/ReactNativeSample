import { all } from "redux-saga/effects";
import * as HomeModule from "./modules/Home";

export default function* rootSaga() {
  yield all([
    ...HomeModule.HomeSagas,
  ])
}
