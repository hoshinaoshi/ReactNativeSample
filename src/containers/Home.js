import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import * as homeModule from "../modules/Home";

const mapStateToProps = state => {
  return {
    home: state.home,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(homeModule.increment()),
    decrement: () => dispatch(homeModule.decrement()),
  }
}

class HomeScreen extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>{this.props.home.count}</Text>
        <Button title="increment" onPress={this.props.increment} />
        <Button title="decrement" onPress={this.props.decrement} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
