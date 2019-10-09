import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        {
          // alignItemsを変更すると、Flexアイテムの配置が変わります
        }
        <View style={{...styles.container, alignItems: "center"}}>
          <View style={{...styles.item, backgroundColor: "red"}} />
          <View style={{...styles.item, backgroundColor: "yellow"}} />
          <View style={{...styles.item, backgroundColor: "green"}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  item: {
    width: 50,
    height: 50
  }
});

