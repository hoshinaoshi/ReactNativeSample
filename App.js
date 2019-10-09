import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: "column"}}>
          <View style={{width: 50, height: 50, backgroundColor: "red"}} />
          <View style={{width: 50, height: 50, backgroundColor: "yellow"}} />
          <View style={{width: 50, height: 50, backgroundColor: "green"}} />
        </View>
        <View style={{flex: 1, flexDirection: "row"}}>
          <View style={{width: 50, height: 50, backgroundColor: "red"}} />
          <View style={{width: 50, height: 50, backgroundColor: "yellow"}} />
          <View style={{width: 50, height: 50, backgroundColor: "green"}} />
        </View>
        <View style={{flex: 1, flexDirection: "column-reverse"}}>
          <View style={{width: 50, height: 50, backgroundColor: "red"}} />
          <View style={{width: 50, height: 50, backgroundColor: "yellow"}} />
          <View style={{width: 50, height: 50, backgroundColor: "green"}} />
        </View>
        <View style={{flex: 1, flexDirection: "row-reverse"}}>
          <View style={{width: 50, height: 50, backgroundColor: "red"}} />
          <View style={{width: 50, height: 50, backgroundColor: "yellow"}} />
          <View style={{width: 50, height: 50, backgroundColor: "green"}} />
        </View>
      </View>
    );
  }
}

