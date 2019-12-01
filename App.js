import React from 'react';
import { Linking } from 'expo';
import { View, Button } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "一覧",
  };
  _handleRedirect(event) {
    Linking.parse(event.url);
  };
  async componentDidMount() {
    Linking.addEventListener('url', this._handleRedirect);
  }
  render() {
    return (
      <Button
        title="詳細画面へ"
        onPress={() => this.props.navigation.navigate("Detail")}
      />
    );
  }
}

class DetailScreen extends React.Component {
  static navigationOptions = {
    title: "詳細",
  };
  render() {
    return (
      <Button
        title="一覧画面へ"
        onPress={() => this.props.navigation.goBack()}
      />
    );
  }
}

const MainNavigator = createStackNavigator({
  Home:   { screen: HomeScreen,   path: "home" },
  Detail: { screen: DetailScreen, path: "detail" },
});

const prefix = Linking.makeUrl("/");
const AppContainer = createAppContainer(MainNavigator);
const App = () => <AppContainer uriPrefix={prefix} />;

export default App
