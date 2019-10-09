import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: "red"}} />
        <View style={{flex: 2, backgroundColor: "yellow"}} />
        <View style={{flex: 3, backgroundColor: "green"}} />
      </View>
    );
  }
}
