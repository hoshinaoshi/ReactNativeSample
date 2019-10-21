import React from 'react';
import { Button } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "一覧",
  };
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
  Home:   { screen: HomeScreen },
  Detail: { screen: DetailScreen },
});

const App = createAppContainer(MainNavigator);

export default App;

