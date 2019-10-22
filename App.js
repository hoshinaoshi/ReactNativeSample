import React from "react";
import { Provider } from "react-redux";
import Home from "./src/containers/Home";
import configureStore from "./src/configureStore";

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
