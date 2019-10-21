import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

class TabAScreen extends React.Component {
  static navigationOptions = {
    title: "タブA",
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>タブA</Text>
      </View>
    );
  }
}

class TabBScreen extends React.Component {
  static navigationOptions = {
    title: "タブB",
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>タブB</Text>
      </View>
    );
  }
}

const BottomNavigation = createBottomTabNavigator(
  {
    TabAScreen,
    TabBScreen,
  }
)

const App = createAppContainer(BottomNavigation);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
