import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name: "hello",
    };
  }

  componentDidMount() {
    Alert.alert("componentDidMount")
  }

  componentDidUpdate(prevProps) {
    Alert.alert("componentDidUpdate")
  }

  changeName() {
    this.setState({
      name: "こんにちは"
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Child name={this.state.name}></Child>
        <Button onPress={() =>this.changeName()} title="changeName" />
      </View>
    );
  }
}

class Child extends React.Component {
  render() {
    return (
      <Text>{this.props.name}</Text>
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
