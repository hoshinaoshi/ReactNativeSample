import React from 'react';
import { Notifications } from 'expo';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { StyleSheet, Text, View, Alert } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {token: ""};
  }
  async componentDidMount(){
    let token;
    try {
      if (Constants.isDevice) {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        if (status === 'granted') {
          token = await Notifications.getExpoPushTokenAsync();
        }
      }
    } catch (error) {
      Alert.alert("Error")
    }
    this.setState({token: token})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.token}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
