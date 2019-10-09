import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {alert("onPress")}}
          title="ボタンA"
        />
        <Button
          color="red"
          onPress={() => {alert("onPress")}}
          title="ボタンB"
        />
        <Button
          disabled={true}
          onPress={() => {alert("onPress")}}
          title="ボタンC"
        />
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
